import { useEffect, useState } from "react";
import conectorApi from "./conection_Api";

const ApiLibrary = () => { 
    const [render,setRender]= useState([])

    useEffect(() => {
            conectorApi.get('/RoteBoocksG').then(({data})=>{
                setRender(data)
            })
            console.log(render)
    },[''])
    
    return(
        <div className="books-code">
            {render}
        </div>
    )
}
export default ApiLibrary