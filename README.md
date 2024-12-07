[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)

# 🌍 Discover by Photo 🎉
This game is a guessing game played interactively on the world map. This game first asks the user which theme they want to play the game in. For example, cultural places, food, touristic places, etc. The player selects the area they want to play and the game starts. The player tries to guess which city the photo belongs to from the given options.

## Game Mechanism -
- The user is asked which theme they want to play on.

- The user selects the theme and photos that fit that theme are shown to the player as a pop-up from countries.

- Since there are no country names on the map, the player tries to guess which city in the country the given photo belongs to.

- The user is given a certain amount of time. They try to collect the most points within this time.

- The player has the right to give 3 wrong answers. If they run out of lives, the game ends and their score is reset.

## Requirements
### Photos of cities:
The game should include photos of many cities with different themes.
### Marking the correct option:
The player should be able to mark the city he guessed correctly from the given options.
### Scoring System:
The user is given 10 points for marking correctly. He has 3 lives. The game ends when his lives run out.
### Time Limit:
The player must try to collect the highest score within 90 seconds.
### Game Interface:
Photo Area: The photo of the city to be guessed is shown on the map country.

Map Area: The user sees the country on the Leaflet map and tries to choose the correct city.

Score and Time Indicator: The user's current score and lap time are shown in this area

## JavaScript Library to Use 
In this project, Leaflet.js library will be used because it provides ease of use in terms of using interactive maps. Supporting various map providers (OpenStreetMap, Google Maps, Bing Maps etc.) makes Leaflet.js more effective. The aim of this project is to find which city a given image of a city belongs to. For this, a test will be presented to the user, but this test will appear as a pop-up from the country where that city is located. In this way, the user's probability of guessing the correct city will increase. 
The L.popup() function from Leaflet.js will be used to display questions.

## Sample Representation
![start](https://github.com/user-attachments/assets/b1fe1ee1-3408-4335-bf4c-afc06ba03d0f)
![geogame](https://github.com/user-attachments/assets/e9318b69-adb0-416f-98ce-92ae8bb0f233)














