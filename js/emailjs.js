
(function(){
    emailjs.init("uEvqLwIMS_CzlJXGA");
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_j46beqb', 'template_sdh5mcq', this)
            .then(function() {
                alert('We will contact you shortly');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

window.onload = function() {
    document.getElementById('hero-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_j46beqb', 'template_sdh5mcq', this)
            .then(function() {
                alert('We will contact you shortly');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
