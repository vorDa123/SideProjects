import Logo from "../assets/BBLogo.svg";
function HeaderMob() {
  return (
    <header className="flex flex-row gap-2 bg-lighterBlue-100 items-center justify-center rounded-bl-4xl rounded-br-4xl h-[21.4vh] md:hidden">
      <img src={Logo} width={48} height={76} />
      <p className="text-white-100 font-medium text-3xl w-30">
        Bowling Buddies
      </p>
    </header>
  );
}

export default HeaderMob;
