import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I have {int} denarios", function(total: number) {
    this.total = total;
    this.setTo(total);
});

When("I spend {int} denarios", function(spent: number) {
    this.total = this.total - spent;
    this.decrementBy(spent);
});

Then("I have {int} denarios remaining", function(remaining: number) {
    expect(this.total).to.eq(remaining);
    expect(this.value).to.equal(remaining);
});