const expect = require('expect');

const {isRealString} = require('./validation');

describe('Testing if real string', () => {

    it ('Should reject non-string values', ()=> {
        let res = isRealString(98);

        expect(res).toBe(false);
    });

    it ('Should reject string with only spaces', () => {
        let res = isRealString('     ');

        expect(res).toBe(false);
    });

    it ('Should allow string with non-space characters', () => {

        let res = isRealString(' mIKE HEY  ');

        expect(res).toBe(true);

    });


});