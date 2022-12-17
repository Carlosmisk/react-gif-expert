//import { UseFetchGifs } from "../CustomHooks/UseFetchGifs"


export const GifItem = ({title, url}) => {

    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
