const vorpal=require('vorpal')
cli=vorpal()
const { Config } = require('./Config')
const config=new Config('./config.json').rules.rules
console.log(config)
const arrRules=Object.keys(config)
cli.command('play <move>','description').action( function(args, callback) {

  if(config[args["move"]]==undefined){
    this.log("Invalid move")
  }
  else{
    this.log("random computer move:")
    const compMove=arrRules[Math.round(Math.random() * 2)]
    this.log(compMove)
    if(config[compMove]==args["move"]){
      this.log("You lose")

    }
    else if (config[args["move"]]==compMove){
      this.log("You win!")

    }
    else if(args["move"]==compMove){
      this.log('Tie!')
    }

  }

    callback();
  })

  cli.show()

  module.exports = {
    cli
  }
