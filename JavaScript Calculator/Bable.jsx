class App extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div id="calC" className="row container d-flex justify-content-center p-1 bg-dark">
          <div id="display" className="container p-0 d-flex justify-content-end align-items-end text-light fs-3">7895456</div>
          <div className="row container p-0">
            <div id="clear" className="col-6 rounded-0 outline btn btn-danger d-flex justify-content-center align-items-center">AC</div>
            <div id="divide" className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center">/</div>
            <div id="multiply" className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center">x</div>
          </div>
          <div className="row container p-0">
            <div id="seven" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center ">7</div>
            <div id="eight" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">8</div>
            <div id="nine" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">9</div>
            <div id="subtract" className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center">-</div>
            <div id="four" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">4</div>
            <div id="five" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">5</div>
            <div id="six" className="col-3 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">6</div>
            <div id="add" className="col-3 rounded-0 outline btn btn-secondary d-flex justify-content-center align-items-center">+</div>
          </div>
          <div className="d-inline-flex p-0 container">
            <div className="row container d-flex justify-content-center p-0 m-0">
              <div className="row container p-0">
                <div id="one" className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">1</div>
                <div id="two"className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">2</div>
                <div id="three" className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">3</div>
              </div>
              <div className="row container p-0">
                <div id="zero" className="col-8 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">0</div>
                <div id="decimal" className="col-4 rounded-0 outline btn btn-dark d-flex justify-content-center align-items-center">.</div>
              </div>
            </div>
            <div id="equals" className="col-3 rounded-0 outline btn-success d-flex justify-content-center align-items-center">=</div>
          </div>
        </div>
      )
    }
  }
  ReactDOM.render(<App/>,document.getElementById("app"))