class Game {
    constructor(){
        
    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    
    async start(){
        if(gameState == 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            trackPosition = windowHeight - (windowHeight * 10);   
            form = new Form();
            form.display();
        } 
        car1 = createSprite(100, 300, 40, 40);
        car1.addImage("car1", car1IMG);
        car2 = createSprite(300, 300, 40, 40);
        car2.addImage("car2", car2IMG);
        car3 = createSprite(500, 300, 40, 40);
        car3.addImage("car3", car3IMG);
        car4 = createSprite(700, 300, 40, 40);
        car4.addImage("car4", car4IMG);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        player.getCarsFinished();
        Player.getPlayersInfo();
        
        imageMode(CENTER);
        image(track, windowWidth/2, trackPosition, windowWidth, windowHeight * 20 + 2000);
        if(allPlayers != undefined){
            var index = 0;
            var x = 250;
            var y = 0;
            for(var plr in allPlayers){
                x+=288;
                index+=1;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                textSize(22);
                fill("red");
                text(allPlayers[plr].name, x, y-60 );
                
                if (index == player.index){
                    camera.position.x = windowWidth/2;
                    camera.position.y = cars[index-1].y;
                    
                }
            }

        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance+= 50;
            trackPosition += 1;
            player.update();
        }
        drawSprites();
        if(player.distance >= 19450){
            gameState = 2;
            carsFinished++;
            player.updateCarsFinished(car);
            console.log(carsFinished);
        }
    }
    end(){
        background(255, 255,255);
        
        var title = createElement("h1");
        title.html("CAR RACING GAME");
        title.position(displayWidth/2 + 250, displayHeight/2 - 400);
        var title2 = createElement("h2");
        title2.html("LeaderBoard");
        title2.position(displayWidth/2 + 300, displayHeight/2 - 250);
        player.rank = carsFinished;
        player.update();
        var rank = createElement("h3");
        rank.html(player.rank + ". " + player.name);
        rank.position(displayWidth/2 + 350, displayHeight/2 - 100);
        var greeting = createElement("h3");
        if(player.rank == 1){
            greeting.html("CONGRATULATIONS, You have reached the end first");
        } else {
            greeting.html("CONGRATULATIONS, You have reached the end(but your not first LOSER)");
        }
        greeting.position(displayWidth/2 + 150, displayHeight/2 );
    }
}