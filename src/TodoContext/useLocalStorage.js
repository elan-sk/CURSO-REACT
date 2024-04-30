import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 500);
    }, [itemName, initialValue]);

    async function saveItem(newItem, callback, time) {
        if (callback && typeof callback === 'function') {
            await new Promise(resolve => {
                callback();
                setTimeout(() => {
                    resolve()
                }, time);
            });
        }

        await new Promise(resolve => {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
            resolve();
        });
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}
