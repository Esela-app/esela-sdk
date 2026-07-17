/**
 * Esela · Apartado de Juegos
 *
 * Juegos educativos, sencillos y sin prisa, pensados para peques con autismo.
 * Cada juego es autónomo (HTML sin dependencias) y se puede abrir directamente
 * en una tablet, sin conexión a internet.
 *
 * Este módulo expone un pequeño registro para que la plataforma Esela (y
 * cualquier integración del SDK) pueda listar y lanzar los juegos disponibles.
 *
 * @packageDocumentation
 * @license Apache-2.0
 */

/** Cómo se controla un juego. */
export type ModoControl = 'tactil' | 'raton' | 'teclado';

/** Metadatos de un juego del apartado. */
export interface Juego {
  /** Identificador estable del juego. */
  id: string;
  /** Nombre visible. */
  nombre: string;
  /** Descripción breve para cuidadores/terapeutas. */
  descripcion: string;
  /** Emoji ilustrativo para la portada. */
  emoji: string;
  /** Ruta al HTML autónomo del juego (relativa a la raíz del repo). */
  ruta: string;
  /** Formas de control soportadas. */
  controles: ModoControl[];
  /** Etiquetas de habilidades que trabaja el juego. */
  habilidades: string[];
  /** Funciona sin conexión abriendo el archivo directamente. */
  offline: boolean;
}

/** Registro de juegos disponibles en Esela. */
export const JUEGOS: readonly Juego[] = [
  {
    id: 'laberinto',
    nombre: 'Laberintos',
    descripcion:
      'Traza con el dedo el camino del laberinto hasta la meta. Al llegar, ' +
      'aplausos y la palabra “¡BIEN!”. Sin prisa, sin errores ni castigos. ' +
      'Varios temas: abejita→panal, perrito→familia, patito→piscina, gatito→comida.',
    emoji: '🐝',
    ruta: 'juegos/laberinto/index.html',
    controles: ['tactil', 'raton'],
    habilidades: [
      'motricidad fina',
      'trazado y grafomotricidad',
      'planificación viso-espacial',
      'atención sostenida',
    ],
    offline: true,
  },
] as const;

/** Devuelve un juego por su id, o `undefined` si no existe. */
export function obtenerJuego(id: string): Juego | undefined {
  return JUEGOS.find((j) => j.id === id);
}

/** Lista los juegos que soportan un modo de control concreto. */
export function juegosPorControl(control: ModoControl): Juego[] {
  return JUEGOS.filter((j) => j.controles.includes(control));
}
