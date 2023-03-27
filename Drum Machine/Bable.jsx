class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: null
      };
      this.clicked = this.clicked.bind(this);
      this.pressed = this.pressed.bind(this);
    }
  
    clicked = (e) => {
      let audioClip = e.target.children[0];
      this.setState({
        input: e.target.id
      });
      if (audioClip.currentTime != 0) {
        audioClip.currentTime = 0;
      }
      audioClip.play();
    };
  
    pressed(e) {
      let audioClip = document.getElementById(e.key.toUpperCase());
      this.setState({
        input: audioClip.parentElement.id
      });
      if (audioClip.currentTime != 0) {
        audioClip.currentTime = 0;
      }
      audioClip.play();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.pressed);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.pressed);
    }
  
    render() {
      return (
        <div
          id="drum-machine"
          className="row container d-inline-flex justify-content-center align-items-center rounded py-4"
        >
          <div
            id="drum-machine-buttons"
            className="col-6 row container d-inline-flex justify-content-center align-items-center m-2 p-2 "
          >
            <div
              id="Heater 1"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              Q
            </div>
            <div
              id="Heater 2"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
              W
            </div>
            <div
              id="Heater 3"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
              E
            </div>
  
            <div
              id="Heater 4"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
              A
            </div>
            <div
              id="Clap"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
              S
            </div>
            <div
              id="Open-HH"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
              D
            </div>
            <div
              id="Kick-n'-Hat"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
              Z
            </div>
            <div
              id="Kick"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              X
            </div>
            <div
              id="Closed-HH"
              className="col-3 drum-pad m-1 text-center text-light btn"
              onClick={this.clicked}
            >
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
              C
            </div>
          </div>
          <div id="display" className="col-5 text-center  rounded-2 ">
            {this.state.input}
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("app"));
  