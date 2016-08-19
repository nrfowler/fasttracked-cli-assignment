//vorpal code, but not showing vorpal consider
//add to vorpal cmd: play() with <move> (rock, paper, siccsors) log invalid move, don't throw error if not one of them.
//if one of them, randomly play coputer move.
const vorpal=require('vorpal')

const cli = vorpal()
cli.command('play <move>','description').action( function(args, callback) {
  if(args[move]!='rock'&&args[move]!='scissors'&&args[move]!='paper'){
    this.log("Invalid move")
  }
  else{
    this.log("random computer move")
  }
    this.log('bar');
    callback();
  });

  module.exports = {
    cli
  }
return cli
