import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <h2>Detalles del Pokemon</h2>
      {pokemon && (
        <div>
          <h4>{pokemon.name}</h4>
          <h4>ID: {pokemon.id}</h4> {}
          <h4>Type: {pokemon.types.map(type => type.type.name).join(', ')}</h4> {}
          {}
          {pokemon.sprites && pokemon.sprites.other && pokemon.sprites.other['official-artwork'] && (
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} /> 
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
