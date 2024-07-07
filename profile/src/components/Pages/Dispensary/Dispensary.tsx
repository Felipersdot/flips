import React, { useEffect, useState } from 'react';
import thirdParty from '../../../api/thirdParty';

const Dispensary = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = (await thirdParty.pokemon.getList()).data.results;
      setPokemonList(response);
    };
    fetchPokemonList();
  }, []);

  return (
    <div>
      {pokemonList.map((c: any, key) => {
        return <div key={key}>{c.name}</div>;
      })}
    </div>
  );
};

export default Dispensary;
