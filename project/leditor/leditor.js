$(document).ready(function () {
    $('#htmlView').hide();
});

function convertToHTML() {
    $('#htmlView').text($('#textView').html());
    $('#htmlView').show();
    $('#textView').hide();
}

function convertToText() {
    $('#textView').html($('#htmlView').text());
    $('#textView').show();
    $('#htmlView').hide();
}