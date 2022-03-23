function validateForm() {
    var cakeselect = document.forms["contact"]["cakes"].value;


    var name = document.forms["contact"]["yourName"];
    var namelength = name.value.length;

    var message = document.forms["contact"]["message"].value;
    var messagelength = message.length;

    var date = document.forms["contact"]["date"].value;
    console.log(date);

    var del = document.forms["contact"]["deliverTo"];
    console.log(del.value);







    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");
    var error10 = document.getElementById("error10");



    console.log(namelength + " Name Length");
    console.log(messagelength + " Message Length");
    console.log(date);


    if (cakeselect == "placeholder") {
        error1.style.display = "block";

        alert("Please Select Our Product");
    }

    if (cakeselect !== "placeholder") {
        error1.style.display = "none";

    }




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

    if (message == "") {
        error10.style.display = "block";
        alert('Please enter a message');
    }

    if (message !== "") {
        error10.style.display = "none";
    }

    if (message.length > 30) {
        error4.style.display = "block";
        alert('Message should not exceed 30 characters');
    }

    if (message.length < 30) {
        error4.style.display = "none";
    }


    if (date == "") {
        alert("Please fill out the delivery date")
        console.log('delivery date');
        error5.style.display = "block";
    }

    if (date !== "") {
        error5.style.display = "none";
    }

    if (del.value == "") {
        console.log("hel")
        alert("Please enter a delivery address")
        error6.style.display = "block";
    }

    if (del.value.length > 500) {
        alert("Address should not exceed 500 characters");
        error7.style.display = "block";
    }

    if (del.value.length < 500) {
        error7.style.display = "none";
    }

    if (del.value !== "") {
        error6.style.display = "none";
    }


    if ((cakeselect == "placeholder") || (name.value == "") || (name.value.length > 100) || (message == "") || (message.length > 30) || (date == "") || (del.value == "") || (del.value.length > 500)) {
        console.log('fail');
        return false;
    }




















}