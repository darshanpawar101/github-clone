# GitHub-Clone

Github-Clone is an Express.js/Node.js Project which gives some APIs from the github for searching a user and getting information about that user repositories.

#### Note: Git is require to clone the repo from github

#### Note: This Project uses Node Version v18.12.1

#### Note: Before Running The Project First Install the Node Version v18.12.1 - (https://nodejs.org/uk/blog/release/v18.12.1/)

## How to run the Project

#### Step 1 - Clone this project in your workspace using below command
- ##### git clone https://github.com/darshanpawar101/github-clone.git
<hr>

#### Step 2 - Download the Node Modules and Node Packages by runing below command in terminal at root location of the project
- ##### npm install
<hr>

#### Step 3 - Build and run the Project locally using below command in terminal at root location of the project
- ##### node server.js
<hr>

#### Step 4 - Visit the link in any browser which is showing in the console - 
- ##### https://localhost:3000/
<hr>

#### Step 5 - Consume the Users API using below link - 
- ##### https://localhost:3000/users
<hr>

#### Step 6 - Consume the Users API with specific username to find that user - 
- ##### https://localhost:3000/users/{github_username}
- ##### Eg - https://localhost:3000/users/johnpapa
<hr>

#### Step 7 - Consume the Users API with specific username to find that user repositories - 
- ##### https://localhost:3000/users/{github_username}/repos
- ##### Eg - https://localhost:3000/users/johnpapa/repos
<hr>

#### Step 7 - Consume the Users API with specific username to find that user repositories with page numbers - 
- ##### https://localhost:3000/users/{github_username}/repos?page=2
- ##### Eg - https://localhost:3000/users/johnpapa/repos?page=2

## How to test the Project

#### Step 1 - Clone this project in your workspace using below command
- ##### git clone https://github.com/darshanpawar101/github-clone.git
<hr>

#### Step 2 - Download the Node Modules and Node Packages by runing below command in terminal at root location of the project
- ##### npm install
<hr>

#### Step 3 - Build and run the Project locally using below command in terminal at root location of the project
- ##### npm test
<hr>
