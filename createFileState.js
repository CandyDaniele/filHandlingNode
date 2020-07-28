import fs from 'fs';

export function createFileState() {
  try{
    const states = JSON.parse(fs.readFileSync('Estados.json'));
    const cities = JSON.parse(fs.readFileSync('Cidades.json'));

    if(!fs.existsSync('citiesByState')){
      fs.mkdirSync('citiesByState');
    }
    
    states.forEach(state => {
      let citiesByState = cities.filter(city => {
        return city.Estado === state.ID;
      })
      fs.writeFileSync(`./citiesByState/${state.Sigla}.json`, JSON.stringify(citiesByState));
    })
    
  }catch (err){
    console.log(err);
    return;
  }
}