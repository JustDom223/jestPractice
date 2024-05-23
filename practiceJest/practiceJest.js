export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function reverseString(string) {
    const stringArray = string.split('');
    let reverseStringArray = [];
    stringArray.forEach((element) => {
        reverseStringArray.unshift(element);
    });
    return reverseStringArray.join('');
}

export const calculator = {
    add: function (...args) {
        const flatArgs = args.flat(Infinity);
        const filteredNumbers = flatArgs.filter((element) => !isNaN(element));
        return filteredNumbers.reduce(
            (accumulator, current) => accumulator + current,
            0,
        );
    },
    subtract: function (...args) {
        const flatArgs = args.flat(Infinity);
        const filteredNumbers = flatArgs.filter((element) => !isNaN(element));
        return filteredNumbers.reduce(
            (difference, current) => difference - current,
        );
    },
    divide: function (...args) {
        if (args.some((element) => isNaN(element))) {
            throw new Error('There is a letter in the inputs');
        } else {
            let quotient = args[0];
            args.splice(1).forEach((element) => {
                quotient = quotient / element;
            });
            return quotient;
        }
    },
    multiply: function (...args) {
        const flatArgs = args.flat(Infinity);
        const filteredNumbers = flatArgs.filter((element) => !isNaN(element));
        return filteredNumbers.reduce(
            (accumulator, current) => accumulator * current,
            1,
        );
    },
};

export function caesarCipher(message, key) {
    const messageArray = message.split('');
    let encryptedArray = [];
    messageArray.forEach((letter) => {
        encryptedArray.push(returnLetter(letter, key));
    });

    return encryptedArray.join('');
}

function returnLetter(originalLetter, key) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    let newLetter;
    if (isLetter(originalLetter)) {
        alphabet.forEach((letter, index) => {
            if (letter == originalLetter) {
                newLetter = alphabet[(index + key) % alphabet.length];
                return;
            } else if (letter.toUpperCase() == originalLetter) {
                newLetter =
                    alphabet[(index + key) % alphabet.length].toUpperCase();
                return;
            }
        });
        return newLetter;
    } else {
        return originalLetter;
    }
}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}
