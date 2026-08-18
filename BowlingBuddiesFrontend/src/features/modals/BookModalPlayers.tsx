import Player from "../../components/ui/Player";

function BookModalPlayers() {
  return (
    <>
      <div className="col-span-8 mt-5">
        <p className="text-mh3">Players</p>
        <div className="grid grid-cols-4 gap-3 mt-2.5">
          <Player playerName="Davor" isLeader={true}/>
          <Player playerName="Lovro"/>
          <Player playerName="Ivana"/>
          <Player addPlayer={true}/>
        </div>
      </div>
    </>
  );
}

export default BookModalPlayers;
