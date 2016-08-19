const fs = require('fs')

class Config{
  constructor(path) {

      let empStr=fs.readFileSync(path)
      let emp=JSON.parse(empStr)
      this.rules=emp
  }

}
module.exports = {
  Config
}
