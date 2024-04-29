
import './fade.css';
import './move.css';
import './palpitate.css';

const timeAnimation = 300

async function animateElement(id, animation, time = timeAnimation, callback) {
    if (callback && typeof callback === 'function') {
        await new Promise(resolve => {
            callback(resolve);
        });
    }

    return new Promise(resolve => {
        const element = document.getElementById(id);
        element.classList.toggle(animation);
        const timeoutId = setTimeout(() => {
            element.classList.toggle(animation);
            resolve();
        }, time);

        clearTimeout(timeoutId);
    });
}



function animateElements(ids, animation, time = timeAnimation) {
    ids.forEach( id => {
        const element = document.getElementById(id) 
        element.classList.toggle(animation)

        const timeoutId = setTimeout(() => {
            element.classList.toggle(animation)
        }, time);

        clearTimeout(timeoutId);
    });
}

function animateMultiples(ids, animations, time = timeAnimation) {
    ids.forEach( (id, index) => {
        const element = document.getElementById(id)
        element.classList.toggle(animations[index])

        const timeoutId = setTimeout(() => {
            element.classList.toggle(animations[index])
        }, time);

        clearTimeout(timeoutId);
    });
}

async function animateExit(id, animation, time = timeAnimation, callback) {
    await new Promise(resolve => {
        const element = document.getElementById(id);
        element.classList.add(animation);
        const timeoutId = setTimeout(() => {
            resolve();
        }, time);

       clearTimeout(timeoutId);
    });

    if (callback && typeof callback === 'function') {
        console.log('entre');
        await new Promise(resolve => {
            callback(resolve);
        });
    }
    
}

function animateReplaceClass(id, animation, replaceClass, time = timeAnimation) {
    const element = document.getElementById(id)
    const [oldClass, newClass] = replaceClass

    element.classList.replace(oldClass, newClass)
    element.classList.toggle(animation)

    const timeoutId = setTimeout(() => {
        element.classList.toggle(animation)
        return
    }, time);

    clearTimeout(timeoutId);
}

export {
    animateElement,
    animateElements,
    animateMultiples,
    animateExit,
    animateReplaceClass,
};
