import { Main } from '../lib/main';


describe ('Main', function () {

    it ('should not throw on initialization', function() {
        expect(function() {
            new Main();
        }).not.toThrow();
    });

    describe('methods', function() {
        var main, options;

        beforeEach(function() {
            options = {
                msg: 'Testing'
            };

            main = new Main(options);
        });

        describe('saySomething', function() {
            it ('should return the value passed in as an argument', function() {
                expect(main.saySomething('WAT')).toBe('WAT');
            });

            it ('should return the msg property defined in the instance options when no message is passed', function() {
                expect(main.saySomething()).toBe('Testing');
            });

            it ('should return a default msg of "Hello World" when no msg option is passed to the instance and no message is passed to the function', function() {
                var main = new Main();
                expect(main.saySomething()).toBe('Hello World');
            });
        });
    });
});
