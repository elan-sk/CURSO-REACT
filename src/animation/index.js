
import './animation.css';

const timeAnimation = 300

function animateElement(id, animation) {
    const element = document.getElementById(id)
    element.classList.toggle(animation)

    setTimeout(() => {
        element.classList.toggle(animation)
    }, timeAnimation);

}

function animateElements(ids, animation) {
    ids.forEach( id => {
        const element = document.getElementById(id)
        element.classList.toggle(animation)

        setTimeout(() => {
            element.classList.toggle(animation)
        }, timeAnimation);
    });
}

function animateMultiples(ids, animations) {
    ids.forEach( (id, index) => {
        const element = document.getElementById(id)
        element.classList.toggle(animations[index])

        setTimeout(() => {
            element.classList.toggle(animations[index])
        }, timeAnimation);
    });
}

export { animateElement, animateElements, animateMultiples};
