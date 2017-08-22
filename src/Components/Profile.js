import React, { Component } from "react";

//userData

class Profile extends Component {

  render() {

    let userdata = this.props.userData;
    let followers = `${userdata.htmlURL}/followers`;
    let following = `${userdata.htmlURL}/following`;
    let repos = `${userdata.htmlURL}/repos`;
    let view;

    if(userdata.message === "Not Found"){
      view = <div className="notfound">
        <h2>user not found</h2>
      </div>
    }else {
      view = <section className="github-profile">
          <div className="github-profile-info">
            <a href={userdata.htmlURL} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} /></a>
            <h2><a href={userdata.htmlURL} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
               <li>
                  <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
               </li>
               <li>
                  <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata.repos}</i><span>Repositoriy</span></a>
               </li>
               <li>
                  <a href={following} target="_blank" title="Number Of Following"><i>{userdata.following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>
        </section>
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default Profile;