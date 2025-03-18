# Kodospace

Kodospace is a social networking application founded & developed by Emmanuel Moore (Immanuel Taylor) in 2020 using PHP/JS. The application underwent redevelopment on 03/31/2024 using various JavaScript technologies.

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
- **Motoko**
- **Node.js**
- **Python**
- **MongoDB**

## Setup Instructions

### Prerequisites
- **Node.js** (version 14 or higher)
- **Python** (version 3.6 or higher)
- **MongoDB** (running instance)
- **DFINITY Canister SDK**

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

Navigate to the `backend` directory and start the Python backend service:

```bash
cd backend
python app.py
```

### Motoko Backend Setup

#### 1. Create a New Motoko Project

Create a new Motoko project using the DFINITY SDK:

```bash
dfx new server
cd server
```

When prompted to select a backend language, choose "Motoko".

When prompted to select a frontend framework, choose "None".

When prompted to add extra features, you can leave them unchecked unless you need specific features.

#### 2. Develop the Backend Logic

Write your backend logic in the `main.mo` file located in the `src/server/` directory. Here is an example of a simple Motoko actor:

```motoko name=src/server/main.mo
import Debug "mo:base/Debug";

actor Kodospace {
  public query func greet(name: Text) : async Text {
    Debug.print("Hello, " # name # "!");
    return "Hello, " # name # "!";
  };

  // Add your other backend functions here
};
```

#### 3. Configure the Project

Make sure to configure your project in the `dfx.json` file. Here's an example configuration:

```json name=server/dfx.json
{
  "canisters": {
    "server": {
      "main": "src/server/main.mo",
      "type": "motoko"
    }
  },
  "networks": {
    "local": {
      "bind": "127.0.0.1:8000",
      "type": "ephemeral"
    }
  },
  "version": 1
}
```

#### 4. Deploy the Canister

Start the DFINITY local replica and deploy your canister:

```bash
dfx start --background
dfx deploy
```

#### 5. Integrate the Client with the Motoko Backend

Update your client-side code to interact with the deployed Motoko backend. You can use the Internet Computer's JavaScript library (`@dfinity/agent`) to communicate with your canister.

1. **Install the `@dfinity/agent` library:**

```bash
npm install @dfinity/agent
```

2. **Update your client-side code to call the backend:**

Here is an example of how to call the `greet` function from your client:

```javascript name=client/src/greet.js
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as kodospace_idl, canisterId as kodospace_id } from 'dfx-generated/server';

const agent = new HttpAgent();
const kodospace = Actor.createActor(kodospace_idl, { agent, canisterId: kodospace_id });

async function greet(name) {
  const greeting = await kodospace.greet(name);
  console.log(greeting);
}

greet('World');
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
python app.py

# Set up the Motoko backend
dfx new server
cd server
dfx start --background
dfx deploy
```

## Contact

For any questions or support, please contact [the-real-kodoninja](https://github.com/the-real-kodoninja).