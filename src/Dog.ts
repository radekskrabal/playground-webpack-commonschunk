import { World } from './World';

export class Dog {
    public bark(): void {
        World.tell('Dog: whaaaf');
    }
}