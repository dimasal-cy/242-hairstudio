        // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
        });

        // Booking Form Submission
        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            
            alert(`Terima kasih, ${name}! Booking untuk ${service} berhasil. Kami akan menghubungi Anda.`);
            this.reset();
        });