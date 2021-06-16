# 🏡 HomeBase

_LHL Final Project | June 2021_

The home building process can be stressful. It involves a lot of documents, decisions and communications between the home builder and client. It's easy to lose sight of important information if it's not organized well.
<br/><br/>
HomeBase is a platform where builders and clients can connect, collaborate and track every step of the home building process, from initial planning to possession day.

## Target audiences

- Home builders
- Clients / future homeowners

## Setup

HomeBase uses ruby version `2.7.3`, rails version `6.0.3.7`, and react version `17.0.2`. Please ensure you have a compatible version of ruby before continuing.

1. Run `bundle` to install necessary rails components
2. Run `rails db:setup` to create the database
3. Run `rails db:seed` to seed data into the database
4. CD into 'client' and run `npm start` to install react and its dependencies.
5. Run the server while in the project root directory using `rails s` to run the database server (defaults to `localhost:3001`)
6. In a different terminal tab run `npm start` to run the web app (defaults to `localhost:3000`)

## Screenshots

![Splash Screen]()
![]()

## Features To Be Added

- AWS S3 storage for files
- Electronic document signing
- Ticketing system to track deficiencies
- In-app messaging

## Tech stack

- **Front-end:** ReactJS v17.0.2
- **Back-end:** Ruby v2.7.3, Rails v6.0.3.7
- **Database:** PostgreSQL

## Team members

- [Alvin Lin](https://github.com/Chase78712002)
- [David Martinez](https://github.com/Dmartinez-van)
- [Lily Habberfield](https://github.com/lilyhabbs)
