function vowels(str){

    let word = 'АУОЫИЭЯЮЕЁауоыиэяюеё';
    let sumWord = 0;

    for (let i = 0; i < str.length; i++) {
        for (let a = 0; a < word.length; a++) {
            str[i] == word[a] ? sumWord++ : ''
        }
    }
    console.log(sumWord);
    return sumWord;
}