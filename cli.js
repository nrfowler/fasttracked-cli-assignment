const vorpal=require('vorpal')
cli=vorpal()
const { Config } = require('./Config')
const beats=new Config('./config.json').rules.rules
console.log(beats)
const arrRules=Object.keys(beats)
cli.command('play <move>','description').action( function(args, callback) {
const yourMove=args["move"]
  if(beats[yourMove]==undefined){
    this.log("Invalid move")
  }
  else{
    this.log("random computer move:")
    const compMove=arrRules[Math.round(Math.random() * 2)]
    this.log(compMove)
    if(beats[compMove]==yourMove){
      this.log("You lose...")

    }
    else if (beats[yourMove]==compMove){
      this.log("You win!")

    }
    else if(yourMove==compMove){
      this.log('Tie!')
    }

  }

    callback();
  })

  cli.show()

  module.exports = {
    cli
  }
