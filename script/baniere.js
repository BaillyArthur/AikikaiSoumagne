let current = 0;
const total = 4;

function update() {
    slider.style.transform = "translateX(-" + (current * 100) + "%)";
}

export function updateSlider() {
    const slider = document.getElementById("slider");

    setInterval(() => {

        current++;

        if (current >= total) {
            current = 0;
        }

             update();

    }, 7000);
}

export function nextSlide() {

    current++;
    if (current >= total) {
        current = 0;
    }
    update();

}

export function prevSlide() {

    current--;
    if (current < 0) {
        current = total - 1;
    }
    update();

}