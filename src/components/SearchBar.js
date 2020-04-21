import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Type something...' }; 

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onInputClick = () => {
        this.setState({ term: '' });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            onClick={this.onInputClick}
                        />
                    </div>
                </form>                
            </div>
        );
    }
}

export default SearchBar;