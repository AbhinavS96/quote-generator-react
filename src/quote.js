import React, { Component } from "react";

class Quote extends Component {
  constructor() {
    super();
    this.state = { quote: "", author: "", quotes: [] };
  }
  newQuote = () => {
    let { text, author } =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({
      quote: text,
      author: author,
    });
  };
  componentDidMount() {
    // let quote = getQuotes();
    // console.log(quote);
    // this.setState({ quote: quote });
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        this.setState({
          quotes: quotes,
        });
        this.newQuote();
      });
  }
  tweetQuote = () => {
    let twitterURL = `https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`;
    window.open(twitterURL, "_blank");
  };
  render() {
    if (this.state.quote) {
      return (
        <div className="container">
          <div className="quote-container">
            <i className="fas fa-quote-left"></i>
            <span className="quote">{this.state.quote}</span>
          </div>
          <div className="author-container">
            <span className="author">{this.state.author}</span>
          </div>
          <div className="button-container">
            <button
              className="button-twitter"
              title="share"
              onClick={this.tweetQuote}
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="button-quote"
              title="new quote"
              onClick={this.newQuote}
            >
              New quote
            </button>
          </div>
        </div>
      );
    } else {
      return <div className="loader"></div>;
    }
  }
}

export default Quote;
