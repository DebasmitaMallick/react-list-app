# React List App

## 🌟 Overview
The **React List App** is a web application that allows users to manage and organize lists efficiently. Users can select existing lists, create a new list by moving items between them, and perform various actions seamlessly. The app is built with **React, Redux, Vite, and Tailwind CSS** for a fast and responsive experience.

## 🚀 Features
- 📌 **View Lists** – Display available lists with their items.
- ✏️ **Create a New List** – Select two lists to create a new one.
- 🔄 **Move Items** – Drag and drop or click to move items between lists.
- 💾 **State Management** – Redux is used to handle application state.
- 🎨 **Responsive UI** – Styled with Tailwind CSS for a modern and adaptable layout.
- 🌐 **GitHub Pages Deployment** – The app is hosted on GitHub Pages.

## 🛠️ Technologies Used
- **React** – Component-based UI development
- **Redux** – State management
- **Vite** – Fast build tool for React
- **Tailwind CSS** – Utility-first CSS framework
- **React Router** – Navigation handling
- **React Toastify** – Notifications for user actions
- **Material UI** – UI components

## 📂 Project Structure
```
react-list-app/
│-- src/
│   │-- components/
│   │-- redux/
│-- public/
│-- package.json
│-- vite.config.js
│-- README.md
```

## 🖥️ Installation & Setup
To run the project locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/DebasmitaMallick/react-list-app.git
cd react-list-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
npm run dev
```
Now, open `http://localhost:5173/` in your browser.

## 🚀 Deployment on GitHub Pages
This project is deployed on **GitHub Pages**. Follow these steps to deploy:

### 1️⃣ Install `gh-pages`
```sh
npm install gh-pages --save-dev
```

### 2️⃣ Update `package.json`
Add the following lines:
```json
"homepage": "https://DebasmitaMallick.github.io/react-list-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3️⃣ Deploy the App
```sh
npm run deploy
```

### 4️⃣ Access App
App is available at:
🔗 **[https://DebasmitaMallick.github.io/react-list-app](https://DebasmitaMallick.github.io/react-list-app)**


## 👨‍💻 Author
Developed by **Debasmita Mallick** ✨.

Happy coding! 🚀