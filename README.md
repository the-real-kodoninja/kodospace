# Kodospace

Kodospace is a social networking application founded & developed by Emmanuel Moore (Immanuel Taylor) in 2020 using PHP/JS. The application underwent redevelopment on 03/31/2024 using various JavaScript libraries, Sass/Tailwind for styling, and Python/MongoDB for the backend. This README provides detailed instructions on how to set up and run the Kodospace application.

## Development Team

The development (Aviyon/Kodoverse) team, coming in Q4 2024/Q1 2025, will assist in the continued development of Kodospace and the Kodoverse, making it available to the public.

## Core Technologies

### Frontend
- **React.js**
- **Next.js**
- **Node.js**
- **TypeScript**
- **Tailwind CSS**
- **Sass**

### Backend
- **Node.js**
- **Python**
- **MongoDB**

## Setup Instructions

### Prerequisites
- **Node.js** (version 14 or higher)
- **Python** (version 3.6 or higher)
- **MongoDB** (running instance)

### Steps to Run the Application

#### 1. Clone the Repository

```bash
git clone https://github.com/the-real-kodoninja/kodospace.git
cd kodospace
```

#### 2. Install Dependencies

Navigate to the client directory and install the necessary dependencies:

```bash
cd client
npm install
```

#### 3. Set Up Environment Variables

Create a `.env` file in the `client` directory and add the necessary environment variables. An example `.env` file might look like this:

```env
# .env

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/kodospace

# Node.js server port
PORT=3000
```

#### 4. Start the MongoDB Server

Make sure your MongoDB server is running. If you have MongoDB installed locally, you can start it with:

```bash
mongod
```

#### 5. Run the Development Server

Navigate to the `client` directory and start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

#### 6. Run the Python Backend Service

Navigate to the `backend` directory and install the necessary Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

Start the Python backend service:

```bash
python app.py
```

### Summary of Commands

```bash
# Clone the repository
git clone https://github.com/the-real-kodoninja/kodospace.git
cd kodospace

# Install Node.js dependencies
cd client
npm install

# Set up environment variables
# Create a .env file in the client directory with the necessary variables

# Start MongoDB server
mongod

# Start the development server
npm run dev

# Run the Python backend service
cd backend
pip install -r requirements.txt
python app.py
```

## Contact

For any questions or support, please contact [the-real-kodoninja](https://github.com/the-real-kodoninja).
