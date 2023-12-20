import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const trainerName = useSelector((store) => store.trainerName.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase());
  };
  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName.trim())
  );
  const handleChangeType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormat);
        } else {
          setAllPokemons(data.results);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <main className="grid gap-2">
        <p className="font-semibold p-2">
          <b className="text-red-500 p-2">welcome {trainerName}</b>, here can
          find you favorite pokemon
        </p>
        <form className="flex justify-between p-2 " onSubmit={handleSubmit}>
          <div className=" absolute  left-2">
            <input
              name="pokemonName"
              placeholder="search pokemon.."
              type="text"
              className="p-3 border rounded-md outline-none"
            />
            <button className="bg-red-500 text-white p-3 font-semibold rounded-md">
              search
            </button>
          </div>
          <select
            className="p-3 rounded-md bg-red-500 text-white outline-none absolute right-20"
            onChange={handleChangeType}
          >
            <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">
              all pokemos
            </option>
            {types.map((type) => (
              <option value={type.url} className="capitalize" key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  );
};
export default Pokedex;
<option></option>;
