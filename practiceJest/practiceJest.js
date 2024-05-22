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
        console.log(filteredNumbers);
        let accumulator = filteredNumbers[0];

        for (let i = 1; i < filteredNumbers.length; ++i) {
            accumulator = accumulator - filteredNumbers[i];
        }
        return accumulator;
    },
};
