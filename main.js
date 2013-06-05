/*

    FILE: CHECKLIST.JS
    DESCRIPTION: Show more or less optional coverages based on items checked
    AUTHOR(S): Nick Katarow

    TO DO:
    - OPTIONAL: Remove More/Less trigger when all items are checked
        - if (($(checkboxList).find('input:checkbox:not(:checked)').length) !== 0) {
        - will need to keep track of check events
*/

var CRFT = window.CRFT || {};

CRFT.Checklist = function (checkboxList) {
    var self = this;

    // Elements
    self.toggleBtn      = $('<a href="#" class="checklist-toggle">generic</a>');
    self.showLessTxt    = 'See less optional coverages';
    self.showMoreTxt    = 'See more optional coverages';

    // Properties
    self.showingMore = null;

    // Setup
    $(checkboxList).after(self.toggleBtn);
    self.showMore(checkboxList);

    // Event Delegation
    self.toggleBtn.click(function (event) {
        event.preventDefault();

        if (self.showingMore === true) {
            self.showLess(checkboxList);
        } else {
            self.showMore(checkboxList);
        }
    });
}; // End: CRFT.Checklist


CRFT.Checklist.prototype.showLess = function (checkboxList) {
    var self = this;

    // Changes toggle button text
    $(self.toggleBtn).empty().append(self.showMoreTxt);

    // Find unchecked boxes and hide them
    $(checkboxList).find('input:checkbox:not(:checked)').parents('li').addClass('fade');

    self.showingMore = false;
}; // End showLess


CRFT.Checklist.prototype.showMore = function (checkboxList) {
    var self = this;

    // Changes toggle button text
    $(self.toggleBtn).empty().append(self.showLessTxt);

    // Find unchecked boxes and hide them
    $(checkboxList).find('input:checkbox:not(:checked)').parents('li').removeClass('fade');

    self.showingMore = true;
}; // End: showMore
