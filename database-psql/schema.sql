DROP DATABASE IF EXISTS nykeproducts;
CREATE DATABASE nykeproducts;



CREATE TABLE products (
  nikeID INT UNIQUE,
  names TEXT,
  gender TEXT,
  types TEXT,
  discountprice INT,
  prices INT,
  colorstyles TEXT[],
  productpictures TEXT[],
  weights DECIMAL,
  lasts TEXT,
  offsetmeasurement TEXT,
  styles TEXT[],
  collections TEXT[],
  sizes jsonb
);

 
-- CREATE TABLE productdetails (
--   nikeID INT REFERENCES products(nikeID),
--   weights INT,
--   lasts TEXT,
--   offsetmeasurement TEXT,
--   styles TEXT
-- );
-- CREATE TABLE availsizes (
--   nikeID INT REFERENCES products(nikeID),
--   sizes INT,
--   inStock BOOLEAN
-- );

 
