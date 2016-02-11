import { World } from './World';

export class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public doSomething(): void {
        World.tell(`${this.name}: Relax!`);
    }
}