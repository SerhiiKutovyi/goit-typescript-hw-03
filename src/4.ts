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
  protected tenants: Person[] = [];

  constructor(protected key: Key, protected door: boolean = false) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);

      console.log(`Двері відкриті`);
    } else {
      console.log('Двері зачинені');
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Двері відкриті');
    } else {
      console.log('Двері зачинені');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
house.comeIn(person);

house.openDoor(person.getKey());

export {};
