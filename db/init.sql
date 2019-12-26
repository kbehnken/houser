CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(120),
  hash text
);

CREATE TABLE properties
(
  property_id SERIAL PRIMARY KEY,
  image_url VARCHAR(120),
  name VARCHAR(36),
  loan INTEGER,
  monthly_mortgage INTEGER,
  recommended_rent INTEGER,
  desired_rent INTEGER,
  street_address VARCHAR(70),
  city VARCHAR(40),
  state VARCHAR(40),
  postal_code VARCHAR(10),
  user_id INTEGER,
  description TEXT
);

INSERT INTO properties
(image_url, name, loan, monthly_mortgage, recommended_rent, desired_rent, street_address, city, state, postal_code, user_id, description)
VALUES
('https://photos.zillowstatic.com/cc_ft_768/ISjntxxyyfmf4c1000000000.webp', 'Move-In-Ready', 500000, 2500, 2600, 3000, '742 Evergreen Terrace', 'Springfield', 'MO', '11111', 1, 'description description description description description description description'),
('https://photos.zillowstatic.com/cc_ft_768/ISjntxxyyfmf4c1000000000.webp', 'Fixer Upper', 50000, 400, 500, 800, '123 Some Place', 'Some City', 'CA', '22222', 2, 'description description description description description description description'),
('https://photos.zillowstatic.com/cc_ft_768/ISjntxxyyfmf4c1000000000.webp', 'Needs Work', 20000, 1200, 1300, 1700, '987 Another Place', 'Another City', 'NV', '33333', 3, 'description description description description description description description');

ALTER TABLE properties ADD COLUMN description TEXT properties(description);