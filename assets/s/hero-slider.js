document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('smartwatch-slider');
    const items = sliderContainer.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');
    let currentIndex = 0;

    const showItem = (index) => {
        // Asegura que el índice esté dentro de los límites
        if (index >= items.length) {
            index = 0;
        } else if (index < 0) {
            index = items.length - 1;
        }
        currentIndex = index;

        // Oculta todos y muestra solo el activo
        items.forEach(item => {
            item.classList.remove('active');
        });
        items[currentIndex].classList.add('active');
        
        // (Opcional: Si se usara el track, se calcularía el transform aquí)
        // sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const nextItem = () => {
        showItem(currentIndex + 1);
    };

    const prevItem = () => {
        showItem(currentIndex - 1);
    };

    // Asignar Event Listeners
    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    // Inicialización del slider
    showItem(currentIndex);
    
    // Auto-avance (Opcional)
    // setInterval(nextItem, 5000); 
});