document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = 'yellow';
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = 'white';
        });
    });
});
