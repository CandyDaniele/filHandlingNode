import fs from 'fs';
import { countCitiesByState } from './countCitiesByState.js';

export function rankingStatesByCitiesCount() {
  const states = JSON.parse(fs.readFileSync('Estados.json'));

  let statesWithCityCount = states.map((state) => {
    return {
      sigla: state.Sigla,
      citiesCount: countCitiesByState(state.Sigla),
    };
  });

  let ascStatesWithCityCount = statesWithCityCount
    .sort((a, b) => {
      return b.citiesCount - a.citiesCount;
    })
    .slice(0, 5);

  let ascStatesWithCityCountFormated = ascStatesWithCityCount.map((state) => {
    return `${state.sigla} - ${state.citiesCount}`;
  });


  let descStatesWithCityCount = statesWithCityCount
    .sort((a, b) => {
      return b.citiesCount - a.citiesCount;
    })
    .slice(statesWithCityCount.length - 5, statesWithCityCount.length);

  let descStatesWithCityCountFormated = descStatesWithCityCount.map((state) => {
    return `${state.sigla} - ${state.citiesCount}`;
  });

  console.log('\nTop 5 - Estados com mais cidades:');
  console.log(ascStatesWithCityCountFormated);

  console.log('\nTop 5 - Estados com menos cidades:');
  console.log(descStatesWithCityCountFormated);
}
