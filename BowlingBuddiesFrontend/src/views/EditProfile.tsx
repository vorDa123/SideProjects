import Navigation from "../components/layouts/Navigation.tsx";
import HeaderMob from "../components/layouts/Header.tsx";
import EditProfilePersonal from "../features/profile/EditProfilePersonal.tsx";
import EditProfileAddress from "../features/profile/EditProfileAddress.tsx";
import EditProfileContact from "../features/profile/EditProfileContact.tsx";
import EditProfileRegisteredPlayer from "../features/profile/EditProfileRegisteredPlayer.tsx";
import EditProfileFooter from "../features/profile/EditProfileFooter.tsx";
function EditProfile() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderMob />
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <main className="w-full max-w-4xl mx-auto px-6 sm:px-6 lg:max-w-3hxl lg:mx-36 xl:max-w-6xl mxl:max-w-7xl mxl:mx-32 lxl:mx-50 xxl:max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-12 lg:gap-4 xl:gap-x-6 mxl:gap-x-4 xxl:grid-cols-24 xxl:gap-4">
            <h1 className="text-mh1 font-semibold mt-5 md:col-span-2 lg:col-span-12 xxl:col-span-24">
              <span className="text-darkerBlue-50">My Profile</span> {">"}{" "}
              Profile Edit
            </h1>
            <EditProfilePersonal />
            <EditProfileAddress />
            <EditProfileContact />
            <EditProfileRegisteredPlayer />
            <EditProfileFooter />
          </div>
          <br />
          <br />
          <br />
          <br className="md:hidden" />
          <br className="md:hidden" />
          <div className="lg:hidden">
            <Navigation />
          </div>
        </main>
      </div>
    </>
  );
}

export default EditProfile;
