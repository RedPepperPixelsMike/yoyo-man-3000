const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
   it('Shoould add new user', () => {
       let users = new Users();
       let user = {
           id: 'ihoi',
           name: 'Mike',
           room: 'The oofice'
       };
       let resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
   })
});