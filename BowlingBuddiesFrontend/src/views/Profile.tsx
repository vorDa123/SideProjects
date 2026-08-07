import Navigation from "../components/Navigation.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";
import ProfileMenu from "../components/ProfileMenu.tsx";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-1 relative">
        <ProfileHeader />
        <ProfileMenu />
        <div className="lg:hidden">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Profile;
