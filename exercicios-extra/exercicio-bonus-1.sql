
--- **E.B.1** Crie um script que delete e crie todas as tabelas.

drop table if exists navers CASCADE;
drop table if exists projects CASCADE;
drop table if exists projects_navers CASCADE;


CREATE TABLE navers
(
    id integer NOT NULL ,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    job_role character varying(255) COLLATE pg_catalog."default",
    birthdate timestamp with time zone,
    admission_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone,
    CONSTRAINT navers_pkey PRIMARY KEY (id)
);

CREATE TABLE projects
(
    id integer NOT NULL  ,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone,
    CONSTRAINT projects_pkey PRIMARY KEY (id)
);

CREATE TABLE projects_navers
(
    id integer NOT NULL ,
    project_id integer ,
    naver_id integer ,
    added_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT projects_navers_pkey PRIMARY KEY (id),
    CONSTRAINT projects_navers_naver_id_foreign FOREIGN KEY (naver_id)
        REFERENCES navers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT projects_navers_project_id_foreign FOREIGN KEY (project_id)
        REFERENCES projects (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);