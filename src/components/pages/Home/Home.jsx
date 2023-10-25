import "./Home.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-32">
      <h1 className="text-4xl font-light">
        Bienvenido a <span className="font-bold">Happy Cake</span>
      </h1>
      <p className="text-2xl font-light">El lugar de los pasteles felices</p>
      <p className="text-8xl font-light">🎂</p>
    </div>
  );
};

export default Home;
