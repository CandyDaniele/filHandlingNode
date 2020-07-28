import fs from 'fs';

export function rankingStatesByCitiesName() {
  const states = JSON.parse(fs.readFileSync('Estados.json'));
  let biggestNameCityPerState = [];
  let smallestNameCityPerState = [];

  let biggestAndSmallestCities = [];

  states.forEach((state) => {
    try {
      let bigNames = JSON.parse(
        fs.readFileSync(`./citiesByState/${state.Sigla}.json`)
      ).sort((a, b) => b.Nome.length - a.Nome.length);

      let smallNames = JSON.parse(
        fs.readFileSync(`./citiesByState/${state.Sigla}.json`)
      ).sort((a, b) => a.Nome.length - b.Nome.length);


      let biggestName = bigNames.filter(city => {
        return city.Nome.length === bigNames[0].Nome.length;
      }).sort((a, b) => {
        return a.Nome.localeCompare(b.Nome);
      });

      let smallestName = smallNames.filter(city => {
        return city.Nome.length === smallNames[0].Nome.length;
      }).sort((a, b) => {
        return a.Nome.localeCompare(b.Nome);
      });
      
      biggestNameCityPerState.push(biggestName[0].Nome + " - " + state.Sigla);
      smallestNameCityPerState.push(smallestName[0].Nome + " - " + state.Sigla);

      biggestAndSmallestCities.push({name: biggestName[0].Nome, state: state.Sigla});
      biggestAndSmallestCities.push({name: smallestName[0].Nome, state: state.Sigla});
    } catch (err) {
      console.log(err);
      return;
    }
  });

  biggestAndSmallestCities.sort((a, b) => a.name.length - b.name.length);

  let lastPositionArray = biggestAndSmallestCities.length - 1;

  let smallestCityofCountry = biggestAndSmallestCities.filter(city => {
    return city.name.length === biggestAndSmallestCities[0].name.length;
  }).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  let biggestCityofCountry = biggestAndSmallestCities.filter(city => {
    return city.name.length === biggestAndSmallestCities[lastPositionArray].name.length;
  }).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  console.log("\nCidade de maior nome de cada estado");
  console.log(biggestNameCityPerState);

  console.log("\nCidade de menor nome de cada estado");
  console.log(smallestNameCityPerState);

  console.log("\nCidade com o maior nome do Brasil");
  console.log(biggestCityofCountry[0].name + " - " + biggestCityofCountry[0].state);

  console.log("\nCidade com o menor nome do Brasil");
  console.log(smallestCityofCountry[0].name + " - " + smallestCityofCountry[0].state);

  
}
