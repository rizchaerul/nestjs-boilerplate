DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE account
(
    account_id UUID NOT NULL
        CONSTRAINT account_pkey PRIMARY KEY,

    full_name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE cat
(
    cat_id INT NOT NULL GENERATED ALWAYS AS IDENTITY
        CONSTRAINT cat_pkey PRIMARY KEY,

    account_id UUID NOT NULL
        CONSTRAINT cat__account_fkey REFERENCES account,

    name TEXT NOT NULL
);

INSERT INTO account
VALUES
('b02259ae-8eaf-411d-bf00-e8ba3374421b', 'Orang Satu', 'orang', 'orang@email.com', 'aiueo');

INSERT INTO cat(account_id, name)
VALUES
('b02259ae-8eaf-411d-bf00-e8ba3374421b', 'meong1'),
('b02259ae-8eaf-411d-bf00-e8ba3374421b', 'meong2');
