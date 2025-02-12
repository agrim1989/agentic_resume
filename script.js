
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    // Show intro section by default
    document.getElementById('intro').classList.add('active');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('target') === '_blank') return; // Skip for download link
            
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav item
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
});
