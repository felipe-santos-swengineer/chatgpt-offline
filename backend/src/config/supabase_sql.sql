CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  user_input TEXT,
  ai_response TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);