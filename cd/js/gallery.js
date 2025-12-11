$(document).ready(function() {

    $('.h-gallery').each(function() {

        const galleryHeader = $(this);
        const photos = galleryHeader.next('.photos'); 
        const scrollAmount = 230;

        // Левая стрелка
        galleryHeader.find('img.scroll').first().on('click', function() {
            photos.animate({
                scrollLeft: photos.scrollLeft() - scrollAmount
            }, 300);
        });

        // Правая стрелка
        galleryHeader.find('img.scroll').last().on('click', function() {
            photos.animate({
                scrollLeft: photos.scrollLeft() + scrollAmount
            }, 300);
        });
    });

});
