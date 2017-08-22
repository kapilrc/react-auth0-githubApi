import React, { Component } from "react";
import Profile from './Components/Profile';
import Search from './Components/Search';

const API = 'https://api.github.com/users'
class Github extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: 'kapilrc',
      name: '',
      repos: '',
      avatar: '',
      followers: '',
      following: '',
      htmlURL: ''
    }

  }

  getProfile(username) {
    let gitUrl= `${API}/${username}`

    fetch(gitUrl)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        username: data.login,
        name: data.name,
        repos: data.public_repos,
        avatar: data.avatar_url,
        followers: data.followers,
        following: data.following,
        htmlURL: data.html_url,
        message: data.message
      })
    }).catch(err => {
      console.log("there was a problem fetching data");
    })
  }

  componentDidMount() {
    this.getProfile(this.state.username);
  }

  render() {
    return (
      <div>
       <section id="card">
         <Search searchProfile={this.getProfile.bind(this)} />
         <Profile userData={this.state} />
       </section>
      </div>
    );
  }
}

export default Github;