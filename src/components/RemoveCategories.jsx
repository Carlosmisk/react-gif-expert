

export const RemoveCategory = ({category, onRemoveCat}) => {

    const removeCat = (cat) =>{

        onRemoveCat(cat);

    };

  return (
    <button onClick={ () => removeCat(category) }>Eliminar Categoría {category}</button>
  )
}
