// Import necessary classes from other files
import Adventurer from "./Adventurer.js"
import Companion from "./Companion.js"
import AdventurerFactory from "./AdventurerFactory.js"

// Create an adventurer named Robin with the role "Wizard"
const robin = new Adventurer('Robin', 'Wizard')
// Simulate Robin finding items
robin.loot("sword", "potion", "potion", "artifact")
// Set Robin's health to 50
robin.health = 50
// Use Ronin's health potion twice
robin.useHealthPotion()
robin.useHealthPotion()

// Create a companion named Leo with the role "Cat"
const leo = new Companion('Leo', 'Cat')
// Attach Robin and Leo to each other
leo.attach(robin)
// Stimulate Leo lending a hand to Robin
leo.lendAHand('KitKat bar', robin)
// leo.sayInspirationalQuote()

// Create a companion named Frank with the role "Flea"
const frank = new Companion('Frank', 'Flea')
// Attach Frank and Robin to each other
frank.attach(leo)
// frank.sayInspirationalQuote()
frank.lendAHand('potion', leo)

// Create a factory specifically for generating "Wizard" adventurers
const healerFactory = new AdventurerFactory("Wizard")
// Generate a new adventurer named Gandalf using the factory
const gandalf = healerFactory.generate('Gandalf')
// Generate another adventurer named RadagastTheBrown using the factory
const radagastTheBrown = healerFactory.generate('Radagast')

// Simulate Gandalf and Radagast having a duel
gandalf.duel(radagastTheBrown)