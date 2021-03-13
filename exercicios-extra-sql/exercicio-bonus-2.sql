-- **E.B.2** Faça um script que limpe e crie dados nas tabelas.
DELETE FROM navers;
DELETE FROM projects;

INSERT INTO 
    navers (id,name, job_role, birthdate, admission_date, created_at) 
VALUES 
    (2, 'Michel', 'dev',  '1997-12-17',  '2015-12-17',  '2019-12-17'),
    (3, 'joana', 'designer',  '2000-12-17',  '2017-12-17',  '2019-12-17'),
    (4, 'joara', 'secretaria',  '2000-12-17',  '2018-12-17',  '2019-12-17');

INSERT INTO 
    projects (id,name, created_at, updated_at) 
VALUES 
    (2, 'Projeto bom',  '2015-12-17',  '2019-12-17'),
    (3, 'Projeto',   '2017-12-17',  '2019-12-17'),
    (4, 'Proj', '2018-12-17',  '2019-12-17');

INSERT INTO 
    projects_navers (id, project_id, naver_id, added_at) 
    VALUES (1, 2, 3,'2018-12-17' );

INSERT INTO 
    projects_navers (id, project_id, naver_id, added_at) 
    VALUES (2, 2, 2,'2018-12-17' );

