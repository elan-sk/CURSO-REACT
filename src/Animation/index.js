
import './fade.css';
import './move.css';
import './palpitate.css';

const timeAnimation = 300

async function animateElement(id, animation, time = timeAnimation, callback) {
    if (callback && typeof callback === 'function') {
        await new Promise(resolve => {
            callback(resolve());
        });
    }

    await new Promise(resolve => {
        const element = document.getElementById(id);
        element.classList.toggle(animation);
        setTimeout(() => {
            element.classList.toggle(animation);
            resolve();
        }, time);
    });
}


function animateElements(ids, animation, time = timeAnimation) {
    ids.forEach( id => {
        const element = document.getElementById(id)
        element.classList.toggle(animation)

        setTimeout(() => {
            element.classList.toggle(animation)
        }, time);
    });
}

function animateMultiples(ids, animations, time = timeAnimation) {
    ids.forEach( (id, index) => {
        const element = document.getElementById(id)
        element.classList.toggle(animations[index])

        setTimeout(() => {
            element.classList.toggle(animations[index])
        }, time);
    });
}

async function animateExit(id, animation, time = timeAnimation, callback) {
    await new Promise(resolve => {
        const element = document.getElementById(id);
        element.classList.add(animation);
        setTimeout(() => {
            resolve();
        }, time);
    });

    if (callback && typeof callback === 'function') {
        console.log('entre');
        await new Promise(resolve => {
            callback();
            resolve();
        });
    }
}

function animateReplaceClass(id, animation, replaceClass, time = timeAnimation) {
    const element = document.getElementById(id)
    const [oldClass, newClass] = replaceClass

    element.classList.replace(oldClass, newClass)
    element.classList.toggle(animation)

    setTimeout(() => {
        element.classList.toggle(animation)
        return
    }, time);
}

export {
    animateElement,
    animateElements,
    animateMultiples,
    animateExit,
    animateReplaceClass,
};
