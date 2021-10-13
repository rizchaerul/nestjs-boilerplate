DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE account
(
    account_id UUID NOT NULL
        CONSTRAINT account_pkey PRIMARY KEY,

    full_name TEXT NOT NULL,
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
('0e493239-7e56-4feb-bbc9-d185edf3ff43', 'Marta Shields', 'martashields@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('1fb4fc90-a090-4769-9444-fb8aa750f0f1', 'Ethan Hahn', 'ethanhahn@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('d7cc6aff-8db6-45e6-9555-5716225aead8', 'Ubaldo Medhurst', 'ubaldomedhurst@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('c7b1bd6d-5b4f-4d4d-ab22-67c9627afdcf', 'Imelda Pfannerstill', 'imeldapfannerstill@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('5d4b23b4-d20a-444f-866e-9e26d133dc06', 'Nicola Pfannerstill', 'nicolapfannerstill@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('3b8ec06a-e192-40fb-8215-f0f7cab4c1ed', 'Ned Keebler', 'nedkeebler@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('b1d67468-6e1a-448d-b2bd-bb76367c3d63', 'Everette Little', 'everettelittle@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki'),
('3b2c4515-b60c-4baa-9058-af3be90fca68', 'Jacques Torp', 'jacquestorp@mail.com', '$2a$12$P9KJBHx.JyKC0x2Y2T.6duDtbzaDut7UvyI/RTRkSXGdu3NcC6aki');

INSERT INTO cat(account_id, name)
VALUES
('5d4b23b4-d20a-444f-866e-9e26d133dc06', 'Joanie'),
('5d4b23b4-d20a-444f-866e-9e26d133dc06', 'Marvin'),
('b1d67468-6e1a-448d-b2bd-bb76367c3d63', 'Nikki'),
('b1d67468-6e1a-448d-b2bd-bb76367c3d63', 'Adolph'),
('0e493239-7e56-4feb-bbc9-d185edf3ff43', 'Marcelina'),
('d7cc6aff-8db6-45e6-9555-5716225aead8', 'Robb'),
('3b8ec06a-e192-40fb-8215-f0f7cab4c1ed', 'Harmon'),
('3b8ec06a-e192-40fb-8215-f0f7cab4c1ed', 'Roberta'),
('0e493239-7e56-4feb-bbc9-d185edf3ff43', 'Torey'),
('5d4b23b4-d20a-444f-866e-9e26d133dc06', 'Darian'),
('0e493239-7e56-4feb-bbc9-d185edf3ff43', 'Hosea'),
('d7cc6aff-8db6-45e6-9555-5716225aead8', 'Tierra'),
('c7b1bd6d-5b4f-4d4d-ab22-67c9627afdcf', 'Rosalind'),
('c7b1bd6d-5b4f-4d4d-ab22-67c9627afdcf', 'Era'),
('3b2c4515-b60c-4baa-9058-af3be90fca68', 'Colin'),
('b1d67468-6e1a-448d-b2bd-bb76367c3d63', 'Giovanni'),
('d7cc6aff-8db6-45e6-9555-5716225aead8', 'Heath'),
('0e493239-7e56-4feb-bbc9-d185edf3ff43', 'Lucienne'),
('b1d67468-6e1a-448d-b2bd-bb76367c3d63', 'Olen'),
('5d4b23b4-d20a-444f-866e-9e26d133dc06', 'Rosario');
