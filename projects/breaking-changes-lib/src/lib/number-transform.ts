export function breakingFunction(param1: number, param2: string) {
    const numberToString = param2.toString();
    return `${param1} is a string and ${numberToString} was a number`;
}