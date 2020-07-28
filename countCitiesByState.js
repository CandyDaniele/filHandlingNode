import fs from 'fs';

export function countCitiesByState(state){
  try{
    const citiesByState = JSON.parse(fs.readFileSync(`./citiesByState/${state}.json`));
    
    return citiesByState.length;
    
  }catch (err){
    console.log(err);
    return;
  }
}