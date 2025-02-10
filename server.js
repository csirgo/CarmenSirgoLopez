const express = require('express');
const path = require('path');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');

const app = express();

// Sirve los archivos locales de forma estática
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// Configura i18next (si es necesario)
i18next.use(i18nextMiddleware.LanguageDetector).init({
  fallbackLng: 'en',
  resources: {
    en: { translation: require('./locales/en.json') },
    es: { translation: require('./locales/es.json') },
  },
});

// Usa middleware de i18next
app.use(i18nextMiddleware.handle(i18next));

// Rutas de Express
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Configura puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
