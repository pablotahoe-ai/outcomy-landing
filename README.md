# Outcomy Landing

Landing one-page de Outcomy construida con Vite, React y Tailwind CSS.

## Correr localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

## Build de produccion

```bash
npm run build
```

Genera `dist/`.

Para previsualizar el build:

```bash
npm run preview
```

## Deploy

Configuracion lista para Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## Estructura principal

```text
public/
  apps/                         Portadas del catalogo Cover Flow
  audio/                        Podcast de Outcomy
  team/                         Fotos del equipo
  comy-call-transparent.png     COMY flotante para WhatsApp
  comy-intro.mp4                Video principal de COMY
  comy-proximamente.png         Seccion Productos OUTCOMY
  comy-say-hi.png               Poster/fallback del video
  comy.png                      COMY del cierre
  outcomy-logo.png              Logo

src/
  components/                   Secciones y UI
  data/appsCatalog.js           Catalogo editable de apps
  data/comyContext.js           Contexto interno para la lectura de ideas
```

## Agregar apps al Cover Flow

1. Guardar la portada en `public/apps`.
2. Agregar la entrada correspondiente en `src/data/appsCatalog.js`.
3. Ejecutar `npm run build`.

Portada recomendada: `600 x 840 px` en PNG, JPG, WebP o SVG. La web adapta
imagenes verticales u horizontales con `object-cover`, asi que conviene dejar el
elemento principal centrado.

## Contexto de Comy

El archivo `src/data/comyContext.js` define parametros internos para orientar la primera lectura de ideas: Red Team, Blue Team y mirada CEO.

## GitHub rapido

```bash
git init
git add .
git commit -m "Initial commit: Outcomy landing"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/outcomy-landing.git
git push -u origin main
```
