import Player from "../../components/ui/Player";

function JoinModalPlayers() {
  return (
    <>
      <div className="col-span-8 mt-7 md:mt-5">
        <p className="text-mh3">Players</p>
        <div className="flex flex-row gap-4 mt-2.5 overflow-x-auto pt-1">
          <Player playerName="Davor" isLeader={true} />
          <Player playerName="Lovro" />
          <Player playerName="Ivana" />
          <Player playerName="Anja" />
        </div>
      </div>
    </>
  );
}

export default JoinModalPlayers;
