import Navigation from "../components/layouts/Navigation.tsx";
import ProfileHeader from "../features/profile/ProfileHeader.tsx";
import ProfileMenu from "../features/profile/ProfileMenu.tsx";

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
