# phish-or-miss

*Phish or Miss* is a browser-based mini game designed to raise awareness around phishing emails and cybersecurity. Players are shown example emails and must decide whether each one is a **phishing attempt** or a **legitimate message**. For each correct answer, they earn points and receive immediate feedback.

The game was developed as part of a UX trial task and built using **Vue 3** and **Vite**.

---

## 🚀 How to Use

You can run the game in two ways:

### 🔹 Option 1: Run in Browser (no server required)

You can use the built-in preview mode to serve the static build locally:

# Install dependencies
npm install

# Create production-ready version
npm run build

# Start local static server
npm run preview
Then open the link shown in your terminal in your browser.

### 🔹 Option 2: Run in Development Mode
If you want to make changes and test live:

npm install
npm run dev


# Game Rules

- You’ll be shown 10 emails, one after another.

- Decide for each: Phishing or Real.

- Get immediate feedback after each choice.

- Earn 10 points for every correct answer.

- At the end, you'll receive an evaluation based on your score.

 
# Planned Improvements
This prototype focuses on core functionality. Future development could include:

- Visual Overhaul: Make emails look like real inboxes with layout, sender address, icons, etc.

- Interactive Gameplay: Instead of choosing "Phishing or Real", users will click on suspicious elements in the email (e.g., fake links, strange sender names).

-> Could be used to give bonus points or become the main game mechanic.

- Progressive Difficulty: Emails could vary in obviousness and complexity.

- Mobile View: Improved layout for responsive play.

- Score Storage: Save results in localStorage or as a shareable result.

# USPs
- Learn by doing: Immediate feedback for better retention.

- Quick and accessible: Browser-based, no server or installation needed.

- Gamified learning: Fun, repeatable, and measurable.

- Adaptable: Can be customized with company-specific email examples.

# Tech Stack
- Vue 3 (Composition API)

- Vite

- JavaScript

- HTML/CSS 

# Repository
Available on GitHub:
🔗 https://github.com/Theresa-Weiglein/phish-or-miss

# License
MIT – free to use, adapt and extend.