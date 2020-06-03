SELECT * FROM USERS;

SELECT * FROM USERS WHERE id = 1;
SELECT * FROM USERS WHERE first_name = 'Abdullah';

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  role VARCHAR NOT NULL,
  notes TEXT
);

INSERT INTO users (first_name, last_name, role) VALUES
  ('Abdullah', 'Abdularaihm', 'admin');

INSERT INTO users (first_name, last_name, role) VALUES
  ('Xiaomin', 'Zhu', 'admin'),
  ('Michaela', 'Heyer', 'admin');

ALTER TABLE users ADD COLUMN slug VARCHAR DEFAULT '' NOT NULL;

UPDATE users SET slug = 'abdullah-abdularaihm' WHERE first_name = 'Abdullah';
UPDATE users SET slug = 'xiaomin-zhu' WHERE id = 2;
UPDATE users SET slug = 'michaela-heyer' WHERE id = 3;
