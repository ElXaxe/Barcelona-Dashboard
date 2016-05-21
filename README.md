# Barcelona-Dashboard
Business Intelligence end-of-degree project based on data from the city of Barcelona.

**This is meant to be run with a postgreSQL database with the correct data tables.**

In folder *database* you can find the SQL scripts to create the tables and the CSV files to import the data.

###Barcelona data views you can find in this app:

- Population by districts, neighbourhoods, gender, year and age.
- Academic level by districts, neighbourhoods, gender, year.
- Number of libraries, visits and book loans, by district, year and library.
- Crossed data: 
    * Population vs libraries, by districts and years.
    * Population visits to libraries, by districts and years.
    * Population book loans, by districts and years
    * Library visits vs book loans, by districts, years and library.

###Technologies used in this app:

- HTML5
- CSS + [Sass] (http://sass-lang.com/)
- Javascript
- [Node.js] (https://nodejs.org/en/) + [Express] (http://expressjs.com/)
- [Massive.js] (https://github.com/robconery/massive-js) by [Rob Conery] (http://rob.conery.io/) 
- [Ember.JS] (http://emberjs.com/)
- [Crossfilter] (http://square.github.io/crossfilter/) by [Square] (http://squareup.com/)
- [D3.js] (https://d3js.org/) by [Mike Bostock] (http://bost.ocks.org/mike/)
- [Barcelona TopoJSON maps] (https://github.com/martgnz/bcn-geodata) by Martín González

To execute this web app, just run the next command at the root folder:

`> NODE_ENV=development node server`

Then, you can access the dashboard through your web explorer at url *http://localhost:3000/*.

**You can find a working demo [here] (https://barcelona-dashboard.herokuapp.com/)**
