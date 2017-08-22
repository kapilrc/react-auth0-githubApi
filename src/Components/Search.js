import React, { Component } from "react";



class Search extends Component {
  submitForm(e) {
    e.preventDefault();
    let val = this.refs.username.value;
    this.props.searchProfile(val);
    this.refs.username.value = '';
  }
  
  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.submitForm.bind(this)}>
          <label ><input type="search" ref="username" placeholder="enter username" /></label>
        </form>
        
      </div>
    );
  }
}

export default Search;