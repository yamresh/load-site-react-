import React, { Component } from "react";

import ShowResult from "./ShowResult";
import { getResults } from "./utils";
export default class WebSiteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      results: ""
    };
  }

  handleChange = async event => {
    const search_query = event.target.value;
    /* eslint-disable */
    const reg_exUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    /* eslint-enable */

    const url = reg_exUrl.exec(search_query);
    console.log("url ", url);
    const results = await getResults(url && url[0]);

    this.setState({ results: results, searched: true });
    try {
    } catch {
      console.log("err in url");
    }
  };
  searchAgain = () => {
    this.setState({ results: {}, searched: false });
  };
  render() {
    const { searched, results } = this.state;
    return (
      <div>
        Checkout your website :
        <input
          className={"search-bar"}
          type="text"
          onBlur={this.handleChange}
          onFocus={this.searchAgain}
        />
        {searched && <ShowResult searched={searched} results={results} />}
      </div>
    );
  }
}
