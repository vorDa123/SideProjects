import Player from "../../components/ui/Player";
import type { ModalProps } from "../../types";

function BookModalPlayers(props: ModalProps) {
  const handleShowPlayerModal = () => {
    props.onAddPlayer?.();
  };
  return (
    <>
      <div className="col-span-8 mt-5">
        <p className="text-mh3">Players</p>
        <div className="flex flex-row gap-4 mt-2.5 overflow-x-auto pt-1">
          <Player playerName="Davor" isLeader={true} />
          <Player playerName="Lovro" />
          <Player playerName="Ivana" />
          <Player addPlayer={true} onClick={handleShowPlayerModal} />
        </div>
      </div>
    </>
  );
}

export default BookModalPlayers;
