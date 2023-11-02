const franc = require('franc');
const langs = require('langs');

const langCode = franc('Wie geht es dir');

if (langCode === 'und') {
  console.log('Sorry, we can\'t translate that. Try a longer sentence')
} else {
  console.log(langs.where('3', langCode).name);
}