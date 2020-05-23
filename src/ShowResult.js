import React, { Component } from "react";

export default class ShowResult extends Component {
  render() {
    const { searched, results } = this.props;
    console.table(":resultts ", results);
    return (
      <>
        {searched ? (
          <div className="search_results">
            <img
              src={results && results.image}
              alt={results && results.title}
            />
            <h2> {results && results.title}</h2>
            <p> {results && results.desc}</p>
          </div>
        ) : (
          <p> Nothing found </p>
        )}
      </>
    );
  }
}
