// const names = ['ali', 'arian', 'aras', 'sima', 'sara', 'mahsa']

// function getRandomName(namesArr, count){const rnd = Math.floor(Math.random() * namesArr.length)
//     return namesArr[rnd]
// }

// console.log(getRandomName(names))

const names = ["ali", "arian", "aras", "sima", "sara", "mahsa"];

function getRandomNames(namesArr, count) {
  const mynames = names.slice(); //darim az names copy migirim ke taghir nakone
  if (mynames.length < count) {
    return [];
  }
  const randomNames = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * mynames.length);
    randomNames.push(mynames[randomIndex]);
    mynames.splice(randomIndex, 1);
  }
  return randomNames;
}
console.log(getRandomNames(names, 3));
