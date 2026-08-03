import Navigation from "../components/Navigation.tsx";
import HeaderMob from "../components/Header.tsx";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderMob />
        <main className="mx-auto my-0 w-[87vw] relative">
          <section className="pt-5 pb-2.5">
            <h1 className="text-mh1 font-semibold">Bowling Center</h1>
          </section>
          <section className="pt-2.5 pb-2.5">
            <h1 className="text-mh1 font-semibold">Next Free Slot</h1>
          </section>
          <section className="pt-2.5 pb-2.5">
            <h1 className="text-mh1 font-semibold">Open Join</h1>
          </section>
          <section className="pt-2.5 pb-2.5">
            <h1 className="text-mh1 font-semibold">Achievements</h1>
          </section>
          <Navigation />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
