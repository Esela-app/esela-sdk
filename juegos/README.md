# Juegos de Esela

Juegos educativos sencillos, sin prisa y con refuerzo positivo, pensados para
peques (con especial cariño para niñas y niños con autismo). No necesitan
conexión a internet: son archivos que se abren directamente en la tablet.

## Juegos disponibles

| Juego | Carpeta | Estado |
|-------|---------|--------|
| 🐝 Laberintos | [`laberinto/`](laberinto/) | ✅ Disponible |
| 🧩 Puzzles | [`puzzle/`](puzzle/) | ✅ Disponible |
| 🎨 Colorear | [`colorear/`](colorear/) | ✅ Disponible |

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
   - **Nivel ➖ / ➕** (o escribiendo el número) cambia la dificultad.
   - **🔄** genera un laberinto nuevo.
   - **🔊 / 🔇** activa o silencia el sonido.

### Niveles de dificultad

Hay un **selector de nivel** en la barra de arriba (del 1 al 99). **Cada 5
niveles** el laberinto crece: el escenario se hace más denso (celdas más
pequeñas, más ramificaciones) y con menos atajos.

- **Nivel 1–5:** rejilla 5×5, fácil (ideal para empezar).
- **Nivel 20:** ~14×14, reto para un adolescente.
- **Nivel 50:** ~32×32, reto para un adulto.

Al completar un laberinto, el botón **“Siguiente ▶”** pasa al nivel siguiente
(y **“Otra vez 🔄”** repite el mismo nivel con un laberinto nuevo). El nivel de
partida por defecto se puede cambiar en `laberinto/index.html`:

```js
let nivel = 1; // nivel inicial
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

## 🎨 Colorear

El peque **pinta dibujos con el dedo**: elige un dibujo, un instrumento y un
color, y colorea a su ritmo. No hay objetivos ni tiempo: solo crear y disfrutar.
Está pensado para **bebés y niños hasta ~5 años**, con el mismo cariño que el
laberinto y el puzzle (sin prisa, sin errores ni castigos, todo grande y táctil).

### Cómo funciona por dentro

Hay **dos lienzos superpuestos**:

- **Pintura** (abajo): donde va el color.
- **Líneas** (arriba, sin capturar toques): el **contorno negro** del dibujo,
  siempre visible por encima de la pintura. Se usa además como **frontera** para
  el cubo de relleno.

### El cajón de herramientas (deslizante)

Un **botón flotante 🖌️** a la derecha abre un **cajón que se desliza desde la
derecha**. **Al elegir cualquier cosa (instrumento, grosor, color o tapiz) el
cajón se cierra solo** (cómodo con la tablet en las manos); también se cierra con
la ✖️ o tocando fuera. El cajón hace scroll si no cabe. Secciones:

- **Instrumentos:**
  - ✏️ **Lápiz** (fino, opaco y duro).
  - 🖊️ **Rotulador** (medio, semiopaco ~0.85).
  - 🖌️ **Pincel** (grueso, borde suave).
  - 🪶 **Pluma** (muy fino).
  - 🖍️ **Cera** (medio, con textura de crayón).
  - 🪣 **Cubo** (relleno de zona).
  - 🧽 **Borrador** (goma).
- **Grosor:** Fino / Medio / Grueso / Muy grueso (cambia el radio del trazo).
- **Colores:** 18 tonos alegres (incluye negro, blanco, marrón y un tono piel).
  Se marca cuál está activo.
- **Tapices (patrones):** Liso, **lunares, rayas, estrellas, corazones y
  cuadros**. Con un tapiz activo, el trazo pinta con esa textura (se genera con
  `createPattern` usando el color activo).

Abajo a la izquierda, un indicador muestra el **instrumento y color activos**.

### El cubo de relleno

El **cubo 🪣** hace un *flood fill* en la capa de pintura a partir del punto
tocado, usando la capa de líneas como **frontera**: donde hay contorno negro, el
relleno se detiene. Así se rellenan los huecos del dibujo **sin salirse de las
líneas**. El **borrador** borra pintura (no toca el contorno).

### Deshacer y limpiar

- **↩️ Deshacer:** guarda una instantánea de la pintura al empezar cada trazo o
  relleno (pila de ~20) y la restaura.
- **🗑️ Limpiar:** vacía la pintura (y también se puede deshacer).

### Los dibujos (más de 30)

Hay **más de 30 dibujos** (actualmente 44) hechos como **SVG** sencillos y
reconocibles, solo con **contorno negro** y zonas amplias para rellenar: sol,
luna, estrella, nube, arcoíris, casa, árbol, flor, seta, frutas, pez, pulpo,
ballena, tortuga, caracol, mariposa, abeja, mariquita, pájaro, pato, búho, gato,
perro, conejo, oso, elefante, ratón, coche, barco, cohete, globo, helado,
corazón, paraguas, pelota, regalo, taza, cupcake… El botón **🖼️** abre una
**galería** con todos (se abre también al empezar); al tocar uno se carga
limpiando la pintura.

### Cómo jugar en la tablet

1. Abre `colorear/index.html` en el navegador.
2. *(Opcional)* **“Añadir a pantalla de inicio”** para tenerlo como app a
   pantalla completa (icono 🎨). Va mejor **apaisado**.
3. Elige un dibujo en la galería, toca 🖌️ para abrir las herramientas, elige
   instrumento y color, y pinta con el dedo. El **cubo** rellena zonas enteras.
4. La flecha **←** de arriba a la izquierda vuelve al apartado de Juegos.

## Licencia

Apache-2.0 © Esela
