// Aos
const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img, i) => {
    img.dataset.aos = 'fade-down';
    img.dataset.aosDelay = i * 100;
    img.dataset.aosDuration = 1000;
})

AOS.init({
    once: true,
});
// Akhir Aos

// Gsap
gsap.registerPlugin(TextPlugin);
gsap.from('.jumbotron img', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
// gsap.to('.ketik', {duration: 2, text: 'Perkenalkan nama saya Masturi Shiddiq panggil aja Masturi, pekerjaan/karir bisa dibilang seorang programmer/pragrammin dan juga kontent kreator di youtube itu pun saya di youtube cuman sebagai hobi saja.'});
// Akhir Gsap


const scriptURL = 'https://script.google.com/macros/s/AKfycbxLKqCia6-TNwK1emKmzXd00d5bwJ_WM03yKtHDKlwXvanTpFe7mC4e0QBNZoWxNSJnfA/exec'
const form = document.forms['masturisq-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // Ketika tombol submit diklik
    // Tampilan tombol loading, Hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Tampilan tombol kirim, Hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan alert
            myAlert.classList.toggle('d-none');
            // Reset formnya
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})


const tamu = prompt('Siapa Nama Anda ?');
alert('Selamat Datang ' + tamu + ' Apa kabar Semoga Dalam Baik-Baik Saja Ya.');