class Form{
    constructor(){
        this.input = createInput("UserName");
        this.button = createButton("Join");
        this.greeting = createElement("h3");
        this.greeting2 = createElement("h3");
        this.title = createElement("h1");
        this.button2 = createButton("RESET")
    }

    display(){
       
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2 + 250, displayHeight/2 - 400);
      
        this.input.position(displayWidth/2 + 300, 350);
      
        this.button.position(displayWidth/2 + 350, 500);
       this.button2.position(displayWidth/2, displayHeight - 50);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount ++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hey " + player.name + ". You have just entered the " );
            this.greeting2.html("WORLD RACING CHAMPIONSHIP");
            this.greeting.position(displayWidth/2 + 250, 350);
            this.greeting2.position(displayWidth/2 + 250, 380);
        });
        // this.button2.mousePressed(() => {
        //     game.updateState(0);   
        //   player.updateCount(0);  
        //   gameState = 0;
        //   playerCount = 0;
        //   for(var plr in allPlayers){
    
          
        //   allPlayers[plr].name = null;
        //   allPlayers[plr].index = null;
        //   allPlayers[plr].rank = null;
        //   allPlayers[plr].update();
        //   }
        //   var removed = database.ref("players");
        //   removed.remove();
        //   game.start();
        // });
        
    }
    hide(){
        this.title.hide();
        this.greeting2.hide();
        this.greeting.hide();
    }
}