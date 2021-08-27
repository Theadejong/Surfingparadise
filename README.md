## SURFING-PARADISE

## Description
Meet John.

John got lost while surfing with his mates and needs to return home safely. The only way for John to get back home is to ride out the wave 
and avoid any sharks who would love to take a tasty bite out of John. Avoid the sharks and along the way collect as many Hawaiian Super Power Flowers 
as possible.                

    ~~Instructions
If John gets bitten by a shark: John has been eaten alive by the Sharks
Collect Hawaiian flowers to increase his powers
Use your keypad ↕ & ↔ to help John surfing and collect as many Hawaiian flowers as possible along the ride. 
John believes the Hawaiian flowers have super powers (superstition).

## MVP
* Player can move freely with the 4 arrow keys 
* The sharks & Hawaiian flowers are randomly placed
* The sharks & Hawaiian flowers are coming from the right and move to the left
* If the surfer Hawaiian flower, the score goes up by 1
* If the surfer collide with the shark, the surfer is eaten alive & you are game over

## Backlog
    
    ~~Finished
* Score + 1 for each flower
* Music in background & when colliding
* Additional obstacles
* Obstacles with different speed
* Speed increment
    ~~Wishlist
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



