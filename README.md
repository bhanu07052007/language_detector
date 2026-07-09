# 🌍 Language Detector

A simple command-line Language Detector built with **Node.js**. This project detects the most probable language of a given text using the **franc** and **languagedetect** packages while enhancing terminal output with the **colors** package.

---

## ✨ Features

- Detects the language of any input sentence.
- Supports hundreds of languages.
- Colorful terminal output.
- Lightweight and easy to use.
- Command-line interface.
- Beginner-friendly Node.js project.

---

## 🛠️ Built With

- Node.js
- JavaScript (ES Modules)
- franc
- languagedetect
- colors

---

## 📁 Project Structure

```
language/
│── assets/
│   └── screenshots/
│── node_modules/
│── index.js
│── package.json
│── package-lock.json
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/bhanu07052007/language_detector.git
```

Navigate into the project

```bash
cd language_detector
```

Install dependencies

```bash
npm install
```

---

## ▶️ Usage

Run the program from the terminal.

```bash
node index.js "Hello, how are you?"
```

Example Output

```text
Our best guess is: English
```

Another example

```bash
node index.js "Bonjour tout le monde"
```

Output

```text
Our best guess is: French
```

---

## 🧪 Sample Test Cases

| Input | Expected Output |
|-------|-----------------|
| Hello, how are you? | English |
| Bonjour tout le monde | French |
| Hola amigo | Spanish |
| Guten Morgen | German |
| Ciao come stai | Italian |
| नमस्ते आप कैसे हैं | Hindi |
| నమస్తే మీరు ఎలా ఉన్నారు | Telugu |
| こんにちは | Japanese |
| 你好 | Chinese |
| 안녕하세요 | Korean |

---

## 📸 Screenshot

### Detecting English

![English Detector](assets/screenshots/english_detector.png)
![Not Detected](assets/screenshots/not_detected.png)

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| **franc** | Detects the ISO language code from text |
| **languagedetect** | Provides language detection based on text analysis |
| **colors** | Adds colored output to the terminal |

---

## 🚀 Future Improvements

- Web-based interface
- React frontend
- Express backend API
- Confidence percentage
- Voice language detection
- File language detection
- Upload text files for analysis
- Language history
- Dark mode UI

---

## 👨‍💻 Author

**Aravapalli Bhanu Venkata Naga Sai**

GitHub: https://github.com/bhanu07052007
LinkedIn: https://www.linkedin.com/in/bhanu-aravapalli/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

## 📄 License
This project is created for educational and learning purposes.

Feel free to use and modify it.