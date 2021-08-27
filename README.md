## SURFING-PARADISE

## Description
You are a surfer who is practising for the most important surf competition of it’s life. I order to practice, you went to far away from the shore and got surprised by a group of sharks. Now you  need to return to the shore as soon as possible before eaten alive by the sharks. Besides your skills, the only other way to survive is to collect as many Hawaiian flowers as possible along the ride. You believe the Hawaiian flowers have super powers (superstition). 

Use your keypad ↕ to collect the Hawaiian flowers or avoid the sharks! 

The GameScreen moves to the right and the surfer needs to avoid being eaten alive by the Sharks and collect Hawaiian flowers. The Hawaiian flowers & Sharks come from the right side of the screen, moving to the left.

If the surfer gets in contact with the shark, his/her life will be decreased by 1. The surfer has 3 lives in total. 

## MVP
* Player can move freely with the 4 arrow keys 
* The sharks & Hawaiian flowers are randomly placed
* The sharks & Hawaiian flowers are coming from the right and move to the left
* If the surfer Hawaiian flower, the score goes up by 1
* If the surfer collide with the shark, the surfer is eaten alive & you are game over

## Backlog
    * Accomplished
* Score + 1 for each flower
* Music in background & when colliding
* Additional obstacles
* Speed increment
    * Wishlist
* Highscore
* Scrolling background
* Winning feature 
* Different sizes of the sharks
* 3 lifes
* Obstacles not on top of each other

## Data structure
screen.js
* build LandingScreen
* build gameScreen
* build gameOverScreen

## gameFeature.js
* startGame 
* loop
* addCharacter 
* add shark(s)
* add Hawaiian flowers
* manageCollisions 
* gameOver 

## Surfer.js
* Surfer
* draw 
* move 
* screenCollision 

## Sharks.js
* Sharks
* draw 
* move 

## HawaiianFlower.js
* Hawaiian flower
* draw 
* move


## States y States Transitions
* mainScreen
* gameScreen
* gameOverScreen

## Task
* screen - buildDom
* screen - buildMainScreen
* screen - buildGameScreen
* screen - buildGameOverScreen
* gameFeature - loop
* character - draw
* character - move
* character - screenCollision
* gameFeature - addCharacter
* Sharks - draw
* Sharks - move
* gameFeature - addSharks
* Hawaiian flower - draw
* Hawaiian flower - move
* gameFeature - addHawaiian flower
* gameFeature - collision
* gameFeauture - Increase speed
* GameFeature - Speed up each level 
* gameFeature - gameOver
* gameFeature - newLevel
* gameButton - start
* gameButton - restart
* Score - draw

## Additional Links
Planning https://trello.com/invite/b/gim0hrUw/550f5672e6b060b81342c30a664c2b4f/surfing-paradise
Link to the game https://github.com/Theadejong/Surfingparadise



