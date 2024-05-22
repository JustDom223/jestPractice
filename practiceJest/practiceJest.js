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
            console.log('error');
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
