document.addEventListener('DOMContentLoaded', () => {
    let currentImage = 0;
    const images = [
        // ice caps melting:
        "https://images.unsplash.com/photo-1461880234904-751a2f54f1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // forest fire:
        "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // deforestation:
        "https://images.unsplash.com/photo-1624324378932-68e20f332982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ];

    const image = document.getElementById('image-gallery');
    const buttonLeft = document.getElementById('gallery-left');
    const buttonRight = document.getElementById('gallery-right');
    console.log(image)

    image.src = images[currentImage];


    buttonLeft.addEventListener('click', () => {
        if (currentImage -1<0) {
            currentImage= images.length-1;
          } else {
              currentImage -= 1;
          }
          image.src = images[currentImage];
    });

    buttonRight.addEventListener('click', () => {
        if (currentImage +1>images.length-1) {
          currentImage= 0;
        } else {
            currentImage += 1;
        }
        image.src = images[currentImage];
    });
});
