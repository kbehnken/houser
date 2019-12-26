DELETE FROM properties
WHERE property_id = $1;

SELECT * FROM properties
WHERE user_id = $1;