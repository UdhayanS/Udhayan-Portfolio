function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_lfwsykn", "template_8vefdke", params)
        .then(() => {
            alert("Email sent!");
        })
        .catch((error) => {
            alert("Failed to send email: " + error);
        });
}

(function(){
    emailjs.init({
      publicKey: "NjiX1UJLL4RlnXE7r",
    });
 })();