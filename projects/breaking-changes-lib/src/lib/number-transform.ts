export function breakingFunction(param1: string, param2: number) {
    const numberToString = param2.toString();
    return `${param1} is a string and ${numberToString} was a number`;
}