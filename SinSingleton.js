
class SingletonClass {
  constructor(name = "") {
    
    SingletonClass.instance = this;
    
    this.name = name;
    
    
    return this;
  }
  
  getName() {
    return this.name;
  }
}

const instanceOne = new SingletonClass("Superman");
const instanceTwo = new SingletonClass("Batman");
const instanceThree = new SingletonClass("Chavo");

console.log(`Name of instanceOne is "${instanceOne.getName()}"`);
console.log(`Name of instanceTwo is "${instanceTwo.getName()}"`);
console.log(`Name of instanceThree is "${instanceThree.getName()}"`);

console.log("Entonces, cada instancia realmente usa la primera inicializada ahorrando memoria.");
