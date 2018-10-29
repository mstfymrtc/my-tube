import React, { Component } from "react";

/*functional component
const SearchBar = () => {

    return <input />
 }
*/
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          //TODO:bi alttaki satırı yazmazsak, input'un valuesi değişmez.
          //Sadece event trigger etmiş oluruz.
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
