const createNums = (num) => {
  const numbers = []

  for(let i = 0; i < num; i++){
    numbers.push(Math.floor(Math.random() * 1025))
  }

  return numbers;
}

export const arrayReorganization = (array) => {
  let arrayReturned = []

  while(array.length > 0){
    arrayReturned.push(array.splice(Math.floor(Math.random() * array.length), 1));
  }

  return arrayReturned.flat();
}

export const fetchInfo = async (callback, num) => {
  const newCards = []
  const nums = createNums(num)

  for(let i = 0; i < num; i++){
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums[i]}`)
    const response = await request.json()
    newCards.push(
      {
        sprite: response.sprites.front_default,
        name: response.name,
        id: response.id,
        found: false
      }
    )
    newCards.push(
      {
        sprite: response.sprites.front_default,
        name: response.name,
        id: response.id,
        found: false,
        pair: true
      }
    )
  }

  const reorganized = await arrayReorganization(newCards)

  callback(reorganized);
}