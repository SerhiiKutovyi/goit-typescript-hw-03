class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, public key: Key) {}

  comeIn(): any {
    if (this.door) {
      this.tenants.push(person);
      console.log(`entered the house.`);
    } else {
      console.log('The door is closed. Cannot enter.');
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  private isOpen: boolean = false;

  constructor(door: boolean, key: Key){
   super(door, key);
  }

  openDoor(key: Key) {
    if (!this.isOpen && key.getSignature() === this.key.getSignature()) {
      this.isOpen = true;
      console.log('Door is opened.');
    } else {
      console.log('Invalid key or the door is already open.');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
console.log(person);


house.openDoor(person.getKey());

house.comeIn(person);


export {};
