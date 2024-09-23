import { useEffect, useState } from "react";
import conectorApi from "./conection_Api";

const ApiLibrary = () => { 
    const [render, setRender] = useState([]);

    useEffect(() => {
        conectorApi.get('RoteNumberTwo').then(({ data }) => {
            console.log(data)
            setRender(data);
        });
    }, []);

    return (
        <div className="books-code">
            {render.map((item) => (
                <div key={item.id}>{item.name}</div> // Renderiza o nome do livro
            ))}
        </div>
    );
}

export default ApiLibrary;