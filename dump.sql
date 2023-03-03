--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: public.sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.sessions" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2023-03-03 14:03:11.017242'::timestamp without time zone NOT NULL
);


--
-- Name: public.sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.sessions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.sessions_id_seq" OWNED BY public."public.sessions".id;


--
-- Name: public.urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.urls" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url character varying(255) NOT NULL,
    "urlShort" text NOT NULL,
    "timesAccessed" integer,
    "createdAt" timestamp without time zone DEFAULT '2023-03-03 14:03:11.002068'::timestamp without time zone NOT NULL
);


--
-- Name: public.urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.urls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.urls_id_seq" OWNED BY public."public.urls".id;


--
-- Name: public.users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2023-03-03 14:03:10.901372'::timestamp without time zone NOT NULL
);


--
-- Name: public.users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.users_id_seq" OWNED BY public."public.users".id;


--
-- Name: public.sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions" ALTER COLUMN id SET DEFAULT nextval('public."public.sessions_id_seq"'::regclass);


--
-- Name: public.urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.urls" ALTER COLUMN id SET DEFAULT nextval('public."public.urls_id_seq"'::regclass);


--
-- Name: public.users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users" ALTER COLUMN id SET DEFAULT nextval('public."public.users_id_seq"'::regclass);


--
-- Data for Name: public.sessions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.urls; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.users; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: public.sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.sessions_id_seq"', 1, false);


--
-- Name: public.urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.urls_id_seq"', 1, false);


--
-- Name: public.users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.users_id_seq"', 1, false);


--
-- Name: public.sessions public.sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions"
    ADD CONSTRAINT "public.sessions_token_key" UNIQUE (token);


--
-- Name: public.urls public.urls_urlShort_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.urls"
    ADD CONSTRAINT "public.urls_urlShort_key" UNIQUE ("urlShort");


--
-- Name: public.users public.users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT "public.users_email_key" UNIQUE (email);


--
-- Name: public.sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions"
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: public.urls urls_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.urls"
    ADD CONSTRAINT urls_pk PRIMARY KEY (id);


--
-- Name: public.users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

