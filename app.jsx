let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = ({players}) => {
  return (
    <div className="header">
      <table className="stats">
        <tr>
          <td>PLAYERS:</td>
          <td>3</td>
        </tr>
        <tr>
          <td>TOTAL POINTS:</td>
          <td>108</td>
        </tr>
      </table>
      <div className="stopwatch">
        <h2>STOPWATH</h2>
        <h1 className="stopwatch-time">0</h1>
        <button>START</button>
        <button>RESET</button>
      </div>
    </div>
  );
}


const PlayerList = ({players}) => {
  return (
    <div className="player">
      <div className="player-name">Jim Hoskins</div>
      <div className="player-score counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">31</span>
        <button className="counter-action increment">+</button>
      </div>
    </div>
  );
}


const PlayerForm= () =>{
  return (
    <div className='add-player-form'>
    <form>
      <input type="text" placeholder='ENTER A NAME'/>
      <input type="submit" value='add player' />
    </form>
  </div>
  );
}

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players}/>
      <PlayerForm /> 
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={players} />, document.getElementById('container'));