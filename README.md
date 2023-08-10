# Know-Your-Chemical-Compounds
This project is a Full Stack web application that allows users to view, edit, and manage chemical compounds. The application consists of a user-friendly web interface where users can browse chemical compounds, view their details, and perform CRUD (Create, Read, Update, Delete) operations. The purpose is to develop it and learn MEAN stack

### Use Case
You possess information about 30 chemical compounds, including their names, images, and descriptions. To streamline access to this data, you have developed a web app that enables users to easily view and manage compound details.

### Features
#### 1. Front End
1.1. Compound Card View: The web app presents chemical compounds as individual cards, each displaying the compound name and image.

1.2. Pagination: A pagination feature is implemented to ensure smooth navigation through the list of chemical compounds.

1.3. Compound Details: Clicking on a compound card navigates the user to a dedicated page displaying the compound's name, image, and description.

1.4. Attractive UI: The web app's user interface is designed with CSS to create an engaging and visually appealing experience.

#### 2. Back End
1.1 CRUD API: ExpressJS is used to create API endpoints that provide CRUD operations for accessing and editing compound information.

1.2 Database Management: Sequelize ORM is employed to interact with a MySQL database. The data, provided in CSV format, is imported into the database for efficient storage and retrieval.

### Technologies Used
1. Angular: A front-end framework used to build the user interface and interactions.
2. ExpressJS: A back-end framework used to create RESTful APIs for the web app.
3. Sequelize: An ORM (Object-Relational Mapping) library for database management.
4. MySQL: A relational database system used to store and manage chemical compound data.
5. CSV Import: Data from a CSV file is imported into the MySQL database.

### Setup and Installation
1. Clone the repository to your local machine.
   ``` git clone https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds.git ```
   
2. Navigate to the project directory using the terminal.
3. Run the following commands to set up and start the application, make sure you have a docker desktop in your system:
   ``` docker-compose up -d ```
   
Open a web browser and navigate to http://localhost:4200 to access the web app.
Import postman_collection.json in your postman to check the backend and db.

### Usage
 ~ Browse through the list of chemical compounds on the home page.

 ~ Click on a compound card to view its details.
 
 ~ Edit compound details using the provided editing functionality.
 
 ~ Perform CRUD operations using the provided API endpoints.

### Screenshots:
#### Frontend
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/800d758c-612a-4ffb-b6c1-0d4c8082eee8)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/6109975f-8d36-4d31-ae91-4b75a9642d3e)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/f3524c49-13e7-4e6e-9fda-571163c85e46)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/c84e01a7-2130-46d1-8070-3522abda34b3)

#### Backend-Postman
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/105cbddc-9416-44b4-9b56-5420b5454bb2)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/1d579d04-bb9a-4b4d-9b76-44fc29edbe0d)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/fc564d9c-bd88-4280-8b61-834986cfd8f3)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/1baf917a-419c-4fe3-9346-d694c1df4102)
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/185ada74-7b87-4fc5-90be-2adb34df2898)

#### Docker Container view
![image](https://github.com/CodenCode-Naman/Know-Your-Chemical-Compounds/assets/69742938/780d0c3c-399a-4699-83fc-0ca27830e379)



