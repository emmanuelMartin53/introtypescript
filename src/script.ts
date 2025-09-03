// Déterminer si un mot ou une phrase est un palyndrome

const palyndrome = (phrase: string):string => {
  // je mets la "phrase" nminuscule
  phrase = phrase.toLowerCase().replace(/\s+/g, "");
  // je sépare les lettres de la phrase et j'en inverse l'ordre puis je les rassemble
  let reversed = phrase.split("").reverse().join(""); // inverse et recolle
  // je compare la phrase d'origine avec la phrase inversée
  return phrase === reversed ? `C'est un palyndrome`: `Ce n'est pas un palyndrome`;
};

const result: string = palyndrome("engage le jeu que je le gagne")
console.log(result.toUpperCase());
console.log(result.toUpperCase().split("").reverse());
