class Animal {
  constructor(species) {
    this._species = species; // Use _species internally
  }

  get species() {
    return this._species; // Getter for species
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`); // Use getter instead of _species directly
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
