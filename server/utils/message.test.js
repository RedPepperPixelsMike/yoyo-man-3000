let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('Should generate the correct message object', () => {

        let from = 'Jen';
        let text = 'Some message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message)
            .toInclude({
                from,
                text
            });

    });

});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        let from = 'Deb';
        let lat = 15;
        let long = 19;
        let url = 'https://www.google.com/maps?q=15,19';

        let message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message)
            .toInclude({
                from,
                url
            });
    });
});