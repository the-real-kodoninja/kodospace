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
- **PostgreSQL**

## Setup Instructions

### Prerequisites
- **Node.js** (version 14 or higher)
- **Python** (version 3.6 or higher)
- **PostgreSQL** (version 12 or higher)
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

Create a `.env.local` file in the root of your project and add the necessary environment variables. An example `.env.local` file might look like this:

```env
# .env.local

# PostgreSQL connection string
DATABASE_URL=postgresql://kodospace_user:yourpassword@localhost:5432/kodospace

# Node.js server port
PORT=3000
```

#### 4. Initialize and Start PostgreSQL Server

1. **Initialize a new PostgreSQL data directory:**

   ```bash
   initdb -D ~/pgdata
   ```

2. **Start the PostgreSQL server using the new data directory:**

   ```bash
   pg_ctl -D ~/pgdata start
   ```

3. **Create the PostgreSQL database and user:**

   ```bash
   createdb kodospace
   psql -d kodospace -c "CREATE USER kodospace_user WITH PASSWORD 'yourpassword';"
   psql -d kodospace -c "GRANT ALL PRIVILEGES ON DATABASE kodospace TO kodospace_user;"
   ```

#### 5. Create the Database and Tables

1. **Open the `psql` terminal:**

   ```bash
   psql -U kodospace_user -d kodospace
   ```

2. **Run the SQL script to set up the database and tables:**

   ```sql
   -- Create the posts table
   CREATE TABLE posts (
       id SERIAL PRIMARY KEY,
       content TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Insert dummy data into the posts table
   INSERT INTO posts (content) VALUES
   ('This is the first post.'),
   ('Here is another post.'),
   ('This is yet another post.');

   -- Create the users table
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       balance INTEGER DEFAULT 0
   );

   -- Insert dummy data into the users table
   INSERT INTO users (username, balance) VALUES
   ('user1', 100),
   ('user2', 200),
   ('user3', 300);

   -- Create the transactions table
   CREATE TABLE transactions (
       id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(id),
       amount INTEGER NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Insert dummy data into the transactions table
   INSERT INTO transactions (user_id, amount) VALUES
   (1, 50),
   (2, -30),
   (3, 70);
   ```

#### 6. Run the Development Server

Navigate to the `client` directory and start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

#### 7. Run the Python Backend Service

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
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor Kodospace {

  // A simple user structure
  type User = {
    id: Nat;
    username: Text;
    balance: Nat;
  };

  // A mapping from user ID to User
  stable var users: Trie.Trie<Nat, User> = Trie.empty();

  // A counter for generating user IDs
  stable var userIdCounter: Nat = 0;

  // Register a new user
  public func register(username: Text) : async User {
    let newUser: User = {
      id = userIdCounter;
      username = username;
      balance = 0;
    };
    users := Trie.put(users, userIdCounter, newUser);
    userIdCounter += 1;
    return newUser;
  };

  // Get user by ID
  public query func getUser(id: Nat) : async ?User {
    return Trie.find(users, id);
  };

  // Add tokens to a user's balance
  public func addTokens(userId: Nat, amount: Nat) : async ?User {
    let maybeUser = Trie.find(users, userId);
    switch maybeUser {
      case (?user) {
        let updatedUser = { user with balance = user.balance + amount };
        users := Trie.put(users, userId, updatedUser);
        return ?updatedUser;
      };
      case null {
        return null;
      };
    }
  };

  // Deduct tokens from a user's balance
  public func deductTokens(userId: Nat, amount: Nat) : async ?User {
    let maybeUser = Trie.find(users, userId);
    switch maybeUser {
      case (?user) {
        if (user.balance < amount) {
          return null;
        };
        let updatedUser = { user with balance = user.balance - amount };
        users := Trie.put(users, userId, updatedUser);
        return ?updatedUser;
      };
      case null {
        return null;
      };
    }
  };

  // Greet function
  public query func greet(name: Text) : async Text {
    Debug.print("Hello, " # name # "!");
    return "Hello, " # name # "!";
  };
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
# Create a .env.local file in the client directory with the necessary variables

# Initialize and start PostgreSQL server
initdb -D ~/pgdata
pg_ctl -D ~/pgdata start
createdb kodospace
psql -d kodospace -c "CREATE USER kodospace_user WITH PASSWORD 'yourpassword';"
psql -d kodospace -c "GRANT ALL PRIVILEGES ON DATABASE kodospace TO kodospace_user;"

# Create the database and tables
psql -U kodospace_user -d kodospace
# Run the provided SQL script to create tables and insert dummy data

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