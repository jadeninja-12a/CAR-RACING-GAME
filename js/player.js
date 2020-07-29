 class Player{
    constructor(){
        this.index = null
        this.name = null; 
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }
    getCarsFinished(){
        database.ref("finishedCars").on("value", function(data){
            carsFinished = data.val();
        });
        console.log(carsFinished);
    }
    updateCarsFinished(car){
        database.ref("/").update({
           finishedCars: car
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance:this.distance,
            rank:this.rank
        });
    }

    static getPlayersInfo(){
        database.ref("players").on("value", function(data){
            allPlayers = data.val();
        });
    }
}