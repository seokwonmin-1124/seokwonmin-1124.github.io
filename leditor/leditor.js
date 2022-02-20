$(document).ready(function () {
    $('.htmlView').hide();
});
 
function convertToHTML() {
    $('.htmlView').text($('.text').html());
    $('.htmlView').show();
    $('.text').hide();
}
 
function convertToText() {
    $('.text').html($('.htmlView').text());
    $('.text').show();
    $('.htmlView').hide();
}