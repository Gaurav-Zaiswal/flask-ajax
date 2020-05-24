const btn = document.querySelector("#submit-btn");
const form1 = document.querySelector("#any-form");
const ulFld = document.querySelector(".add-here");
const uName = document.querySelector(".name");
const uRoll = document.querySelector(".roll");
const uFaculty = document.querySelector(".faculty");


form1.addEventListener('submit', callAjax);

function callAjax(event) {

    event.preventDefault();
    // initializing an object for XMLHttpRequest
    const xrh = new XMLHttpRequest();

    //onload method to check status
    xrh.onload = function () {
        // console.log(response);
        if (this.status === 200) {
            ulFld.innerHTML = "Submission successful using AJAX";
        } else {
            console.error();
            alert('some error occured!');
        }
    }

    // to initialize request
    xrh.open('POST', '/response', true);
    
    // to send POST request
    xrh.setRequestHeader("Content-type", "application/json");
    
    var data = JSON.stringify({
        'name': uName.value,
        'roll': uRoll.value,
        'faculty': uFaculty.value
    });

console.log(data);

    // sending request
    xrh.send(data);
}