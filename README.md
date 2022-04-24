# mountains-to-molehills
Mountains to Molehills is a React/Redux app on a Rails API backend that is currently a rudimentary productivity app. This project is to fulfill requirements for the Flatiron School.

The user creates projects, and within them sets goals and defines tasks to reach those goals.

## To install
To install, first run the rails server from the backend directory after running ```$ bundle install```
There are sample projects in seed data which can be added with ```$ rake db:seed```

Next, ```$ npm start``` from the front-end directory.

## Utility
There is much room for growth:
Adding full CRUD for each model.
Building out the Log model to create a journal for the user to keep track of progress.
Making lists of goals and tasks draggable to re-order.
Setting deadlines for tasks and projects.