// JavaScript source code


$(document).ready(function () {

    createGrid(33);

    $('.sketch').click(function () {
        getInput();
    });

    $('.trail').click(function () {
        trail();
    });

    $('.clear').click(function () {
        clearScreen();
    });    
});

function createGrid(size) {
    var $row = $("<div/>", {
        class: 'row'
    });
    var $square = $("<div/>", {
        class: 'square'
    });

    //Clone squares to fit in the row.
    for (var i = 0; i < size; i++) {
        $row.append($square.clone());
    }
    //Clone rows to fit in the container.
    for (var i = 0; i < size; i++) {
        $("#container").append($row.clone());
    }
    //Set the square dimensions to fit the container.
    var height = 640 / size;
    $('.square').css('height', height);
    $('.square').css('width', height);
    $('.row').css('height', height);
    draw();
}

function draw() {
    //Change the color of squares when mouse hovers over them.
    $('.square').mouseover(function () {
        $(this).addClass('square_hover');
    });
}

function getInput() {
    var input = prompt("Please enter grid size", 40);
    if (input != null) {
        $('.square').remove();
        $('.row').remove();
        createGrid(input);
        draw();
    }   
}

function trail() {
    var input = prompt("Please enter grid size", 40);
    if (input != null) {
        $('.square').remove();
        $('.row').remove();
        createGrid(input);
    }
    //Change the color of squares when mouse hovers over them.
    $('.square').mouseenter(function () {
        $(this).addClass('square_hover');
        $(this).fadeTo("fast", 0);
    });
    $(".square").mouseleave(function () {
        $(this).css("background", "#E0E0E0");
        $(this).fadeTo("slow", 1);
    });
}

function clearScreen() {
    $('.square').removeClass('square_hover');
    draw();
}

