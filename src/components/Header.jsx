const Header = () => {
  return (
    <header className="relative">
      <div className="h-14 bg-red-500 relative "></div>
      <div className="absolute w-[250px] sm:w-[300px] -bottom-2 left-2">
        <img src="/images/pokedex.png" alt="" />
      </div>
      <div className="h-10 bg-black"></div>
      <div className="absolute rigth-0 -translate-x-[20%] bottom-2 right-1  z-20 h-[60%]">
        <img className="h-full" src="/images/boton.png" alt="" />
      </div>
    </header>
  );
};
export default Header;
