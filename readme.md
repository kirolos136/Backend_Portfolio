# Portfolio Backend (Node.js + MongoDB + WebSockets)

A full-featured backend for a portfolio website built with **Node.js, Express, and MongoDB**.  
It provides RESTful API endpoints for About, Projects, Blog (with likes and comments), and Contact submissions, plus **real-time notifications** using WebSockets.

---

## 📌 Features
- **About API** – Serve developer profile information.  
- **Projects API** – Fetch all projects or add new ones.  
- **Blog API** – Manage blog posts with likes and comments.  
- **Contact API** – Receive and store contact form submissions.  
- **WebSocket Notifications** – Real-time events for blog likes and comments.  
- **Environment Config** – `.env` support for secrets and database URIs.  

---

## 🛠 Tech Stack
- **Node.js** – Backend runtime  
- **Express.js** – REST API framework  
- **MongoDB + Mongoose** – Database and models  
- **Socket.IO** – Real-time notifications  
- **CORS** – Secure frontend integration  
- **dotenv** – Environment variable management  

---

## 📂 Project Structure
```
backend/
 ├── models/          # Mongoose models (About, Project, Blog, Message)
 ├── controllers/     # Business logic
 ├── routes/          # Express routes
 ├── server.js        # App entry point
 ├── .env             # Environment variables
 └── README.md
```

---

## 🔑 Example Mongoose Models
**About**
```js
{
  name: String,
  profession: String,
  bio: String,
  skills: [String],
  education: String,
  profileImage: String
}
```

**Project**
```js
{
  name: String,
  description: String,
  githubUrl: String,
  stars: Number
}
```

**Blog**
```js
{
  title: String,
  date: Date,
  excerpt: String,
  url: String,
  likes: Number,
  comments: [String]
}
```

**Message**
```js
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

---

## 🌐 REST API Endpoints
- **GET /about** → Returns developer profile  
- **GET /projects** → Returns all projects  
- **POST /projects** → Adds a new project  
- **GET /blog** → Returns all blog posts  
- **POST /blog** → Creates a new blog post  
- **POST /blog/:id/like** → Likes a blog & sends notification  
- **POST /blog/:id/comment** → Adds a comment & sends notification  
- **POST /contact** → Stores contact form submission  

---

## ⚡ WebSocket Notifications
- Triggered on blog interactions:
  - `"Blog liked: My Learning Journey"`  
  - `"New comment on blog: Express Tips"`  
- Clients listen via a WebSocket connection for real-time updates.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-backend.git
cd portfolio-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Server
```bash
npm run dev
```
Server runs on **http://localhost:5000**

---

## 📄 License
This project is licensed under the **MIT License** — you’re free to use and modify it.