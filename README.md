# 🧠 JavaScript Fundamentals Quiz

A simple and interactive **JavaScript Fundamentals Quiz** built with vanilla **HTML, CSS, and JavaScript**.  
This project tests basic knowledge through multiple-choice questions and dynamically displays your score at the end.

---

## 🚀 Demo
**Live Demo:** *(Add your GitHub Pages or hosted link here once deployed)*  
Example: [https://eavesa2796.github.io/Quiz-DOMination---JavaScript-Fundamentals](#)

---

## 🧩 Features

✅ Dynamic question loading  
✅ Visual feedback for correct/incorrect answers  
✅ Score tracking and display at the end  
✅ Restart functionality  
✅ Clean, responsive dark-themed design  
✅ 100% vanilla JavaScript — no libraries or frameworks

---

## 🖥️ Technologies Used

- **HTML5** – Structure of the quiz interface  
- **CSS3** – Styling, layout, and interactive hover effects  
- **JavaScript (ES6)** – Quiz logic and DOM manipulation  

---

## 📂 Project Structure
Quiz-DOMination---JavaScript-Fundamentals/
│
├── index.html # Main HTML structure
├── style.css # Styling for layout and quiz visuals
└── script.js # Quiz logic and functionality

---

## ⚙️ How It Works

### 🧱 HTML
Defines the structure of the quiz, including:
- A **question container**
- **Multiple-choice buttons**
- **Next** and **Restart** buttons
- A **score screen** displayed after completion

### 🎨 CSS
Handles the presentation:
- Dark-themed background with centered layout  
- Highlight colors for correct and incorrect answers  
  - ✅ **Green** for correct  
  - ❌ **Red** for incorrect  
- Buttons and transitions for smooth interactions  

### 🧮 JavaScript
Manages all quiz functionality:
1. Loads each question dynamically from the `quizData` array  
2. Renders answer options as clickable buttons  
3. Tracks user score and disables options after selection  
4. Displays total score upon completion  
5. Restarts the quiz with a single button click  

---

## 🧠 Sample Question Data

Questions are defined inside `script.js`:

```js
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
  }
];
```
---

## 🧩 Future Enhancements

⏱️ Add a countdown timer per question
🔀 Randomize question order
💾 Store high scores in localStorage
⚙️ Add difficulty levels
🔊 Add sound effects or transitions

---


