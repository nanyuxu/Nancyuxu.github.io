var count = 0;
function change(direction) {

    var school1 = {
        image: "./images/school2.png"
    }

    var school2 = {
        image: "./images/school3.png"

    }

    var school3 = {
        image: "./images/school.png"
    }


    var schools = [school1, school2, school3];
    if (direction == "BACK"){
        if (count == 2) {
            count = 0;
        } else{
            count += 1;
        }
    }else {
        if (count == 0) {
            count = 2;
        }else{
            count -= 1;
        }
    }

    document.getElementById("image1").src = schools[count].image;
}



var count = 0;
function diploma(direction) {

    var diploma1 = {
        image: "./images/diploma.png"
    }

    var diploma2 = {
        image: "./images/highschool.png"

    }

    var diplomas = [diploma1, diploma2];
    if (direction == "BACK"){
        if (count == 1) {
            count = 0;
        } else{
            count += 1;
        }
    }else {
        if (count == 0) {
            count = 1;
        }else{
            count -= 1;
        }
    }

    document.getElementById("d1").src = diplomas[count].image;

}



// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
