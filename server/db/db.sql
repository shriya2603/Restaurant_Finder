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

-- Create Reviews Table 
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating>=1 AND rating <=5),
    restaurant_id BIGINT NOT NULL REFERENCES restaurants (id)
);

-- Instert test data in reviews table 
INSERT INTO reviews ( name, review, rating,restaurant_id ) VALUES ('Shriya', 'ok foood', 3, 1 );