const quizData = [
  {
    question: "What is an apple?",
    options: ["fruit", "veggie", "pear", "meat", "dairy"],
    answer: 0,
  },
  {
    question: "What color is the sky?",
    options: ["green", "blue", "red", "yellow"],
    answer: 1,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: 1,
  },
];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0; // Track current question index
let score = 0; // Track user score

function loadQuestion() {
  // Load current question and options
  const currentQuestion = quizData[currentQuestionIndex]; // Get current question object
  questionContainer.textContent = currentQuestion.question; // Set question text
  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    // Create buttons for each option
    const button = document.createElement("button"); // Create button element
    button.textContent = option; // Set button text
    button.addEventListener("click", () => selectOption(index)); // Add click event listener
    optionsContainer.appendChild(button); // Append button to options container
  });
}

function selectOption(index) {
  // Handle option selection
  const buttons = optionsContainer.querySelectorAll("button"); // Get all option buttons
  buttons.forEach((btn) => (btn.disabled = true)); // Disable all buttons after selection

  const correctAnswer = quizData[currentQuestionIndex].answer; // Get correct answer index

  if (index === correctAnswer) {
    // Check if selected answer is correct
    buttons[index].classList.add("correct"); // Mark as correct
    score++; // Increment score
  } else {
    buttons[index].classList.add("incorrect"); // Mark as incorrect
  }

  nextButton.classList.remove("hidden"); // Show next button
}

nextButton.addEventListener("click", () => {
  // Handle next button click
  currentQuestionIndex++; // Move to next question
  if (currentQuestionIndex < quizData.length) {
    // Check if there are more questions
    loadQuestion(); // Load next question
  } else {
    // Quiz is over
    showScore(); // Show final score
  }
});

function showScore() {
  // Display final score
  document.getElementById("quiz-container").classList.add("hidden"); // Hide quiz container
  scoreContainer.classList.remove("hidden"); // Show score container
  scoreDisplay.textContent = `You scored ${score} out of ${quizData.length}`; // Display score
}

restartButton.addEventListener("click", () => {
  // Handle restart button click
  score = 0; // Reset score
  currentQuestionIndex = 0; // Reset question index
  scoreContainer.classList.add("hidden"); // Hide score container
  document.getElementById("quiz-container").classList.remove("hidden"); // Show quiz container
  loadQuestion(); // Load first question
});
// Start the quiz
loadQuestion(); // Load the first question when the script runs
