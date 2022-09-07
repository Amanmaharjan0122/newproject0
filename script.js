// collecting form data
function getInfo(){

    let contact = document.getElementById('contact-name').value;
    console.log(contact);
    let email = document.getElementById('contact-email').value;
    console.log(email);
    let message = document.getElementById('send-message').value;
    console.log(message);
    let btn = document.getElementById("btn").value;
    console.log(btn);

}

document.getElementById("btn").addEventListener("click", getInfo);




// (()=> {})