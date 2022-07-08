# ToDoApplication
This project contains CRUP Operations for ToDo Application

## Prerequisites
Node installed on your computer
MongoDB installed on your computer
VS Code, to run our code
Postman Application or Postman Extension for chrome, to test our APIs 

## Installation
#### Repository
Clone repository source code by executing following instruction to any folder on your machine
```
https://github.com/aaratichandane/ToDoApplication.git
cd ToDoApplication

```

## Database Connection

    * I am using MongoDBCloud for MongoDB
    * Change **MongoDB URL** to your <MongoDB URL> from /config/config.js 

## DB Schema

    * Create database as **todo** in MongoDB Database
    * Create collection **todos** and **users**
        
        * User Collection:
            first_name,
            last_name,
            email,
            password,
            token
        
        * Todo Collection:
            task,
            completed

    

## How to run:
    * Run command **npm i**
    * npm start

## Impost Postman

    * Open your Postman Application or extension
    * Click on import option given on the navigation bar on Postman
    * Import TODO_Assessment.postman_collection attached in the repo

## CRUD Operation

    * After importing collection, open **Register User** and hit the send button.
    * Now you are succefully registered with the application
    * Use **Login User** endpoint to get your latest "token" (Expiration is for 2h)
        * Sample token: "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjODYzYWRmNzQ4YTQxMGM0ODI0Y2IwIiwiZW1haWwiOiJhcnRpY2hhbmRhbmVAeWFob28uY29tIiwiaWF0IjoxNjU3Mjk5ODg1LCJleHAiOjE2NTczMDcwODV9.BB3YnP8lJfRCQBpubrnjKdliicMGrXtoB9K80_gy9pQ"
    * Pass this token as **x-access-token** in the Header of your each Todo request in the postman
    
    Now you can user all the endpoints with the **TOKEN**.




