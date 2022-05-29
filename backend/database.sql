CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)

);

CREATE DATABASE marketplace;

CREATE TABLE services(
  service_id uuid DEFAULT uuid_generate_v4(),
  s_name VARCHAR(255) NOT NULL,
  s_description VARCHAR(255) NOT NULL,
  upload_date VARCHAR(255) NOT NULL,
  organisation VARCHAR(255) NOT NULL,
  PRIMARY KEY(service_id)
);

ALTER TABLE services
ADD image_url varchar(255);

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

INSERT INTO users (user_name, user_email, user_password) 
VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');