export default function getData(value: string){
    console.log('loading');
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
        'X-RapidAPI-Key': '65f078d811msh87b64e2af8bd706p1c7f5ejsn4bf9939b6d15'
      }
    };
    
    return fetch(`https://transfermarket.p.rapidapi.com/search?query=${value}`, options)
      .then(response =>response.json())
}