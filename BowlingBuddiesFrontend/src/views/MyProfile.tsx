import Navigation from "../components/Navigation.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";

function MyProfile() {
  return (
    <>
      <div className="grid grid-cols-1 relative">
        <ProfileHeader />
        <div className="lg:hidden">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default MyProfile;
