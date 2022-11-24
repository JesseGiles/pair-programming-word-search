const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return null;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let verticalArrays = letters[0].length;
  let verticalJoin = [];

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let i = 0; i < verticalArrays; i++) {
    verticalJoin.push([]);
    for (let j = 0; j < letters.length; j++) {
      verticalJoin[i].push(letters[j][i]);
    }
  }

  for (let arrays of verticalJoin) {
    let checkVerticalWord = arrays.join("");
    if (checkVerticalWord.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;