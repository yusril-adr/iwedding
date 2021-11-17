import "../../styles/utils/DmBtn.css";

const DmBtn = () => (
  <div className="flex justify-center items-center">
    <button className="ig" style={{ width: "150px", backgroundColor: "pink", }}>
      <a href="https://www.instagram.com/iwedding.id" className="flex items-center justify-evenly">
        <span>DM on Instagram </span>
        <img src="./instagram.svg" alt="" />
      </a>
    </button>
  </div>
);

export default DmBtn;
