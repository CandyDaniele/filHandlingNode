import { createFileState } from './createFileState.js';
import { countCitiesByState } from './countCitiesByState.js';
import { rankingStatesByCitiesCount } from './rankingStatesByCitiesCount.js';
import { rankingStatesByCitiesName } from './rankingStatesByCitiesName.js';

createFileState();

const totalCitiesByState = countCitiesByState('TO');
console.log('\nTotal de Cidades por Estado => '+ totalCitiesByState);


rankingStatesByCitiesCount();
rankingStatesByCitiesName();
