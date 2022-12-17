export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=sJzixHygxXKE14TF42J93TKMnV8r1Mjo&q=${category}&limit=4`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( gif => {
        
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
        
    });
    
    //console.log(gifs);

    return gifs;

}