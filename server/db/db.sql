-- Create database for project 
CREATE DATABASE yelp;

-- Create Restaurants table 
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range>=1 AND price_range <=5)
);
-- BIGSERIAL : will increment and its a big integer

-- Insert test data in restaurants table
INSERT INTO restaurants ( name, location, price_range) VALUES ('McDonalds', 'New York', 3 );

-- Drop table 
DROP TABLE restaurants;