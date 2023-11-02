const franc = require('franc');
const langs = require('langs');

 const arg = process.argv[2];
 //console.log(arg)

const langCode = franc(arg);

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

