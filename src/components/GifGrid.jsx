

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { RemoveCategory } from "./RemoveCategories";


export const GifGrid = ({category, onRemoveCatGif})=> {

    const {images, isLoading} = useFetchGifs(category);

    const removeCat = (category) => {

        onRemoveCatGif(category);

    };

    
    return (
        <>
            <div className='divPadre'>
                <div className="divHijo">
                    <h3>{category}</h3>
                </div>
                <div className="divHijo">
                    <RemoveCategory              
                        category={ category }
                        onRemoveCat={ removeCat }
                    />
                </div>
            </div>
            

                   
        
        {
            // isLoading ? <h2>Cargando...</h2>
            // : null
            isLoading && <h2>Cargando...</h2>

        }

        <div className='card-grid'>
            { images.map( image => 
                            <GifItem
                                key={image.id}
                                { ...image }                                
                            />
                        )
            }
            
        </div>
       
        </>
            );
    
};