
# 📄 Resume AI Analyzer

A web app that helps job seekers improve their resumes using AI. Upload your resume (PDF or DOCX), and get real-time feedback to enhance clarity, impact, and ATS (Applicant Tracking System) compatibility.

---

## 🧠 Features

- 📤 Upload resumes in `.pdf` or `.docx` format  
- 🤖 Get AI-powered suggestions for improvements  
- 🛠️ Detect ATS-unfriendly formatting  
- ✍️ Reword weak phrases using GPT-3.5  

---

## 🧰 Tech Stack

| Layer        | Tech Used                              |
|--------------|----------------------------------------|
| **Frontend** | React, Material UI, Axios              |
| **Backend**  | Python, FastAPI, pdfplumber, python-docx |
| **AI Engine**| OpenAI GPT-3.5 Turbo via API           |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/AweSanjam/resume-ai.git
cd resume-ai
```

### 2. Install & Start Frontend

```bash
npm install
npm start
```

### 3. Start Backend (Python 3.10+ recommended)

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

> 💡 Make sure to set your OpenAI API key in `main.py` or via environment variable.

---

## 🌐 API

- `POST /upload` → Accepts a resume file and returns AI-generated feedback

---

## 📦 To Do

- [ ] Match resume to job descriptions  
- [ ] Highlight AI suggestions inline  
- [ ] Export improved resume

---

## 🧑‍💻 Author

**AweSanjam**  
📍 Canada  
[GitHub Profile](https://github.com/AweSanjam)
>>>>>>> da795112d203a38c83e44b36a3db99a6edbbd783
