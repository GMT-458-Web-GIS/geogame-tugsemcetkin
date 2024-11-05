[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)

# DISCOVER BY PHOTO
This game is a guessing game played interactively on the world map. This game shows the user a photo of a certain country and allows the user to mark the photo on the map by guessing which country it belongs to. The user earns points for correct guesses, and loses points for incorrect guesses. A certain amount of time is given for each round, and the game is played with a series of photos covering 20 different countries around the world.

## Game Mechanism
-The user is shown a photo of a randomly selected country on the screen.

-The user guesses which country the photo belongs to by marking it on the map.
The user earns points for correct guesses, and loses points for incorrect guesses.

-The user is given a limited time in each round. They are expected to guess before the time runs out.

-The game continues until all the photos are finished or a certain score is reached.

## Requirements
### 20 Countries and 20 Photos: 
The game must contain 20 photos of 20 different countries. A photo is shown in each round, allowing the player to make a guess.
### Marking on the Map: 
The player must be able to mark the country they guess on the map.The accuracy is evaluated by comparing the marking made on the map with the country the photo belongs to.
### Scoring System:
10 points are given to the user for correct markings.
The user loses 5 points for incorrect markings.
###Time Limit:
A certain time (e.g. 30 seconds) must be set for each round. The user must make the correct guess before the time runs out.
### Game Interface:
Photo Area: The photo of the country to be guessed is shown in this area.

Map Area: The user selects the country on the Cesium map and marks it.

Score and Time Indicator: The user's current score and the tour duration are shown in this area

## JavaScript Library to Use 
In this project, the Cesium JavaScript library will be used to display map operations and country locations to the user correctly. Cesium is a library that provides powerful 3D and 2D map support for geographic applications. For this project, the map will be created using the Esri World Imagery layer in Cesium's 3D mode.

## Sample Representation
![geogame](https://github.com/user-attachments/assets/1f4fc626-7614-4faa-adfb-4c1b97e63dde)






