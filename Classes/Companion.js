// Import the base Character class
import Character from "./Character.js"
// Define the Companion class that inherits from Character
export default class Companion extends Character {
  constructor(name, type) {
        // Call the parent constructor (Character)
    super(name)
    this.type = type
        // Companions start with a potion and a KitKat bar
    this.inventory.push('potion', 'KitKat bar')
  }

  attach(adventurer) {
        // Assigning the companion to the adventurer
    adventurer.companion = this
  }

  // leo.lendAHand('potion', robin)
  lendAHand(item, character) {
    const foundItemIndex = this.inventory.indexOf(item)
        // Check if the companion has the item
    if (foundItemIndex >= 0) {
            // Remove the item from the companion's inventory
      character.inventory.push(item);
      this.inventory.splice(foundItemIndex, 1)
      console.log(`${this.name} lended ${character.name} a ${item}`)
    } else {
      console.log(`${this.name} does not have ${item} in their inventory`)
    }
  }
  // Function to fetch and display an inspirational quote
  async sayInspirationalQuote() {
    const response = await fetch('https://api.realinspire.tech/v1/quotes/random')
    const data = await response.json()
    console.log(`${this.name} says: ${data[0].content}`)
  }
}