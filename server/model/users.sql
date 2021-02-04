CREATE TABLE "users" (
  "user_id" bigserial PRIMARY KEY,
  "email" varchar(255) UNIQUE,
  "password" varchar(100), 
  "name" varchar(255)
);