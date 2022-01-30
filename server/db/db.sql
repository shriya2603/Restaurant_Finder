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

-- Average rating of a restaurant 
select trunc(AVG(rating),2) AS average_reviews from reviews where restaurant_id=1;

-- Number of rating of an restaurant 
select count(rating) from reviews where  restaurant_id=1;

-- Average rating of all restaurant 
SELECT restaurant_id, AVG(rating), count(rating) FROM reviews GROUP BY restaurant_id;

-- Join restaurant and reviews table 
SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id , count(*), TRUNC(AVG(rating),1) as average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id=reviews.restaurant_id;

-- Get a specific restaurant 
SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id , count(*), TRUNC(AVG(rating),1) as average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id=reviews.restaurant_id WHERE restaurants.id=2;