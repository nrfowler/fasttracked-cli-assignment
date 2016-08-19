
const vorpal=require('vorpal')

const cli = vorpal()
cli.command('play <move>','description').action( function(args, callback) {
  if(args["move"]!='rock'&&args["move"]!='scissors'&&args["move"]!='paper'){
    this.log("Invalid move")
  }
  else{
    this.log("random computer move:")
    Math.round(Math.random() * 2);
    
  }

    callback();
  });

  module.exports = {
    cli
  }

cli.show()
