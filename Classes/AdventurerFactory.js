
import Adventurer from "./Adventurer.js";


export default class AdventurerFactory {  
  // creating role
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  // creating new adventurer name
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer
  }
  // finding adventurers by index
  findByIndex (index) {
    return this.adventurers[index];
  }
  // finding adventurers by name
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}