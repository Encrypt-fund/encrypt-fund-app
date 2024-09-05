/**
 * Converts a string with suffix K, M, B to a number.
 * @param {string} value - The string value to convert (e.g., "1K", "5M", "3.5B").
 * @returns {number} - The numeric value.
 */
export const  convertToNumber = (value: string): number => {
    const suffix = value.slice(-1).toUpperCase();
    const number = parseFloat(value.slice(0, -1));

    switch (suffix) {
        case 'K':
            return number * 1_000;
        case 'M':
            return number * 1_000_000;
        case 'B':
            return number * 1_000_000_000;
        default:
            return parseFloat(value); // No suffix, return as is
    }
}