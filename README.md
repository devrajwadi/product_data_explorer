# 📊 Product Data Explorer

A full-stack web application that scrapes real product navigation data from an external website, stores it in a database, and displays it through a frontend interface.

This project focuses on **web scraping, backend APIs, database caching, and frontend integration**, rather than UI styling.

---

## ✨ Features

- 🌐 Real-time web scraping using a headless browser  
- 🧠 Smart caching with PostgreSQL (avoids repeated scraping)  
- 🔁 Deduplication of scraped data  
- 🛠️ REST API built with NestJS  
- 🖥️ Frontend built with Next.js (App Router)  
- 🔗 End-to-end backend ↔ frontend integration  
- 📁 Clean project structure and version control  

---

## 🧰 Tech Stack

### Backend
- NestJS
- PostgreSQL
- TypeORM
- Crawlee
- Playwright

### Frontend
- Next.js (App Router)
- TypeScript

---

## 🏗️ Project Structure

product_data_explorer/
├── backend/ # NestJS backend, scraping logic, database
└── frontend/ # Next.js frontend (App Router)

yaml
Copy code

---

## 🔌 API Endpoints

### Backend (runs on `http://localhost:4000`)

| Method | Endpoint      | Description |
|------|---------------|-------------|
| GET  | `/navigation` | Scrapes and returns navigation categories (cached after first run) |

---

## 🖥️ Frontend Pages

| Route | Description |
|-----|-------------|
| `/` | Displays navigation categories fetched from backend |
| `/category/[slug]` | Dynamic category route (placeholder for extension) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/devrajwadi/product_data_explorer.git
cd product_data_explorer
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder:

env
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=product_data_explorer
PORT=4000
Start the backend server:

bash
Copy code
npm run start:dev
Backend will be available at:

arduino
Copy code
http://localhost:4000
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend will be available at:

arduino
Copy code
http://localhost:3000
🧠 How It Works
The frontend requests navigation data from the backend

The backend checks the database for cached data

If no data exists, the scraper fetches live data from the source website

Data is deduplicated and stored in PostgreSQL

Cached data is returned on subsequent requests

The frontend renders dynamic navigation links

🎯 Design Decisions
UI is intentionally minimal to emphasize functionality

Scraping is performed only when necessary

Duplicate entries are handled safely before database insertion

Clear separation between frontend and backend responsibilities

🔮 Future Enhancements
Product listings per category

Product detail pages

Pagination and filtering

Improved UI styling

Deployment to cloud platforms

📌 Summary
Product Data Explorer demonstrates a complete full-stack workflow involving scraping, APIs, databases, and frontend rendering.
The project prioritizes correctness, architecture, and real-world problem solving over visual polish.

📝 Author
Dev Rajwadi
