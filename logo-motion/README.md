# Motion de logo — Ebert Prop

- `ebert-prop-logo-1080x1920.mp4`: vertical (reels / historias)
- `ebert-prop-logo-1920x1080.mp4`: horizontal (YouTube / presentaciones)

Duran 9,5 s, a 30 fps, sobre fondo blanco y con el verde de la marca (#045034).

| Tiempo | Qué pasa |
|---|---|
| 0,35–3,2 s | El árbol nace desde las puntas de las raíces y sube por el tronco hasta las ramas |
| 1,8–3,9 s | Cada hoja brota cuando el crecimiento llega a su rama |
| 3,0–4,7 s | Una luz cálida sale de la casa y los postigos de las ventanas giran sobre sus bisagras hasta cerrarse |
| 4,15–5,6 s | Aparece el punto y las letras de EBERT • PROP suben desde la línea base, del centro hacia afuera |
| 5,35–7,2 s | Aparece "Negocios Inmobiliarios" y el espaciado entre letras se va cerrando |
| 6,75–8,1 s | Un reflejo de luz cruza el logo |
| 8,1–9,5 s | El logo queda quieto en pantalla para el cierre |

## Volver a renderizar

```sh
cd logo-motion/render
mkdir -p frames
node frames.js 1080 1920 frames          # cualquier ancho y alto; agregá "test" para 10 cuadros sueltos
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -preset slow -crf 16 \
  -pix_fmt yuv420p -movflags +faststart ../ebert-prop-logo-1080x1920.mp4
```

Los tiempos de cada etapa están en las funciones `draw*` de `render/render.html`.
