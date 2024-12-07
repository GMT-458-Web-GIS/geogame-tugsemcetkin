[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ATV5e7Id)

# 🌍 Discover by Photo 🖼️
This game is a guessing game played interactively on the world map. This game first asks the user which theme they want to play the game in. For example, cultural places, food, touristic places, etc. The player selects the area they want to play and the game starts. The player tries to guess which city the photo belongs to from the given options.

## Game Mechanism 
- The user is asked which theme they want to play on.

- The user selects the theme and photos that fit that theme are shown to the player as a pop-up from countries.

- Since there are no city names on the map, the player must correctly mark the city related to the given photo in the question box that appears above the country.

- The user is given a certain amount of time. They try to collect the most points within this time.

- The player has the right to give 3 wrong answers. If they run out of lives, the game ends and their score is reset.

## Requirements
### Photos of cities:
The game should include photos of many cities with different themes.
### Marking the correct option:
The player should be able to mark the city he/she guessed correctly from the given options.
### Scoring System:
The user is given 10 points for marking correctly. He/she has 3 lives. The game ends when his/her lives run out.
### Time Limit:
The player must try to collect the highest score within 90 seconds.
### Game Interface:
Photo Area: The photo of the city to be guessed is shown on the map country.

Map Area: The user sees the country on the Leaflet map and tries to choose the correct city.

Score and Time Indicator: The user's current score and lap time are shown in this area

## JavaScript Library to Use 
Leaflet is an open-source JavaScript library designed to build interactive maps on the web. It's lightweight, easy to use, and highly extensible, making it a perfect choice for developers looking to create visually appealing and dynamic maps in web applications.

In this repository, Leaflet is employed to display interactive maps, providing users with an immersive and seamless experience.

 - Customizable Map Views: With Leaflet, it’s easy to customize the appearance of maps, such as setting the map’s center, zoom level, and tile layers. In the code, the map container’s CSS is styled with a border and shadow to enhance the map’s appearance within the layout.
 - Interactive Controls: Leaflet supports interactive elements like zooming, panning, and marker placement. These features can be customized with JavaScript to respond to user actions, offering a smooth user experience.
 - Animation and Effects: Leaflet supports smooth animations, like zoom transitions and custom markers, which add a layer of polish to the user experience.

This code also uses Leaflet's `L.popup()` feature.
   
   - `L.popup()` is a method provided by the Leaflet JavaScript library that allows you to create interactive, clickable popups on a map. These popups can display content such as text, images, or even custom HTML, offering a dynamic and engaging user experience



## Representation of The Game's Design
![start](https://github.com/user-attachments/assets/b1fe1ee1-3408-4335-bf4c-afc06ba03d0f)
![geogame](https://github.com/user-attachments/assets/e9318b69-adb0-416f-98ce-92ae8bb0f233)

## Event Handlers 
### Theme Selection Button Handler
The theme selection buttons are connected to this event handler. It lets the user choose the game's theme.The handler resets the selection by first removing the `selected` class from all buttons when a theme button is clicked. The user's choices is then indicated by adding the chosen class to the clicked button. The chosen topic is saved in the `selectedTheme` variable, which is subsequently used to load the game's matching questions.

### Start Button Handler 
The "Start" button is connected to this event handler. The chosen theme is loaded, the map is initialized, and the timer is started to begin the game.The event handler determines whether a theme has been chosen when the "Start" button is pressed. If not, the game won't start and a notice will appear. When a theme is chosen, the game container appears, the map is initialized, the timer is started, and the start screen is hidden. The questions for the chosen theme are then loaded, shuffled, and the first question is shown on the map.
### Option Button Click Handler
The question-answering choice buttons are connected to this event handler. After processing the user's response, it modifies the score, advances to the following question, and, if required, terminates the game.The event handler determines whether the clicked element has the class option-button when the user clicks on an option button. After retrieving the chosen option index, it contrasts it with the appropriate choice for the present query. The user is notified and the score is updated if the answer is right; if it is incorrect, the player's lives are deducted and they are alerted. Each response advances to the next question, or if every question is answered, the game is over.

## Closures
### Encapsulating Timer Logic
The `setInterval` function and `timerInterval` variable are kept within the closure, which means they cannot be accessed or modified by any other part of the code. This encapsulation prevents any external interference and ensures that the timer behaves as expected throughout the game.
### Tracking the Current Question Index 
The closure around the `currentQuestionIndex` allows it to persist across multiple invocations of the event listener without it being exposed to or modified by any other part of the code. Each time the user clicks an option, the `currentQuestionIndex` is updated and can be used to display the next question. This ensures proper game flow without accidentally modifying the index in an uncontrolled manner.
### Game Over and Score Logic 
The closure ensures that the score remains private to the game logic, making it harder to accidentally manipulate the score from outside the game functions. This also keeps the game state isolated and manageable, which is essential for maintaining a clean and predictable flow of the game.

## DOM (Document Object Model)
### Selecting and Manipulating Elements
To interact with specific elements on the page (like buttons, question containers, score displays, etc.), I used DOM methods like ``document.getElementById``,`` document.querySelector``, and ``document.querySelectorAll`` to select elements. 
### Updating Content Dynamically
During the game I  needed to update the UI dynamically based on the current state (e.g., displaying the current score, changing the question, or updating the timer). This is done by changing the inner content of DOM elements using properties like `textContent`, `innerHTML`, and `style`.
### Adding and Removing Classes
To manage the UI’s appearance (like highlighting selected options or showing the correct answer), I used ``classList.add``, ``classList.remove``, and ``classList.toggle`` to dynamically apply or remove CSS classes from DOM elements.
### Creating and Removing Elements
As the game progresses or changes state, sometimes new elements need to be created or existing ones removed. For example, DOM elements are added/removed when displaying questions, showing results, or when the game ends.
## Source 
https://chatgpt.com/share/67545110-9030-8000-b3ed-627a2fc7b934

https://chatgpt.com/share/67545634-e0d0-8000-97f1-73531d560db7 
## Game View
![Ekran görüntüsü 2024-12-07 174851](https://github.com/user-attachments/assets/34b47f71-848b-4c35-bdc4-ecb45bf31bf5)

![image](https://github.com/user-attachments/assets/37016fcf-b03d-46db-a3da-2194db178037)























