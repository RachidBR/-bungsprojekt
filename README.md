# Übungsprojekt - Historische und kulturelle Diplomatiereise

This is the code related to the training project 'Historische und kulturelle Diplomatiereise'.
You can find the project's overview, main functionalities, technology stack, and the project in the [Übungsprojekt Beschreibung pdf file](Übungsprojekt%20Beschreibung%20.pdf) in the root folder of this project

## Services

### PostgreSQL database

Currently there is a docker compose file you can execute in order to launch a PostgreSQL instance and instance with it.

#### Tables

The data base contains the following tables :

##### Landmarks

| Column             | Type                        | Collation | Nullable | Default                              |
| ------------------ | --------------------------- | --------- | -------- | ------------------------------------ |
| id                 | integer                     |           | not null | nextval('landmark_id_seq'::regclass) |
| name               | character varying(100)      |           | not null |                                      |
| country            | character varying(50)       |           | not null |                                      |
| location           | character varying(100)      |           |          |                                      |
| historical_context | text                        |           |          |                                      |
| year_built         | integer                     |           |          |                                      |
| architect          | character varying(100)      |           |          |                                      |
| image_url          | character varying(255)      |           |          |                                      |
| created_at         | timestamp without time zone |           |          | CURRENT_TIMESTAMP                    |
| updated_at         | timestamp without time zone |           |          | CURRENT_TIMESTAMP                    |

## Commands

### Start the database instance

#### Start the docker container

> Remember that you need to have docker and docker-compose installed in local your machine in order to start the service.

In order to start the postgreSQL instance, you first have to start the docker service in the docker compose file using :

```bash
docker-compose up -d
```

The -d flag runs the containers in the background.

If you want to restart specific services, you can do so by specifying their names after docker-compose up:

```bash
docker-compose up -d service_name1 service_name2
```

#### Start the database

To interact with your PostgreSQL database, you can use the psql command-line tool or another PostgreSQL client. Here are the steps to use psql:

```bash
docker exec -it postgres_db psql -U rachid -d historyDB
```

You can interact now with the database using simple SQL. Here is an example showing how to list all the entries in the 'landmarks' table :

```sql

SELECT * FROM landmarks;

```

## Project flow schema

You can find the project flow schema under the [project-flow.drawio file](./project-flow.drawio) or as as svg file under [project-flow.svg](./project-flow.svg), both on the root folder.

## Example of a PBI

### Zeitachse der diplomatischen Beziehungen feature using GraphQL API

#### 🛑 Prerequisite

- GraphQL API
- PostgreSQL service.
- React.js frontend

#### 👩 User Story

- As a person that can read, I want to access the /timeline page in the frontend app.
- As a person that can read, I want to see a timeline showing the chronological order of diplomatic events and relationships between the two countries.
- As a person that can read, I want to click on each item of the list and get more information on that event.

#### 📝 Further Information

- The timeline should include details about diplomatic engagements, treaties, agreements, and historical context.

#### ℹ️ Other helpful resources

- Historical records and blogs on the internet such as :

  - [Germany and Algeria: Bilateral relations](https://www.auswaertiges-amt.de/en/aussenpolitik/laenderinformationen/algerien-node/algeria/235168)
  - [Algeria–Germany relations](https://en.wikipedia.org/wiki/Algeria–Germany_relations)

#### 🚪 Entrypoints

- When visiting the time line page, a GraphQL API endpoint would get triggered and fetch the list of events from the PostgreSQL database service.

- When clicking on a event on the timeline, GraphQL API endpoint would get triggered and fetch detailed information about that specific event.

#### 🤔 Open Questions

- How could the user experience be enhanced ?
- What other features would the user like to see in the timeline page.

#### 🧪 Testing

- Write unit tests.
- Write integration tests.
