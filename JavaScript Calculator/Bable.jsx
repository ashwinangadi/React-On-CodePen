// switch (input) {
//   case "/":
//     if (
//       ["/","x"].includes(this.state.display[this.state.display.length - 2]) &&
//       ["-"].includes(this.state.display[this.state.display.length - 1])
//     ) {
//       console.log("ghgg")
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 2) +
//           input
//       });
//     } else if (
//       ["/", "x", "+", "-"].includes(
//         this.state.display[this.state.display.length - 1]
//       )
//     ) {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 1) +
//           input
//       });
//     } /*else {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 1) +
//           input
//       });
//     }*/
//     break;
//   case "x":
//     if (
//       ["/", "x"].includes(this.state.display[this.state.display.length - 2]) &&
//       ["-"].includes(this.state.display[this.state.display.length - 1])
//     ) {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 2) +
//           input
//       });
//     } else if (
//       ["x", "/", "+"].includes(
//         this.state.display[this.state.display.length - 1]
//       )
//     ) {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 1) +
//           input
//       });
//     }
//     break;
//   case "+":
//     if (
//       ["x", "/", "+"].includes(
//         this.state.display[this.state.display.length - 1]
//       )
//     ) {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 1) +
//           input
//       });
//     }
//     break;
//   case "-":
//     if (
//       ["-"].includes(
//         this.state.display[this.state.display.length - 1]
//       )
//     ) {
//       this.setState({
//         display:
//           this.state.display.substring(0, this.state.display.length - 1) +
//           input
//       });
//     }
//     break;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      display: "0"
    };
    this.clicked = this.clicked.bind(this);
    this.operatorInput = this.operatorInput.bind(this);
    this.numberInput = this.numberInput.bind(this);
    this.calculateExp = this.calculateExp.bind(this);
  }

  clicked = (event) => {
    const { display } = this.state;
    const { outerText } = event.target;

    switch (true) {
      case ["/", "x", "+", "-"].includes(outerText):
        this.operatorInput(outerText);
        break;
      case !isNaN(outerText) || outerText == ".":
        console.log("number case");
        this.numberInput(outerText);
        break;
      case outerText === "=":
        this.setState({
          display: this.calculateExp(this.state.expression)
        });
      case outerText === "AC":
        this.setState({
          display: "0"
        });
        break;
    }
  };
  operatorInput(input) {
    console.log("-----operator input---------");
    if (this.state.display === "0") {
      console.log("in 0", input);
      this.setState({
        display: input
      });
    } else {
      switch (true) {
        case ["+", "-", "/", "x", "."].includes(
          this.state.display[this.state.display.length - 1]
        ):
          if (
            input === "-" &&
            ["/", "x"].includes(
              this.state.display[this.state.display.length - 1]
            ) &&
            this.state.display.length !== 1
          ) {
            this.setState({
              display: this.state.display + input
            });
          } else {
            if (
              this.state.display[this.state.display.length - 1] === "-" &&
              ["/", "x"].includes(
                this.state.display[this.state.display.length - 2]
              )
            ) {
              this.setState({
                display:
                  this.state.display.substring(
                    0,
                    this.state.display.length - 2
                  ) + input
              });
            } else {
              this.setState({
                display:
                  this.state.display.substring(
                    0,
                    this.state.display.length - 1
                  ) + input
              });
            }
          }

          break;
        default:
          this.setState({
            display: this.state.display + input
          });
      }
    }
  }
  numberInput(input) {
    console.log("-----number input---------");
    if (input === ".") {
      let exp = this.state.display.split(/[+\-/X]/g);
      console.log("in decimal exp", exp);
      if (this.state.display === "0") {
        this.setState({
          display: "0" + input
        });
      } else if (
        ["+", "-", "/", "x"].includes(
          this.state.display[this.state.display.length - 1]
        )
      ) {
        if (this.state.display.length === 1) {
          this.setState({
            display: "0" + input
          });
        } else {
          this.setState({
            display: this.state.display + "0" + input
          });
        }
      } else if (this.state.display[this.state.display.length - 1] === ".") {
        console.log("you fool, you cant add two decimals");
      } else if (exp[exp.length - 1].includes(".")) {
        console.log("you fool, you cant add two decimals");
      } else {
        this.setState({
          display: this.state.display + input
        });
      }
    } else {
      if (this.state.display === "0") {
        console.log("in 0", input);
        this.setState({
          display: input
        });
      } else if (
        ["/", "x", "+"].includes(
          this.state.display[this.state.display.length - 1]
        ) &&
        this.state.display.length === 1
      ) {
        this.setState({
          display:
            this.state.display.substring(0, this.state.display.length - 1) +
            input
        });
      } else {
        console.log("in numInput last else");
        this.setState({
          display: this.state.display + input
        });
      }
    }
  }
  calculateExp(input) {
    console.log("-----evalute = input---------");
  }

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
          {display}
          {console.log(display)}
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
