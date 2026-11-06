# Reel de cards — Ebert Prop

- `ebert-prop-reel-1080x1920.mp4`: formato reel (9:16), 18,8 s, 30 fps. Generado con `render/render-9x16.html`.
- `ebert-prop-reel-1080x1350.mp4`: versión 4:5 anterior, generada con `render/render.html`.

## Volver a renderizar

`render/render.html` dibuja cualquier instante del video con `window.render(t)`.
`render/frames.js` lo recorre con Playwright y guarda un PNG por cuadro.

```sh
cd reel-cards/render
mkdir -p frames
node frames.js full frames render-9x16.html   # o render.html para 4:5; "test test" saca 9 cuadros sueltos
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -preset slow -crf 16 \
  -pix_fmt yuv420p -movflags +faststart ../ebert-prop-reel-1080x1920.mp4
```

Copys, fotos y porcentajes del anillo están en el arreglo `SC` de `render.html`.
`assets/v_b5_fg.png` y `assets/v_b6_fg.png` (9:16) y `assets/b5_fg.png`, `assets/b6_fg.png` (4:5) son los recortes de primer plano
(roca y pasto) que pasan por delante de la card.
