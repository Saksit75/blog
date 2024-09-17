import home from "../images/home.svg";
const Home = () => {
  return (
    <>
      <div className="container mx-auto py-6">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold font-sans">Home</p>
          <img src={home} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
