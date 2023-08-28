/* users */
INSERT INTO users (iduser, mail, password) VALUES
(1, 'admin@inscribeme.com', '$2a$12$8LegtLQWe717tIPvZeivjuqKnaAs5.bm0Q05.5GrAmcKzXw2NjoUO');

/* permissions */
INSERT INTO permissions (id_user_type, type) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

/* user_profile */
INSERT INTO user_profile (idprofile, lastname, name) VALUES
(1, 'Admin', 'Admin');

INSERT INTO permission_user (user_id, user_type_id) VALUES
(1, 1);