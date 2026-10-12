# Reel de cards — Ebert Prop

`ebert-prop-reel-1080x1350.mp4`: reel 1080×1350, 18,8 s, 30 fps.

## Volver a renderizar

`render/render.html` dibuja cualquier instante del video con `window.render(t)`.
`render/frames.js` lo recorre con Playwright y guarda un PNG por cuadro.

```sh
cd reel-cards/render
mkdir -p frames
node frames.js full frames      # o: node frames.js test test (9 cuadros sueltos)
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -preset slow -crf 16 \
  -pix_fmt yuv420p -movflags +faststart ../ebert-prop-reel-1080x1350.mp4
```

Copys, fotos y porcentajes del anillo están en el arreglo `SC` de `render.html`.
`assets/b5_fg.png` y `assets/b6_fg.png` son los recortes de primer plano
(roca y pasto) que pasan por delante de la card.
