// Initialize EmailJS with your user ID
(function(){
    emailjs.init("Dt88hnilfVkhGaJiC");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the parameters for the email template
    var templateParams = {
        to_email: email,  // this is the user-entered email address
        from_name: name,
        message: message
    };

    // Send the email
    emailjs.send('service_9vwve69', 'template_4glc59j', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully to ' + email + '!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message sending failed!');
        });
});