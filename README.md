# 📄 Resume Analyzer - AI-Powered ATS Simulator

> A modern, interactive web application that parses resumes and calculates ATS (Applicant Tracking System) compatibility scores based on industry-standard role requirements.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

---

## 🌟 Overview

**Resume Analyzer** is a frontend ATS simulation designed to help job seekers optimize their resumes. By analyzing resume content against specific job roles, the tool provides real-time feedback on skill gaps, keyword matching, and overall compatibility.

### Key Features

- **ATS Score Calculation**: Instant score based on found vs. missing skills for the selected role.
- **Skill Radar**: Visual breakdown of skills present in the resume versus industry requirements.
- **Role-Specific Analysis**: Supports multiple domains including Frontend, Backend, Full Stack, Data Science, and ML.
- **Optimization Suggestions**: Actionable feedback on how to improve the resume for a specific target role.
- **Modern UI**: Clean, responsive layout with smooth animations and a "Google Material" aesthetic.

---

## 🚀 Role Support

The analyzer currently supports mapping for:
- 💻 **Frontend Developer**
- ⚙️ **Backend Developer**
- 🌐 **Full Stack Developer**
- 🛠 **Software Engineer**
- 📊 **Data Analyst**
- 🤖 **Machine Learning Engineer**

---

## 🛠 Technical Stack

- **Core**: React.js 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Soft-shadows, glassmorphism effects)
- **Deployment**: Optimized for GitHub Pages / Vercel

---

## 📂 File Structure

```
resume-analyzer-ui/
├── src/
│   ├── components/     # Reusable UI components (Upload, Score, Radar)
│   ├── pages/          # Main application views (Landing, Dashboard)
│   ├── App.jsx         # App routing and layout
│   └── main.jsx        # Entry point
├── index.html          # HTML Template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Build configuration
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/msaispurthi/resume-analyzer-ui.git
   cd resume-analyzer-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

Contributions are welcome!
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

<p align="center">
  Built with ❤️ to empower job seekers.
</p>
