# Overview
The application is front-end app (SPA) developed with Angular.

The application is about browsing architectural and interior design projects and (if authenticated) creating and posting such. Authors can add and delete projects. Users (registered and non-registered) can browse and see details.

# Public Part
This part of the application is designed for non-registered users. These users have access to the following:

- Guests Home Page -> Lastest projects submitted.
- Projects -> View all projects.
- Project Details -> View specific project's details page.
- Register -> with unique username, email and password.
- Login -> with email and password.

# Private Part
- Users Home Page -> Lastest projects submitted. If current user is the author, they can also see a delete button.
- My Projects -> The page is containing all of the current user's projects.
- Add New Project -> Registered users can add new projects.
- Sign Out

- User initialized on server:
admin@gmail.com : admin

# Technical details
The client application is build with:

- Angular CLI: 16.1.4
- TypeScript
- HTML + CSS

To run the project:

package.json --> npm install --> ng serve --> navigate to http://localhost:4200/

The server used in the project is Softuni Rest-api. It was modified to serve to this project.
To run the server:
npm install --> npm start --> Server is listening on port 3000.
