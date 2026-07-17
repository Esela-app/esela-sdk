# Juegos de Esela

Juegos educativos sencillos, sin prisa y con refuerzo positivo, pensados para
peques (con especial cariño para niñas y niños con autismo). No necesitan
conexión a internet: son archivos que se abren directamente en la tablet.

## Juegos disponibles

| Juego | Carpeta | Estado |
|-------|---------|--------|
| 🐝 Laberintos | [`laberinto/`](laberinto/) | ✅ Disponible |
| 🧩 Puzzles | — | 🔜 Próximamente |

La página [`index.html`](index.html) es el **apartado "Juegos"**: muestra las
tarjetas de cada juego y deja hueco para los siguientes.

## 🐝 Laberintos

El peque **traza con el dedo** el camino del laberinto hasta la meta. Al llegar
salen **aplausos** y aparece la palabra **“¡BIEN!”** (con estrellas y confeti).

Pensado con mucho cuidado:

- **Sin prisa y sin castigos.** No hay tiempo ni "game over". Si el dedo se sale
  del camino, el personaje simplemente espera; no pasa nada malo.
- **Se puede retroceder.** Si arrastras el dedo hacia atrás, el camino se deshace.
- **Refuerzo positivo claro.** Aplausos + “¡BIEN!” + una vocecita que dice
  “¡Muy bien!” (se puede silenciar con el botón 🔇).
- **Cuatro escenarios (tapices):**
  - 🐝 **Panal** — la abejita va a por la miel (muros de cera).
  - 🐵 **Jungla** — el monito por las pasarelas de madera hasta el plátano.
  - 🐭 **Cueva** — el ratoncito por la cueva de cristales hasta el queso.
  - 🦆 **Piscina** — el patito hasta el agua.

### Cómo abrirlo en la tablet

1. Abre el archivo `laberinto/index.html` en el navegador (Safari, Chrome…).
2. *(Opcional)* Menú del navegador → **“Añadir a pantalla de inicio”**. Así queda
   como una app a pantalla completa, sin barras.
3. Botones de arriba:
   - Los **animalitos** cambian de escenario.
   - **🔄** genera un laberinto nuevo.
   - **🔊 / 🔇** activa o silencia el sonido.

### Dificultad

Por defecto la rejilla es pequeña (5×5, fácil). Para hacerlo más grande, edita
en `laberinto/index.html` la línea:

```js
const NIVEL = { cols: 5, filas: 5 }; // sube los números para más dificultad
```

## Licencia

Apache-2.0 © Esela
