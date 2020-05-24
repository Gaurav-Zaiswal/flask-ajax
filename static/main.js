const btn = document.getElementsByTagName("button");
const ulFld = document.querySelector(".add-here");

btn[0].addEventListener('click', callAjax);

function callAjax(event) {
    event.preventDefault();
    // initializing an object for XMLHttpRequest
    const xrh = new XMLHttpRequest();

    //onload method to check status
    xrh.onload = function () {
        // console.log(response);
        if (this.status === 200) {
            let list = JSON.parse(this.responseText);
            let listItem = document.createElement("li");
                var item = '';
                item += `Name: ${list.name}<br/>`
                    + `Roll: ${list.roll}<br/>`
                    + `Faculty: ${list.faculty}<br/>`;

                listItem.innerHTML = item;
                ulFld.appendChild(listItem);
        } else {
            console.error();
            alert('some error occured!');
        }
    }

    // to initialize request
    xrh.open('POST', '/', true);

    // sending request
    xrh.send();
}