export const getGifs = async( category ) => {
    const API_KEY = 'O0m99USle0v2nQ80ci2tOObUxvzWI19m';
    const URL = 'https://api.giphy.com/v1/gifs/search';
    const response = await fetch(URL + '?limit=10&q=' + category + '&api_key=' + API_KEY);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};