import { useState } from "react";


export const AddCategory = ({onNewCategory})=>{

    const [inputValue, setInputValue] = useState('');


    const handleOnChange = ({target})=>{
        setInputValue(target.value);
    };

    const handleOnSubmit = (event)=> {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories( cat => [ inputValue, ...cat] );
        onNewCategory(inputValue.trim())

        setInputValue('');
    };

    return (
        <form onSubmit={event=> handleOnSubmit(event)}>
            <input
                type='text'
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ event => handleOnChange(event) }                
            />       
        </form>
    )
    
    

};