import Player from "../../components/ui/Player";
import type { ModalProps } from "../../types";

function JoinModalPlayers(props: ModalProps) {
  const players = props.joinSlotData?.joinedPlayers;
  return (
    <>
      <div className="col-span-8 mt-7 md:mt-5">
        <p className="text-mh3">Players</p>
        <div className="flex flex-row gap-4 mt-2.5 overflow-x-auto pt-1">
          {players?.map((player) => {
            return (
              <Player
                key={player.id}
                playerName={player.personalData.name}
                isLeader={player.leader}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default JoinModalPlayers;
