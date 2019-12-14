INSERT INTO properties
(image_url, name, loan, monthly_mortgage, recommended_rent, desired_rent, street_address, city, state, postal_code, user_id, description)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);

SELECT * FROM properties
WHERE user_id = $11;