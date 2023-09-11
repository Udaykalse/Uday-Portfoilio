// function sendMessage() { // Corrected function name from senMessage to sendMessage
//     (function () {
//         emailjs.init("N3D7Vs_UifVUlsCQ_");
//     })();

//     var serviceID = "service_mkrwzzs";
//     var templateID = "template_aixnf9a";

//     var params = {
//         sender: document.querySelector("#name").value, // Corrected .Value to .value
//         senderemail: document.querySelector("#email").value, // Corrected .Value to .value
//         Subject: document.querySelector("#subject").value, // Corrected .Value to .value
//         Message: document.querySelector("#message").value, // Corrected .Value to .value
//     };

//     emailjs.send(serviceID, templateID, params)
//         .then(function (res) {
//             alert('Thank You, ' + params['sender'] + '! Your message has been sent'); // Added missing exclamation mark and space
//         })
//         .catch(function (error) { // Added an error parameter to the catch block
//             console.error('Error sending email:', error);
//         });
// }
function sendMessage() {
    (function () {
        emailjs.init("N3D7Vs_UifVUlsCQ_");
    })();

    var serviceID = "service_mkrwzzs";
    var templateID = "template_aixnf9a";
    var form = document.getElementById("contactForm");

    var params = {
        sender: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        Subject: document.querySelector("#subject").value,
        Message: document.querySelector("#message").value,
    };
    console.log(params)
    emailjs.send(serviceID, templateID, params)
        .then(function (res) {
            alert('Thank You, ' + params['sender'] + '! Your message has been sent!');
            
            // Reset the form after successful submission
            form.reset();
        })
        .catch(function (error) {
            console.error('Error sending email:', error);
        });
}

