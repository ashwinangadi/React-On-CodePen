marked.setOptions({
    breaks: true
  });
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input:
          "# Heading 1 \n ## Heading 2 \n [link](http://www.google.com) \n `inline code` \n ``` \n code block \n ``` \n 1. First item \n2. Second item \n3. Third item \n\n >blockquote \n\n ![alt text](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) \n\n **bold text** "
      };
    }
  
    handleChange = (event) => {
      this.setState({
        input: event.target.value
      });
    };
    render() {
      return (
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-10 card p-0 border-0 shadow-lg rounded">
            <div className="card-header bg-secondary fs-4 fst-italic text-light fw-semibold">
              Editor
            </div>
            <div className=" card-body p-0 ">
              <textarea
                className="form-control border-0"
                id="editor"
                value={this.state.input}
                onChange={this.handleChange}
                style={{ height: 300 }}
              />
            </div>
          </div>
          <div className="col-12 card p-0 my-5 border-0 shadow-lg rounded">
            <div className="card-header bg-secondary fs-4 fst-italic text-light fw-semibold">
              Previewer
            </div>
            <div
              class="card-body"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked.parse(this.state.input) }}
            ></div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));