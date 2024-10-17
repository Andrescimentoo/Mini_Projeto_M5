import { useEffect, useState } from "react";
import BookCard from "./boockCard.jsx";
import conectorApi from "../../axius.js";



 const BooksCodes = () => {
    
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
export default BooksCodes