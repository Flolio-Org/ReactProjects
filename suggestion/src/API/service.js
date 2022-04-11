export async function getMoviesFromApi() {
    try {
      let response = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
      let responseJson = await response.json();
    //   cities.push(...responseJson);
      return responseJson;
     } catch(error) {
      console.error(error);
    }
  }


//const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
// const cities = []



//   getMoviesFromApi()
//   console.log(cities);
