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

## Next steps

- Build backend API microservice using Nest.js
  - GET lanmarks endpoint
- Put the backend API server in docker compose.
- Work on the 'Zeitachse der diplomatischen Beziehungen' feature endpoints using GraphQL and put it in separate backend microservice.
- Use Kubernetes on AWS to orchestrate the containers.
- > ? Not sure yet :
  - gRPC-Kommunikation:
    Integration von gRPC für eine nahtlose Kommunikation zwischen Mikroservices,
    insbesondere für Sprachentwicklungsmodule und virtuelle Touren.
    Definierung von service interfaces und Nachrichten unter Verwendung von Protocol
    Buffers.
- Message Broker - RabbitMQ
  Integration von RabbitMQ als Message Broker für asynchrone Kommunikation zwischen Mikroservices.:
  - Find a use case for this one.
- WebSockets für Real-time Updates:
  Implementierung von WebSockets für Real-time Updates für Benutzerinteraktionen, Chatfunktionen und live contributions :
  - Build a real time chat system or something.
- Monitoring and Logging :
  - Use AWS CloudWatch to monitor stuff.

## Currently working on

- Build backend API microservice using Nest.js
  - GET lanmarks endpoint
