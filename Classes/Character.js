// Imprt the character class
export default class Character {
    static MAX_HEALTH = 100;
  // Define the character class
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      this.companion = null;
    }
  
  // define the roll method
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      return result
    }
  
    // build the loot method
    loot(...items) {
      const roll = this.roll()
      if (roll > 5) {
        console.log(`${this.name} looting area for items...
          found ${items}`)
        //  add the items to the inventory
          this.inventory.push(...items)
      } else {
        console.log(`${this.name} was unlucky and found nothing :(`)
      }
    }
  }