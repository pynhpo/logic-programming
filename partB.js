function getMissingLetters(data) {
  const sentence = data?.toLowerCase();
  const alpha = Array.from(Array(26)).map((_, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const foundLetterMap = alphabet.reduce(
    (result, value) => ({
      ...result,
      [value]: false,
    }),
    {}
  );
  for (let letter of sentence) {
    if (foundLetterMap[letter] === false) {
      foundLetterMap[letter] = true;
    }
  }
  return Object.keys(foundLetterMap)
    .map((key) => (foundLetterMap[key] === false ? key : ""))
    .filter((keyText) => !!keyText)
    .join("");
}

console.log(getMissingLetters("A quick brown fox jumps over the lazy dog"));
