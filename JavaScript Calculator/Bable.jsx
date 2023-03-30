class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0"
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked = (event) => {
    const { display } = this.state;
    const { outerText } = event.target;

    // switch (outerText) {
    //   case Number(outerText):
    //     numberInput();
    //     break;
    // }

    this.setState({
      display: display + outerText
    });

    //To reject first input as operator
    if (["+", "x", "/"].includes(display[1])) {
      this.setState({
        display: display.slice(1) + outerText
      });
    }

    //To clear display
    if (outerText == "AC") {
      this.setState({
        display: "0"
      });
    }
  };

  render() {
    const { display } = this.state;
    return (
      <div
        id="calC"
        className="row container d-flex justify-content-center p-1 bg-dark"
      >
        <div
          id="display1"
          className="container p-0 d-flex justify-content-end align-items-end text-light fs-3"
        >
          123
        </div>
        <div
          id="display"
          className="container p-0 d-flex justify-content-end align-items-end text-light fs-3"
        >
          {display.length == 1 && display == "0"
            ? display
            : display.substring(1)}
          {/*console.log(display)*/}
        </div>
        <div
          id="keypad"
          className="row container p-0 d-flex justify-content-center"
        >
          <div className="row container p-0">
            <div
              id="clear"
              className="col-6 rounded-0 outline btn btn-danger d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              AC
            </div>
            <div
              id="divide"
              className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              /
            </div>
            <div
              id="multiply"
              className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              x
            </div>
          </div>
          <div className="row container p-0">
            <div
              id="seven"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center "
              onClick={this.clicked}
            >
              7
            </div>
            <div
              id="eight"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              8
            </div>
            <div
              id="nine"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              9
            </div>
            <div
              id="subtract"
              className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              -
            </div>
            <div
              id="four"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              4
            </div>
            <div
              id="five"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              5
            </div>
            <div
              id="six"
              className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              6
            </div>
            <div
              id="add"
              className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              +
            </div>
          </div>
          <div className="d-inline-flex p-0 container">
            <div className="row container d-flex justify-content-center p-0 m-0">
              <div className="row container p-0">
                <div
                  id="one"
                  className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
                  onClick={this.clicked}
                >
                  1
                </div>
                <div
                  id="two"
                  className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
                  onClick={this.clicked}
                >
                  2
                </div>
                <div
                  id="three"
                  className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
                  onClick={this.clicked}
                >
                  3
                </div>
              </div>
              <div className="row container p-0">
                <div
                  id="zero"
                  className="col-8 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
                  onClick={this.clicked}
                >
                  0
                </div>
                <div
                  id="decimal"
                  className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center"
                  onClick={this.clicked}
                >
                  .
                </div>
              </div>
            </div>
            <div
              id="equals"
              className="col-3 rounded-0 outline btn-success d-flex justify-content-center align-items-center"
              onClick={this.clicked}
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
