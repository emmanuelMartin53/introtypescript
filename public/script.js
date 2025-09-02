const palindrome = (phrase) => {
    phrase = phrase.toLowerCase().replace(/\s+/g, "");
    let reversed = phrase.split("").reverse().join(""); // inverse et recolle
    if (phrase === reversed) {
        return `C'est un palindrome!`;
    }
    else {
        return `Ce n'est pas un palindrome`;
    }
};
const result = palindrome("engage le jeu que je le gagne");
console.log(result.toUpperCase());
export {};
