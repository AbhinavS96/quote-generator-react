function Quote() {
  if (true) {
    return (
      <div className="container">
        <div className="quote-container">
          <i className="fas fa-quote-left"></i>
          <span className="quote"></span>
        </div>
        <div className="author-container">
          <span className="author"></span>
        </div>
        <div className="button-container">
          <button className="button-twitter" title="share">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="button-quote" title="new quote">
            New quote
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="loader"></div>;
  }
}

export default Quote;
