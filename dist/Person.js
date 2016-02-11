define(["require", "exports", './World'], function (require, exports, World_1) {
    "use strict";
    class Person {
        constructor(name) {
            this.name = name;
        }
        doSomething() {
            World_1.World.tell(`${this.name}: Relax!`);
        }
    }
    exports.Person = Person;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBR0ksWUFBbUIsSUFBWTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRU0sV0FBVztZQUNkLGFBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQVZZLGNBQU0sU0FVbEIsQ0FBQSJ9