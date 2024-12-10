document.addEventListener('DOMContentLoaded', () => {
    console.log('Teman Curhat siap digunakan');
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Fitur ini belum tersedia. Tunggu update selanjutnya!');
        });
    });
});
