/**
 * Esela SDK — punto de entrada
 *
 * SDK para integrar y extender la plataforma Esela (https://esela.app).
 * En desarrollo temprano: la API pública aún no está definida.
 *
 * @packageDocumentation
 * @license Apache-2.0
 */

export const VERSION = '0.0.0';

/** URL base de la API pública de Esela. */
export const ESELA_API_BASE = 'https://api.esela.app';

// Apartado de Juegos: juegos educativos para peques con autismo.
export * from './juegos/index.js';

// La superficie pública del SDK (embed del editor, API de plugins,
// cliente de pictogramas) se irá añadiendo aquí.
