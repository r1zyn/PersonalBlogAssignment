function validateForm() {

    var name = document.forms["contact"]["yourName"];
    var namelength = name.value.length;

    var email = document.forms['contact']['email'].value;

    var subject = document.forms['contact']['subject'].value;

    var del = document.forms['contact']['message2'];


    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error11 = document.getElementById("error11");
    var error12 = document.getElementById("error12");
    var error13 = document.getElementById("error13");
    var error14 = document.getElementById("error14");
    var error15 = document.getElementById("error15");
    var error16 = document.getElementById("error16");
    var error17 = document.getElementById("error17");


    if (name.value == "") {
        error2.style.display = "block";

        alert('Please Enter Your Name');
    }

    if (name.value !== "") {
        error2.style.display = "none";
    }

    if (name.value.length > 100) {
        alert("Name cannot exceed 100 characters");
        error3.style.display = "block";
    }

    if (name.value.length < 100) {
        error3.style.display = "none";
    }




    if (email == "") {
        error11.style.display = "block";
        alert('Please fill out your email');
    }

    if (email !== "") {
        error11.style.display = "none";

    }

    if (email.length > 100) {
        error12.style.display = "block";
        alert('Your email should not exceed 100 characters');
    }


    if (subject.length == 0) {
        error13.style.display = 'block';
        alert('Please fill out the subject');
    }

    if (subject.length < 50) {
        error15.style.display = 'block';
        alert('Subject should not be shorter than 50 characters');
    }

    if (subject.length > 250) {
        error14.style.display = 'block';
        alert('Subject should not exceed 250 characters');
    }


    if (del.value == "") {
        console.log("hel")
        alert("Please enter a message")
        error16.style.display = "block";
    }

    if (del.value.length > 500) {
        alert("Message should not exceed 500 characters");
        error17.style.display = "block";
    }

    if (del.value.length < 500) {
        error17.style.display = "none";
    }

    if (del.value !== "") {
        error16.style.display = "none";
    }


    if ((name.value == "") || (name.value.length > 100) || (email.value == "") || (email.length > 100) || (subject.length == 0) || (subject.length < 50) || (subject.length > 250) || (del.value == "") || (del.value.length > 500)) {
        console.log('fail');
        return false;
    }











}