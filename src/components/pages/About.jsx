import "../../styles/pages/About.css";
import DmBtn from "../utils/DmBtn";

const About = () => (
  <div className="about">
    <div className="container flex flex-col justify-center items-center">
      <img src="./logo-black.svg" alt="" />
      <h1>IWedding</h1>

      <p className="text-center">
        Iwedding adalah sebuah bisnis dibidang jasa pembuatan undangan digital. Di era 
        industry 4.0 apalagi pada masa pandemic covid 19 sangat ridak mungkin untuk kita 
        keluar rumah hanya untuk membagikan undangan hal tersebut sangatlah beresiko 
        untuk Kesehatan kita, oleh sebab itu kami ada untuk anda dalam memudahkan 
        membagikan undangan dengan hanya menggunakan smarthphone. Dengan 
        @iwedding.id cukup pesan sekali dan nikmati berbagai kemudahan menyebar 
        undangan tanpa perlu ribet dengan harga terjangkau
      </p>

      <DmBtn />
    </div>
  </div>
);

export default About;
