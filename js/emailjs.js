(function(){
    emailjs.init("uEvqLwIMS_CzlJXGA");
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_j46beqb', 'template_sdh5mcq', this)
            .then(function() {
                alert('Все готово! Специалист свяжется с вами в течении 30 минут');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

    document.getElementById('hero-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_j46beqb', 'template_sdh5mcq', this)
            .then(function() {
                alert('Все готово! Специалист свяжется с вами в течении 30 минут');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}