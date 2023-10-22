import React from 'react';

function useLocalStorage(itemName, InitialValue) {

    const localStorageItems = localStorage.getItem(itemName);
    let parsedItem;

    if (localStorageItems) {
        parsedItem = JSON.parse(localStorageItems);
    } else {
        localStorage.setItem(itemName, JSON.stringify(InitialValue));
        parsedItem = InitialValue;
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };


    return [item, saveItem];

}


export {useLocalStorage}
