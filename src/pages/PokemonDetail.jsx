import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { gradientesBytype } from "../constants/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { id } = useParams();

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%";
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <article className="text-center max-w-[700px] mx-auto">
        <header
          className={`${
            gradientesBytype[pokemonInfo?.types[0].type.name]
          } relative h-[150px] p-12 gap-2`}
        >
          <img
            src={pokemonInfo?.sprites.other["official-artwork"].front_default}
            alt=""
            className="absolute bottom-0 translate-x-[80%]  w-[200px]"
          />
        </header>
        <span className="text-green-900 border text-[20px] font-semibold ">
          # {pokemonInfo?.id}
        </span>
        <h3 className="text-green-800  text-[30px] font-semibold capitalize">
          {pokemonInfo?.name}
        </h3>
        <div className="grid grid-cols-2 gap-2 p-2 items-center font-semibold">
          <div>
            <div>
              <h5>weigth</h5>
              <span>{pokemonInfo?.weight}</span>
            </div>
          </div>
          <div className="flex">
            <div>
              <h5>heith</h5>
              <span>{pokemonInfo?.height}</span>
            </div>
          </div>
        </div>

        <section className="relative ">
          <h4 className="p-2 text-[30px]">stats</h4>
          <hr />
          <ul className="grid gap-3">
            {pokemonInfo?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalize">{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                  <div
                    style={{
                      width: getPercentBarProgress(stat.base_stat),
                    }}
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};
export default PokemonDetail;
