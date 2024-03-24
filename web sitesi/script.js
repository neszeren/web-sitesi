document.addEventListener('DOMContentLoaded', function() {
    alert('Eğlenceli Düşler Atölyesi\'ne Hoş Geldiniz!');
});
document.addEventListener('DOMContentLoaded', function() {
    // Tüm img etiketlerini seç
    const images = document.querySelectorAll('.galeri img');

    // Her bir img etiketi için bir tıklama olayı ekleyin
    images.forEach(function(img) {
        img.addEventListener('click', function(event) {
            // Modal içindeki img etiketinin src'sini güncelle
            const modalImage = document.getElementById('modalImage');
            modalImage.src = this.src; // Tıklanan görselin src'sini kullan

            // Modalı göster
            $('#imageModal').modal('show');
        });
    });
});
