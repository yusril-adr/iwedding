import "../../styles/pages/Catalogue.css";
import DmBtn from "../utils/DmBtn";

const Catalogue = () => {
  return (
    <div className="catalogue">
      <div className="bg-yellow jumbotron">
        <div className="flex flex-col items-center" style={{
          width: "100px",
          marginLeft: ".5rem",
        }}>
          <img src="./logo-white.svg" alt="" width="70px" style={{
            marginTop: "1rem",
          }} />
          <h1>IWedding</h1>
        </div>

        <div className="container">
          <div className="card flex flex-col">
            <p className="font-bold" style={{ margin: 0 }}>Paket 1 / 125k</p>
            <ul>
              <li>1 menit</li>
              <li>2 foto</li>
              <li>req lagu</li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: "1rem" }}>
            <p className="font-bold" style={{ margin: 0 }}>Paket 2 / 200k</p>
            <ul>
              <li>1 menit</li>
              <li>5 foto</li>
              <li>req lagu</li>
              <li>Denah+barcode</li>
            </ul>
          </div>
        </div>        
      </div>

      <DmBtn />
    </div>
  );
};

export default Catalogue;
