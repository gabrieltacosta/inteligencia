import logo from "/logo.png";

const Header = () => {
  return (
    <div className="grid grid-cols-3 p-3">
      <div className="grid col-span-1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="grid col-span-2 items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold">6º BPRv - Inteligência</h1>
      </div>
    </div>
  );
};

export default Header;