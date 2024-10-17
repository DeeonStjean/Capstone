# Capstone

# About
my website is a mini four page mern stack application using a weather api

- the home page: call the weather api to show you the temperature of the city you're in base off your location if your location is on, also show upcoming forecast for every 3 hours, and let you see forecast of the next 4 days.
- search page: similar to the home page but when you type a city in the search bar it will change the current info to the info you just search. for example the page is set to a city in india with no upcoming forecast but the moment type "london" in the search bar and hit search, you will get the temperture for london with the upcoming forecast.

every time you search a city it sent data to backend server
- air pollution page: default to london, show the air quality index(AQI), show when the sunrise and sunset in the london,show humidity and more, you can change the city with search bar 

- signup page: this page show where you can sign up or login, and you can't submit until the requirement are meet.

# frontend
- React
- css
# backend
- node js
- express
- mongoBD/mongoose

# Requirements
(20%) Project Structure, Standardization, and Convention

- Project is organized into appropriate files and directories, following best practices (2%) 
- Project contains an appropriate level of comments. (2%) 
- Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project. (5%) 
- Standard naming conventions are used throughout the project. (2%) 
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). (4%) 
- Level of effort displayed in creativity, presentation, and user experience. (5%) 

(12%) Core JavaScript

- Demonstrate proper usage of ES6 syntax and tools. (2%)
- Use functions and classes to adhere to the DRY principle. (2%)
- Use Promises and async/await, where appropriate. (2%)
- Use Axios or fetch to retrieve data from an API. (2%)
- Use sound programming logic throughout the application. (2%)
- Use appropriate exception handling. (try/catch) (2%)

(9%) Database

- Use MongoDB to create a database for your application. (5%)
- Apply appropriate indexes to your database collections. (2%)
- Create reasonable schemas for your data by following data modeling best practices. (2%) 

(19%) Server

- Create a RESTful API using Node and Express. (7%)
For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.
- Include API routes for all four CRUD operations. (5%)
- Utilize the native MongoDB driver or Mongoose to interface with your database. (5%)
- Include at least one form of user authentication/authorization within the application. (2%)

(35%) Front-End Development

- Use React to create the application’s front-end. (10%)
- Use CSS to style the application. (5%)
- Create at least four different views or pages for the application. (5%)
- Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering. (5%)
- Use React Hooks or Redux for application state management. (5%)
- Interface directly with the server and API that you created. (5%)

(5%) Presentation

- Create a short overview of your application. (1%)
- Highlight the use cases of your application. (1%)
- Highlight the technical functionality of the application, from a high-level perspective (1%)
- Discuss what you have learned through the development of the application (1%)
- Discuss additional features that could be added to the application in the future (1%)
