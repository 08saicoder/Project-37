class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    hide()
      this.input.hide();
      this.button.hide();
      this.title.hide();
    

    backgroundColor("Yellow");


    title.html("Result of the Quiz");
    title.position(130, 0);

    

    if (allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant(s) who answered correctly will be highlighted in green color!",130,230);
    }


    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green")
      else("Red");
    }
  }

}
