export class Utils {

    formatDate(fechaStr: string): string {
        // Crear una instancia de Date desde la cadena
        const fecha = new Date(fechaStr);

        // Obtener los componentes de la fecha
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; // ¡Atención! Los meses comienzan desde 0
        const anio = fecha.getFullYear();

        // Agregar ceros a la izquierda si es necesario
        const diaStr = dia < 10 ? `0${dia}` : dia;
        const mesStr = mes < 10 ? `0${mes}` : mes;

        // Formato: DD-MM-YYYY
        return `${diaStr}-${mesStr}-${anio}`;
    }

}

export const PL_TOKEN = 'plataforma-token';
export const TOKEN_ENCRYP = 'U3NvQXBwOmIzYjc0NDM0MWE4NzA5MWFkNTRmZjU4ZDY4OTg5OGFk';

export const VAR_URL = 'plataformavirtual?';

export const USER_LOGEADO = localStorage.getItem("consejo-idPersona");
