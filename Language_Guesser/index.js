const franc = require('franc');
const langs = require('langs');

const langCode = franc('Wie geht es dir');

if (langCode === 'und') {
  console.log('Sorry, we can\'t translate that. Try a longer sentence')
} else {
  const language = langs.where('3', langCode).name;
  if (!language) {
    console.log('Sorry, we had a problem deciphering this language, try another language');
  } else {
  console.log(language)
  }
}

