import React from 'react'

import './style.css'

import notFoundImage from '../../assets/6373669.jpg'

interface TypePropsUserContainer {
    name:string | undefined,
    following:number | undefined,
    followers:number | undefined,
    public_repos:string | undefined,
    avatar_url:string | undefined,
    bio:string | undefined,
    html_url:string | undefined
}

export function UserContainer({name,followers,following,public_repos,avatar_url,bio,html_url}:TypePropsUserContainer) {
    return (
        <>
          {name ? <div id="UserContainer">
          
          <div className="photo-content">
          <img src={avatar_url} alt="" />
        </div>
        <div className="infos-content">
          <h1>{name}</h1>
          <a href={html_url} target="_blank">Visited this dev</a>
          <div className="outher-infos">
            <ul className='list-infos'>
              <li className='infos'>Followers: {followers}</li>
              <li className='infos'>Following: {following}</li>
              <li className='infos'>Public Repos: {public_repos}</li>
              <li className='infos'>Bio: {bio}</li>
            </ul>
          </div>
        </div>
          
        </div>:
        <div className='not-found-content'>
          <h1>I'm sorry i cant find this dev,try again ! </h1>
          <img src={notFoundImage} alt="" />
        </div>
        }
        </>
    )
}