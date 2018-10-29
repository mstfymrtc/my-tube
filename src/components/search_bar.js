import React, { Component } from 'react';

/*functional component
const SearchBar = () => {

    return <input />
 }
*/
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }
    render() {
        // return (<input onChange={this.handleInputChange} />)
        return (<div>
            <input
                //TODO:bi alttaki satırı yazmazsak, input'un valuesi değişmez.
                //Sadece event trigger etmiş oluruz.
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
        </div>)
    }

    /*
     event handle fonksiyonu:
     handleInputChange(event) {
         console.log(event.target.value)
 
     }
 */

}
export default SearchBar