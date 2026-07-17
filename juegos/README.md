# Juegos de Esela

Juegos educativos sencillos, sin prisa y con refuerzo positivo, pensados para
peques (con especial cariño para niñas y niños con autismo). No necesitan
conexión a internet: son archivos que se abren directamente en la tablet.

## Juegos disponibles

| Juego | Carpeta | Estado |
|-------|---------|--------|
| 🐝 Laberintos | [`laberinto/`](laberinto/) | ✅ Disponible |
| 🧩 Puzzles | [`puzzle/`](puzzle/) | ✅ Disponible |

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

## 🧩 Puzzles

El peque **arrastra con el dedo** las piezas de un rompecabezas (tipo *jigsaw*,
con pestañas entrelazadas dibujadas por código) hasta su sitio en el tablero.
Cuando están todas: **aplausos** y la palabra **“¡BIEN!”** (con estrellas y
confeti), igual que en el laberinto.

Pensado con el mismo cuidado:

- **Muy indulgente.** Sin tiempo, sin “game over”, sin castigos ni sonidos
  negativos. Al soltar una pieza **cerca** de su sitio, **encaja sola** (umbral
  generoso). Si se suelta lejos, simplemente se queda donde está.
- **Guía tenue.** En el tablero se ve un **fantasma** semitransparente de la
  imagen completa para ayudar a colocar. Se puede mostrar/ocultar con el botón
  👁️ / 🙈.
- **Piezas fijas.** Las que ya están colocadas se quedan quietas.
- **Refuerzo calmado.** Un tono suave al encajar cada pieza; aplausos y una
  vocecita “¡Muy bien!” al terminar (se silencia con 🔇).

### Nº de piezas (configurable)

El número de piezas se ajusta de dos formas:

1. **Desde la barra superior**, con los presets **6 / 12 / 20 / 35** (para ir
   probando sin tocar el código).
2. **En el código**, editando en `puzzle/index.html` la constante:

   ```js
   const NUM_PIEZAS = 20; // nº de piezas por defecto
   ```

A partir de ese número y de la **proporción de la imagen**, el juego calcula la
rejilla (filas × columnas) lo más cuadrada posible; el total real de piezas
puede quedar muy cerca del número pedido.

### Imágenes: wallpapers de Esela + reserva offline

Las imágenes salen de un array configurable, bien comentado, en
`puzzle/index.html`:

```js
const WALLPAPERS_ESELA = [
  // "https://esela.app/wallpapers/panal.png",
  // ...
];
```

- Si pones ahí las **URLs de los wallpapers colgados en esela.app**, el juego
  las carga (con `crossOrigin = "anonymous"`). Solo se dibujan con `drawImage`
  (nunca se leen los píxeles con `getImageData`), así que no hay problemas de
  *canvas tainted*.
- Si el array está **vacío**, o una imagen **falla** al cargar (por ejemplo, sin
  conexión), se usan **imágenes de reserva dibujadas por código** que reutilizan
  los cuatro escenarios del laberinto: **panal, jungla, cueva y piscina**. Así el
  juego funciona ya, sin conexión, y con dibujos que el peque reconoce.
- El botón **🖼️ Elegir foto** abre una **galería de escenas**: el peque toca la
  foto que más le guste y esa se parte en piezas. Se abre también al empezar.
- El botón **🎨 Cambiar** pasa a la siguiente imagen; **🔄** rebaraja la misma.

### Cómo jugar en la tablet

1. Abre `puzzle/index.html` en el navegador.
2. *(Opcional)* **“Añadir a pantalla de inicio”** para tenerlo como app a
   pantalla completa (con su icono 🧩). Va mejor **apaisado**.
3. Arrastra cada pieza del montón hasta su hueco: cuando esté cerca, encaja sola.

## Licencia

Apache-2.0 © Esela
