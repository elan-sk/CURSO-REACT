import React from 'react';

function Logo({src}) {
    return (
        <div class="my-4 text-center">
            <img id="logo" class="logo fade-in" src={src} alt="Logo empresarial"></img>
        </div>
    );
}

export { Logo };

    