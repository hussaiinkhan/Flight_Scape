# **Plane Scape**

The Plane Scape is a full-stack application designed to search and book flights with filtering capabilities. It includes real-time flight information sourced from the Schiphol Public Flights API, allowing users to filter flights based on direction (arrival/departure) and scheduled date. The platform also provides additional services, such as hotels, rental cars, luxury packages, and adventure bookings.

## **Table of Contents**
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Minimum Requirements](#minimum-requirements)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## **Project Overview**

The Flight Booking Platform allows users to:
- Search for flights with filtering by direction (arrival or departure) and date.
- Book flights and view flight details.
- Access additional services such as hotels, rental cars, and adventure tour packages.
- A responsive design ensures a seamless experience across all device types.

This project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and integrates with the Schiphol Public Flights API to provide real-time flight data.

## **Project Demo**

You can click on the website [https://planescape-hussain.vercel.app] to get the demo of this website which I deployed on free servers. You can sign up with any dummy email and password to check the whole features or you can use two accounts which i created while development stage for the testing.

1- email: sherry@gmail.com
   password : sherry

2- email: hussain@gmail.com
   password: hussain


  The website may be slow while loggin in and fetching data because it is deployed on free servers so a little patients would be appreciated.


## **Features**

- **Flight Search**: Filter by direction (arrival or departure) and scheduled date.
- **Pagination & Infinite Scroll**: Efficient loading of flight data with pagination and infinite scroll functionality.
- **User Authentication**: Token-based authentication with JWT.
- **User Profile**: Display user details and past flight bookings.
- **Booking Management**: Save booked flights for logged-in users.
- **Additional Services**: Hotels, rental cars, adventure packages, and more.
- **Mobile Responsive Design**: Optimized for both desktop and mobile devices.

## **Tech Stack**

### Frontend
- React.js
- Tailwind CSS (for styling)
- Axios (for HTTP requests)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Axios (for integrating with external APIs like Schiphol)

### External APIs
- **Schiphol Public Flights API**: For retrieving real-time flight data.

## **Minimum Requirements**

Before running the application, ensure that the following are installed on your system:
- Node.js (v14.x or above)
- MongoDB (v4.x or above)
- npm or yarn (for package management)
- An IDE or code editor like Visual Studio Code
- Internet connection to interact with the external API (Schiphol Public Flights API)

### Environment Variables:
Set the following environment variables for smooth operation:

- `APP_ID` – Schiphol Public Flights API App ID
- `APP_KEY` – Schiphol Public Flights API App Key
- `JWT_SECRET` – Secret key for JWT authentication
- `MONGO_URL` – MongoDB connection string

## **Installation**

### Cloning the Repository
```bash
git clone https://github.com/your-username/plane_scape.git
cd plane_scape
```

## **Backend Setup**

### 1. Install Dependencies
Navigate to the backend folder and install the necessary dependencies:

```bash
cd server_app
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `backend` directory with the following values:

```bash
APP_ID=your_schiphol_app_id
APP_KEY=your_schiphol_app_key
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Run the Backend Server
```bash
npm run dev | nodemon server.js
```
This will start the backend server on `http://localhost:5001`.

## **Frontend Setup**

### 1. Install Dependencies
Navigate to the frontend folder and install the necessary dependencies:

```bash
cd client_app
npm install
```

### 2. Run the Frontend Development Server
```bash
npm start
```
This will start the frontend development server on `http://localhost:3000`.

### 3. Build for Production
To create a production build, run:
```bash
npm run build
```

## **API Endpoints**

### **Flights API**
#### `GET /api/flights`
Fetches flights from Schiphol API. Supports query parameters for filtering flights:
- `flightDirection` – Arrival (`A`) or Departure (`D`)
- `scheduleDate` – Format: `yyyy-MM-dd`

Example:
```bash
http://localhost:5001/api/flights?flightDirection=A&scheduleDate=2024-09-21
```

### **Flight Booking API**
#### `POST /api/flights/book`
Saves the flight details in the booked flights for user.

### **Booked Flights API**
#### `GET /api/flights/booked-flights`
Fetches the logged-in user's booked flights data.

### **User API**
#### `GET /api/users/profile`
Fetches the logged-in user's profile data.

## **Usage**

### Running the Application
1. Ensure both frontend and backend servers are running:
   - Frontend on `http://localhost:3000`
   - Backend on `http://localhost:5001`

2. On the homepage, you can:
   - Use the flight search form to filter flights by arrival/departure and date.
   - View available flights and book them.
   - Access additional services, including hotels, rental cars, and adventure packages.

3. Navigate to the profile page to view user details and previously booked flights.

### Working Satge Screen Shots of Application:
  1- HomePage with out signed in user
  
  <img width="1423" alt="Screenshot 2024-09-21 at 12 16 16 PM" src="https://github.com/user-attachments/assets/260a667f-8133-4c4f-a234-c9de0f9de145">
  
  2- HomePage with signed in user (Navbar showing details of the signed in user) 
    
  <img width="1426" alt="Screenshot 2024-09-21 at 12 18 18 PM" src="https://github.com/user-attachments/assets/4bff2280-fb90-4542-bb3d-7ee0884bda8d">
  
  3- User Sign in Page:
  
<img width="1431" alt="Screenshot 2024-09-21 at 12 16 28 PM" src="https://github.com/user-attachments/assets/6d86e036-2422-4154-9569-4c7503d39f67">

4- User Sign-up Page:

<img width="1435" alt="Screenshot 2024-09-21 at 12 16 43 PM" src="https://github.com/user-attachments/assets/27499687-fc05-448a-aac0-d19627dc05f8">

5- Flight Details Page:

<img width="1422" alt="Screenshot 2024-09-21 at 12 18 29 PM" src="https://github.com/user-attachments/assets/62a5d0d9-b7cf-4dea-b649-d13fefeffef7">

6- User Profile Page:

<img width="1423" alt="Screenshot 2024-09-21 at 12 18 42 PM" src="https://github.com/user-attachments/assets/c30e949c-f957-4360-82c4-f744d5948a6c">

7- MyFlights Page:

<img width="1427" alt="Screenshot 2024-09-21 at 12 18 57 PM" src="https://github.com/user-attachments/assets/af485f8f-3370-4ea9-90b9-eb25201b0ed9">

8- MyFlights Page with no booking:

<img width="1427" alt="Screenshot 2024-09-21 at 12 29 31 PM" src="https://github.com/user-attachments/assets/6d6125e5-f7a2-4f0c-92e5-facfc3568276">

9- Mobile Responsive design of website:

<img width="486" alt="Screenshot 2024-09-21 at 12 17 26 PM" src="https://github.com/user-attachments/assets/79f0f2a1-5a8d-4c11-a56f-de298b750538">

<img width="477" alt="Screenshot 2024-09-21 at 12 17 36 PM" src="https://github.com/user-attachments/assets/b10f35cc-e7e6-404e-92ec-b000d0d3a363">

<img width="484" alt="Screenshot 2024-09-21 at 12 18 07 PM" src="https://github.com/user-attachments/assets/e5f944cb-5a58-4cbe-9f83-8130067cf8a1">















    





## **Contributing**

We welcome contributions to enhance the platform! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
