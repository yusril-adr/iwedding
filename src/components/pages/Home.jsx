import '../../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="flex flex-col justify-center items-center bg-yellow jumbotron">
        <img src="./logo-white.svg" alt="logo" className="w-100px" />

        <h1>Iwedding</h1>
      </div>

      <div className="container" style={{
        paddingTop: "1rem",
      }}>
        <p className="text-center">Dengan Iwedding cukup pesan sekali dan nikmati berbagai kemudahan menyebar undangan tanpa perlu ribet</p>
      </div>

      <div className="container">
        <div className="card">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img src="./paperless.svg" alt="" />
              <p>Paperless</p>
            </div>

            <div className="flex justify-center items-center">
              <img src="./easy-to-spread.svg" alt="" />
              <p>Easy To Spread</p>
            </div>

            <div className="flex justify-center items-center">
              <img src="./low-cost.svg" alt="" />
              <p>Low Cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
