(function(){
    emailjs.init("LU17B-rAdOWrUy1zv");
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('haus.estate', 'template_mkyq818', this)
            .then(function() {
                alert('Все готово! Специалист свяжется с вами в течении 30 минут');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

    document.getElementById('hero-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('haus.estate', 'template_mkyq818', this)
            .then(function() {
                alert('Все готово! Специалист свяжется с вами в течении 30 минут');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}