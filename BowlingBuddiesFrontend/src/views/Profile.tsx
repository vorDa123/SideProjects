import HeaderMob from "../components/Header.tsx";
import Navigation from "../components/Navigation.tsx";
import UserImg from "../assets/playerBowling.jpg";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-1">
        <HeaderMob showLogo={false} />
        <img
          src={UserImg}
          alt="user image"
          className="rounded-full border-6 border-white w-50 h-50 absolute left-1/2 top-1/14 transform -translate-x-1/2 -translate-y-1/14"
        />
        <div className="lg:hidden">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Profile;
