# 🌍 ShareAt – Donation & Reuse Platform

ShareAt is a full-stack MERN application that helps donors connect with NGOs and communities by donating clothes, books, furniture, and household essentials.

The platform promotes sustainable reuse, reduces waste, and enables transparent donation management through role-based dashboards for Donors, NGOs, and Administrators.

---

## 🚀 Features

### 👤 Donor Portal
- Create donations
- Track donation status
- View donation history
- Manage personal donations

### 🏢 NGO Portal
- View available donations
- Accept donation requests
- Access donor information
- Manage incoming donations

### 🛡️ Admin Portal
- Approve NGO registrations
- Monitor platform activity
- Manage users and donations
- View platform statistics

### 🔐 Authentication
- JWT Authentication
- Role-based authorization
- Protected routes
- Secure login and registration

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT
- bcryptjs

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing Page](./screenshots/landing-page.png)

---

### 🔐 Login Page

![Login Page](./screenshots/login-page.png)

---

### 📝 Register Page

![Register Page](./screenshots/register-page.png)

---

### 👤 Donor Dashboard

![Donor Dashboard](./screenshots/donor-dashboard.png)

---

### 🏢 NGO Dashboard

![NGO Dashboard](./screenshots/ngo-dashboard.png)

---

### 🛡️ Admin Dashboard

![Admin Dashboard](./screenshots/admin-dashboard.png)

---

## 📂 Project Structure

client/
│
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── donor/
│ │ ├── ngo/
│ │ ├── admin/
│ │ └── auth/
│ ├── services/
│ └── routes/
│
server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
└── config/

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/rachan-98/shareat-donation-platform.git