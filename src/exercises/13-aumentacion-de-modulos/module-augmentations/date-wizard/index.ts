// Esto habilita el modo de aumento de módulos.
import 'date-wizard';

declare module 'date-wizard' {
    // Agrega tus extensiones de módulo aquí.
    export interface DateDetails {
        hours: number;
    }

    export function pad(data: number): string;
}
