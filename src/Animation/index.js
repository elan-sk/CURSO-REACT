
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
            resolve(clearTimeout(timeoutId));
        }, time);
    });
}


async function animateElements(ids, animation, time = timeAnimation) {
    await new Promise(resolve => {
        ids.forEach(id => {
            const element = document.getElementById(id)
            element.classList.toggle(animation)
        });
        resolve();
    })

    await new Promise(resolve => {
        const timeoutId = setTimeout(() => {
            ids.forEach(id => {
                const element = document.getElementById(id)
                element.classList.toggle(animation)
                resolve(clearTimeout(timeoutId));
            });
        }, time);
    });
}

async function animateMultiples(ids, animations, time = timeAnimation) {
    await new Promise(resolve => {
        ids.forEach((id, index) => {
            const element = document.getElementById(id)
            element.classList.add(animations[index])
        });
        resolve();
    });

    await new Promise(resolve => {
        const timeoutId = setTimeout(() => {
            ids.forEach((id, index) => {
                const element = document.getElementById(id)
                element.classList.remove(animations[index])
                resolve(clearTimeout(timeoutId));
            });
        }, time);
    });

}

async function animateExit(id, animation, time = timeAnimation, callback) {
    await new Promise(resolve => {
        const element = document.getElementById(id);
        element.classList.add(animation);
        const timeoutId = setTimeout(() => {
            resolve(clearTimeout(timeoutId));
        }, time);
    });


    if (callback && typeof callback === 'function') {
        await new Promise(resolve => {
            callback(resolve);
        });
    }
}


export {
    animateElement,
    animateElements,
    animateMultiples,
    animateExit,
};
