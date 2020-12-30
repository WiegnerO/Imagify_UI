# Imagify
- This project is the front end application for the Imagify app.
- This application is written using Angular10 framework and the Bootstrap library

# How to setup the frontend application
1. Clone or donwload the repistory make sure your machine has node
2. Open the app in a IDE and in the console type <b>yarn start</b> or <b>npm start</b>

## How to use the application
In the top navbar there are three pages to navigate to:
1. Image Repository
2. Add image
3. Search Characteristic
Each of these pages have different functions

### Image Repository page http://localhost:4200/homePage
This page allows users to:
1.  view all the images in the repository
2.  select a specific image by clicking on the "see similar images" button underneath an image and see which other images have characteristics in common with it

### Add image page http://localhost:5000/api/images
This page is a form letting allows users to post a new image and imputing information about the image such as:
1. Image name
2. Image Price
3. Image Poster
4. Image Characteristics

### Search Characteristic  http://localhost:4200/characteristicPage
This page allows users to view images of a specific characteristic through one of two ways:
1.	The page displays all the different types of characteristics and users can select one of them and see which images have that specific characteristic
2.	Users can search a characteristic and see the images have that specific characteristic
