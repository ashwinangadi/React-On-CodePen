class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quotes: null,
        random: null,
        color: [
          "#233d4d",
          "#fe7f2d",
          "#9f86c0",
          "#a1c181",
          "#619b8a",
          "#5e60ce",
          "#aa609d"
        ]
      };
      this.getRandomInt = this.getRandomInt.bind(this);
    }
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    componentDidMount() {
      fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState((state) => ({
            quotes: data.quotes,
            random: this.getRandomInt(data.quotes.length)
          }));
          console.log(this.state);
        });
      console.log(this.state);
    }
  
    hosaQuote() {
      this.setState((state) => ({
        random: this.getRandomInt(state.quotes.length)
      }));
    }
  
    render() {
      const { quotes, random } = this.state;
      var tweetUrl;
      let bgColor = this.state.color[this.getRandomInt(this.state.color.length)];
      console.log(bgColor);
      tweetUrl = encodeURI(
        `https://twitter.com/intent/tweet?text=${
          quotes && quotes[random].quote
        } - ${quotes && quotes[random].author}`
      );
      console.log(tweetUrl);
      return (
        <div
          className="main container-flex d-flex justify-content-center align-items-center"
          style={{ backgroundColor: bgColor }}
        >
          <div
            id="quote-box"
            className="bg-white container border border-1 rounded shadow-lg m-4"
          >
            <div
              id="text"
              className="h-50 p-5 pb-1 d-flex justify-content-center align-items-center blockquote fst-italic"
              style={{ color: bgColor }}
            >
              {quotes && quotes[random].quote}
            </div>
  
            <div
              id="author"
              className="me-5 pe-5 text-end blockquote-footer "
              style={{ color: bgColor }}
            >
              {quotes && quotes[random].author}
            </div>
            <div class="m-2 my-4 d-flex justify-content-between align-items-center">
              <a
                href={tweetUrl}
                target="_top"
                id="tweet-quote"
                className=" btn btn-primary btn-sm ms-4 border border-0"
                style={{ backgroundColor: bgColor }}
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <button
                id="new-quote"
                className="btn btn-primary btn-sm me-4 border border-0"
                onClick={this.hosaQuote.bind(this)}
                style={{ backgroundColor: bgColor }}
              >
                New-Quote
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("app"));