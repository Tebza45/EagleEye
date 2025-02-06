const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function() {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_1lfkjuo', 'template_1m62jka', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                successMessage.style.display = 'block';
                contactForm.reset(); // Clear the form fields
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000); // Hide the message after 5 seconds
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bookNowButtons = document.querySelectorAll('.book-now-btn');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const blogPost = this.closest('.blog');
            const badgeName = blogPost.querySelector('.badge').textContent;
            const blogTitle = blogPost.querySelector('.blog-title').textContent;
            const blogText = blogPost.querySelector('.blog-text').textContent;

            const message = `Shoot Name: ${badgeName}\nPackage: ${blogTitle}\nDetails: ${blogText}`;
            const encodedMessage = encodeURIComponent(message);

            // Redirect to the contact page with the message as a URL parameter
            window.location.href = `contact.html?message=${encodedMessage}`;
        });
    });
});
/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });