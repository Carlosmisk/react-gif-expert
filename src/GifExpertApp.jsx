

import { useState } from "react";
import { AddCategory, GifGrid, RemoveCategory } from "./components";


export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategorie = (newCategory)=>{

        //console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories] );
        //setCategories( cat => [...cat, 'Samurai X']);
    };


    const removeCat = (cat)=> {

        //const ind = categories.find( item => item === cat );
        const ind = categories.indexOf(cat);
        if (ind > -1){            
            categories.splice(ind, 1);
            // setCategories([categories.splice(ind, 1)]);
            setCategories([...categories]);
        };

    }
           

    return (
        <>
            <h1>GifExpertAPP</h1>

           <AddCategory 
                //setCategories={ setCategories }}
                onNewCategory={ event => onAddCategorie (event)}
           />
          
            { categories.map( category => 
                //return <li key={category}>{category}</li>
                (    
                    <GifGrid 
                        key={category}
                        category={category}
                        onRemoveCatGif={ removeCat }
                    />
                )
            )}
        </>
    ) 

}