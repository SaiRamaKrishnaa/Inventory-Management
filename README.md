# Inventory Management Dashboard

## Overview
This is a full-stack Inventory Management Dashboard application built using Next.js, Redux, Node.js, and AWS services. The application provides an interactive and user-friendly dashboard for managing inventory, tracking expenses, monitoring sales, and handling user data.

### Live Demo
- **Frontend:** [Inventory Dashboard](https://master.d1c42re5xxe9dr.amplifyapp.com/dashboard)
- **Backend API:** [API Gateway](https://hr6rqb98b2.execute-api.ap-south-1.amazonaws.com/prod)

## Tech Stack
### Frontend:
- **Next.js** (React Framework)
- **Tailwind CSS** (Styling)
- **Material UI Data Grid** (Handling complex data tables)
- **Redux Toolkit** (State management)
- **Redux Toolkit Query** (API interactions)
- **Recharts** (Data visualization)

### Backend:
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **Prisma** (ORM for database management)
- **AWS Services:**
  - **RDS** (Database management)
  - **EC2** (Compute power)
  - **API Gateway** (API endpoints)
  - **Amplify** (Frontend deployment)
  - **S3** (Storage solution)

## Project Structure
```
└── sairamakrishnaa-inventory-management/
    ├── client/ (Frontend)
    │   ├── components/
    │   ├── lib/
    │   ├── public/
    │   ├── state/ (Redux store & API calls)
    │   ├── app/ (Next.js pages & layouts)
    ├── server/ (Backend)
    │   ├── prisma/ (Database schema and seed data)
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── routes/
```

## Features
### Dashboard
- View **popular products**, **sales summary**, **purchase summary**, and **expense breakdown**
- Interactive **charts** and **data tables**

### Inventory Management
- List all products with **pricing, stock quantity, and ratings**
- Add, update, or delete inventory items

### Expense Tracking
- Categorized **expense summary**
- Monitor **spending trends** over time

### User Management
- List all registered users with **emails and IDs**

## API Endpoints & Sample Data
### 1. `/dashboard`
```json
{
  "popularProducts": [
    {
      "productId": "000a8c23-5bca-436c-a216-4e747a94c511",
      "name": "Yew Plum Pine",
      "price": 196.27,
      "rating": 1.6,
      "stockQuantity": 967173
    }
  ],
  "salesSummary": [
    {
      "salesSummaryId": "c85efa84-d294-4c2e-a9a5-8774d92af8bf",
      "totalValue": 2882180.14,
      "changePercentage": 57.29,
      "date": "2024-03-13T01:19:11.000Z"
    }
  ]
}
```

### 2. `/products`
```json
[
  {
    "productId": "d35623ee-bef6-42b2-8776-2f99f8bb4782",
    "name": "Pinkscale Blazing Star",
    "price": 456.04,
    "rating": 2.25,
    "stockQuantity": 124834
  }
]
```

### 3. `/users`
```json
[
  {
    "userId": "3b0fd66b-a4d6-4d95-94e4-01940c99aedb",
    "name": "Carly",
    "email": "cvansalzberger0@cisco.com"
  }
]
```

### 4. `/expenses`
```json
[
  {
    "expenseByCategoryId": "9a86fea1-8b89-4f2f-829f-4406e530934d",
    "expenseSummaryId": "cdfd8bfd-1851-4cd1-ab5f-e66e7260ba92",
    "category": "Office",
    "amount": "18",
    "date": "2024-03-11T08:04:25.000Z"
  }
]
```

## Deployment
### Frontend (Amplify)
```sh
# Install dependencies
cd client
npm install

# Run locally
npm run dev
```

### Backend (Node.js + AWS EC2)
```sh
# Install dependencies
cd server
npm install

# Start backend server
npm run start
```

## Future Enhancements
- **User Authentication** (JWT-based login/logout)
- **Role-based access control** (Admin, Manager, Employee)
- **Automated email notifications** for low inventory
- **Integration with external accounting software**

## Author
[Sai Rama Krishna Pittu](https://github.com/sairamakrishnaa)

