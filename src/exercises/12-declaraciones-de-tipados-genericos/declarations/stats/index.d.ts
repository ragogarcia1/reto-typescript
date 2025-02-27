declare module 'stats' {
    export function getMaxIndex(input: T, comparator: T): T;
    export function getMaxElement(input: T, comparator: T): T;
    export function getMinIndex(input: T, comparator: T): T;
    export function getMinElement(input: T, comparator: T): T;
    export function getMedianIndex(input: T, comparator: T): T;
    export function getMedianElement(input: T, comparator: T): T;
    export function getAverageValue(input: T, comparator: T): T;
    // Añade las declaraciones de las funciones restantes aquí.
}
