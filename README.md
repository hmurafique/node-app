# 🚀 Custom Dockerized Node.js App Deployment

This project is a simple Node.js + Express application deployed using a **manually written Dockerfile**. It's built for learning Docker, containerization, and AWS EC2 deployment.

---

## 📁 Project Structure
```bash
node-app/
├── server.js
├── package.json
├── Dockerfile
└── README.md
```

---

## 💡 Features

- Custom `Dockerfile` (written from scratch)
- Node.js + Express server
- Deployable on AWS EC2 with Docker
- Exposes port `3000`

---

## 🛠️ How to Run This App (Locally or on EC2)

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

### 2. Build the Docker Image
docker build -t node-app .

### 3. Run the Docker Container
docker run -d --name node-app-service -p 3000:3000 node-app

### 4. Test in Browser or Curl
curl http://localhost:3000
Or open your browser: http://<your-ec2-ip>:3000
You should see:Hello from my custom Docker deployment!



