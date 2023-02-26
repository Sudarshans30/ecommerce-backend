# ecommerce-backend
The goal of this project is to manage a database of products and tags through api calls.

# Table of Contents
Installation
Usage
License


# Installation 
To install this application, clone this repo from the link:
git@work.github.com:coding-boot-camp/module-13-challenge-orm.git

Once downloaded, install its dependencies by navigating to the app's directory by typing:

npm install
This command will install the following packages: sequelize, express, dotenv, and MYSQL.

A database schema and a seed file are included in the repo. To load the schema, use mysql in the command line and type:

mysql> source db/schema.sql
mysql> exit
To seed the database, type:

node seeds/index.js
You will need to add a .env file specifying your MYSQL username and password.


# usage
to initiate the app go to the terminal and type "node server.js"

# licence
MIT License

Copyright (c) 2023 Sudarshans30

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
