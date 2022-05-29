// There is solutions simpler but this is the best one
// because the modification is with only one loop
const vowels = ["a", "e", "i", "o", "u"];
const reverseWordAndSetVowelsToUpperCase = (acc: string[], letter: string) => {
  const letterToAdd = letter.toLowerCase();
  return vowels.includes(letterToAdd)
    ? [letterToAdd.toUpperCase(), ...acc]
    : [letterToAdd, ...acc];
};

export default class ReverseService {
  reverseWord(word: string): string {
    const reversedWord = Array.from(word)
      .reduce(reverseWordAndSetVowelsToUpperCase, [])
      .join("");

    return reversedWord;
  }
}
