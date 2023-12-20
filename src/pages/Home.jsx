import { useDispatch } from "react-redux";
import { setTreinerName } from "../store/slice/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTreinerName(e.target.trainerName.value));
    navigate("/pokedex");
  };
  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden gap-3 ">
      <div className="text-center justify-self-center self-center ">
        <main>
          <header className="p-11">
            <img src="/images/pokedex.png" alt="" />
          </header>
          <h1 className="text-red-600 text-[30px] font-semibold">
            Hello trainer!
          </h1>
          <p className="font-semibold ">write your name for start..</p>
          <form
            className="bg-white flex  justify-center h-[570]items-center p-6"
            onSubmit={handleSubmit}
          >
            <input
              name="trainerName"
              placeholder="your name.."
              type="text"
              autoComplete="off"
              required
              className="border outline-none rounded-md"
            />
            <button
              className="bg-red-500 rounded p-3 text-white font-semibold"
              type="submit"
            >
              Star
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
