

import React from 'react';
import './BookCard.css'; 

const BookCard = ({
      nome,
      autor,
      genero,
      publicoAlvo
  }) => {
  
    return (
        <div className="book-card">
            <h3>{nome}</h3>
            <p>Autor:{autor}</p>
            <p>Gênero:{genero}</p>
            <p>PúblicoAlvo:{publicoAlvo}</p>
        </div>
    );
};

export default BookCard;