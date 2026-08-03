import Logo from "../assets/BBLogo.svg";
import { NavLink } from "react-router";
import HeaderMob from "../components/Header.tsx";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderMob />
        <section>
          <h1>Bowling Center</h1>
        </section>
        <section>
          <h1>Next Free Slot</h1>
        </section>
        <section>
          <h1>Open Join</h1>
        </section>
        <section>
          <h1>Achievements</h1>
        </section>
        <nav>
          <NavLink to="/">H</NavLink>
          <NavLink to="/bowlingalleys">B</NavLink>
          <NavLink to="/openjoin">O</NavLink>
          <NavLink to="/profile">P</NavLink>
        </nav>
      </div>
    </>
  );
}

export default Dashboard;
