# Cat Inventory 
A CRUD operated inventory that displays a current list of cats borrowed from the [Cat API data](https://thecatapi.com/). 




## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)


---

## Introduction

What we have is a Cat Inventory site that is creating a multitude of cats from the data we fetched from the Cat API. We are able to give each cat to be categorized into it's own card. Each card details itself with more information as you are able to not only edit it but add a new source yourself.



---

## Demo

![Add your Demo](readme_assets/screen.gif) 

---

## Technologies

### Front-End
React, React-Router, Javascript, HTML/CSS

### Back-End
Node.JS, Express, mySQL, Sequelize

---

## Setup

To run this project, install it locally using npm:

```
$ cd ../project_name
$ npm install
```
Then you're going to want to go to go inside the frontend and repeat the proccess as step 1:

```
$ cd frontend
$ npm install
$ cd ..
```
Finally, you can run the whole program

```
$ npm start
```

---

## Features

- Create a Cat Object
- Update a Cat Object
- Delete a Cat Object

---

# Inventory Api

```
POST = update item to database
```

```
GET - retrives all cats
GET (by Id) - retrieves any cat by id
```

```
DELETE - destroys a Cat Object
```

