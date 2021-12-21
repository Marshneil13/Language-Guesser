import {franc} from 'franc';
import langs from 'langs';
import color from 'colors'
const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log("COULDN'T DETECT LANGUAGE! TRY AGAIN".red);
}
else{
const language = langs.where("3",langCode);
console.log(`OUR BEST GUESS IS: ${language.name}`.green);
}