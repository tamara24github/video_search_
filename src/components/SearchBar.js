import React from "react";

class SearchBar extends React.Component{
  state = {searchTerm: ""};

  onInputChange = (event)=>{
    this.setState({searchTerm: event.target.value})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTerm(this.state.searchTerm)
  };

  render(){
    return(
      <div className = "search -bar ui segment">
      <form
      className = "ui form"
      onSubmit = {this.onFormSubmit}
      >
      <div className = "field">
      <label>Video Search </label>
      <input
      type = "text"
      value = {this.state.searchTerm}
      onChange = {this.onInputChange}
      />
      </div>
      </form>
      </div>
    )
  }
}



export default SearchBar;
