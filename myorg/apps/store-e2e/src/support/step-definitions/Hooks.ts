// Roughly based off of https://github.com/badeball/cypress-cucumber-preprocessor/blob/cb6f7882870a0be4bffe1de5db580d058f7a15b9/docs/state-management.md
// World state is not required for badeball/cypress-cucumber-preprocessor but helps to create a centralized location of variables and functions

beforeEach(function() {
    const world = {
        value: 0,
        setTo(number) {
            this.value = number;
        },
        incrementBy(number) {
            this.value += number;
        },
        decrementBy(number) {
            this.value -= number;
        }
    };

    Object.assign(this, world);
})