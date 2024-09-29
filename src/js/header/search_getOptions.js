export function getOptions(word, cardsArr) {
  return cardsArr.filter((p) => {
    const regex = new RegExp(word, "gi");
    return p.name.match(regex);
  });
}
