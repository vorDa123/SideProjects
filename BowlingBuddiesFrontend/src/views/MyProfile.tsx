import Navigation from "../components/Navigation.tsx";
import ProfileDetails from "../components/ProfileDetails.tsx";
import MyReservationsSection from "../components/MyReservationsSection.tsx";
import AchievementsSection from "../components/AchievementsSection.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";

function MyProfile() {
  return (
    <>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="grid grid-cols-1 relative">
        <div className="lg:hidden">
          <ProfileHeader />
        </div>
        <main className="w-full max-w-4xl mx-auto mt-3 px-6 sm:px-6 lg:max-w-4hxl lg:mx-20 xl:mx-25 xl:max-w-6xl sxl:max-w-7hxl sxl:mx-25 lxl:mx-50 xxl:max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-3 lg:grid-cols-12 lg:gap-4 xl:gap-x-1 sxl:gap-x-4 xxl:grid-cols-24 xxl:gap-4">
            <section className="hidden lg:block lg:col-span-6 xl:col-span-7 xxl:col-span-16">
              <ProfileDetails />
              <AchievementsSection myProfilePage={true} />
            </section>
            <MyReservationsSection />
            <div className="md:col-span-2 lg:hidden">
              <AchievementsSection myProfilePage={true} />
            </div>
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

export default MyProfile;
