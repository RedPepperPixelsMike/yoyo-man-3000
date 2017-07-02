[{
    id: 'efef',
    name: 'Mike',
    room: 'The office'
}]

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        let user = {
            id, name, room
        };
        this.users.push(user);
        return user;
    }
}

module.exports = {Users};

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} years old`;
//     }
// }
//
// let me  = new Person('Mike', 30);
// console.log(me.getUserDescription());
