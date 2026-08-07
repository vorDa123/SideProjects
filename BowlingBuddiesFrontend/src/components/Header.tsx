import Logo from "../assets/BBLogo.svg";

import type { HeaderProps } from "../types/Types.ts";

function HeaderMob({ showLogo = true }: HeaderProps) {
  return (
    <header className="flex flex-row gap-2 bg-lighterBlue-100 items-center justify-center rounded-bl-4xl rounded-br-4xl h-[21.4vh] lg:hidden">
      {showLogo ? (
        <>
          <img src={Logo} width={48} height={76} />
          <p className="text-white-100 font-medium text-3xl w-30">
            Bowling Buddies
          </p>
        </>
      ) : (
        <p></p>
      )}
    </header>
  );
}

export default HeaderMob;
