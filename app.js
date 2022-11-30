document.addEventListener('DOMContentLoaded', () => {
    let currentImageIndex = 0;

    const images = [
        // ice caps melting:
        {
            url: "https://images.unsplash.com/photo-1461880234904-751a2f54f1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            altText: "Ice Caps Melting",
            description: "We are losing Arctic sea ice at a rate of almost 13% per decade",
        },
        // forest fire:
        {
            url: "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            altText: "Forest Fire",
            description: "The changing climate with warmer, drier conditions is likely to increase the risk, timing and severity of forest fires",
        },
        // deforestation:
        {
            url: "https://images.unsplash.com/photo-1624324378932-68e20f332982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            altText: "Deforestation",
            description: "Forest loss and damage is the cause of around 10% of global warming",
        },
    ];

    const image = document.getElementById('image-gallery');
    const buttonLeft = document.getElementById('gallery-left');
    const buttonRight = document.getElementById('gallery-right');
    const imageCaption = document.getElementById('image-figure');

    let currentImage = images[currentImageIndex];
    image.src = currentImage.url;
    image.alt = currentImage.altText;
    imageCaption.innerHTML = currentImage.description;

    buttonLeft.addEventListener('click', () => {
        if (currentImageIndex - 1 < 0) {
            currentImageIndex = images.length - 1;
        } else {
            currentImageIndex -= 1;
        }
        currentImage = images[currentImageIndex];
        image.src = currentImage.url;
        image.alt = currentImage.altText;
        imageCaption.innerHTML = currentImage.description;
    });

    buttonRight.addEventListener('click', () => {
        if (currentImageIndex + 1 > images.length - 1) {
            currentImageIndex = 0;
        } else {
            currentImageIndex += 1;
        }
        currentImage = images[currentImageIndex];
        image.src = currentImage.url;
        image.alt = currentImage.altText;
        imageCaption.innerHTML = currentImage.description;
    });
});
