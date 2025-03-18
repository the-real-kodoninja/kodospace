-- Connect to the kodospace database
\c kodospace;

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