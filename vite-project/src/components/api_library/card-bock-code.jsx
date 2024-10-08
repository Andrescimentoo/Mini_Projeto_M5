import { useEffect, useState } from "react";
import conectorApi from "./conection_Api";
import BookCard from "./books-card";


export const BooksCodes = () => {
    
    const [render, setRender] = useState([]);
    
    useEffect(() => {
         conectorApi.get('RoteNumberTwo').then(({ data }) => {
         console.log(data)
         setRender(data);
    });
    },[]);
    
    return(
       <>
        <div className="books-code">
           {render.map((item) => (
            <BookCard
                key={item.id}
                nome={item.nome}
                autor={item.autor}
                genero={item.genero}
                publicoAlvo={item.publicoAlvo}
            />

           ))}
    </div>

        </>
    )
}