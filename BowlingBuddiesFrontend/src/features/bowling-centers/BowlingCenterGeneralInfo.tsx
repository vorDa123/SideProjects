import BowlingCenterImg from "../../assets/playerBowling.jpg";
function BowlingCenterGeneralInfo() {
  return (
    <>
      <div className="mt-5">
        <img
          src={BowlingCenterImg}
          alt="bowling center image"
          className="rounded-m20 shadow-mob"
        />
        <h1 className="text-mh1 mt-5 font-semibold">West Bowling</h1>
        <p className="mt-2">Zaprešićka 2, 10290, Jablanovec</p>
        <p className="mt-2">info@westbowling.com</p>
        <p className="mt-2">+38591 555 5555</p>
      </div>
    </>
  );
}

export default BowlingCenterGeneralInfo;
