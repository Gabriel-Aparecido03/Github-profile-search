import { useEffect, useState } from 'react'

import './style.css'

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { api } from './services/api'
import { UserContainer } from './components/UserContainer'

import githubImage from './assets/25231.png'

interface TypeUser {
  name:string,
  following:number,
  followers:number,
  public_repos:string,
  avatar_url:string,
  bio:string,
  html_url:string
}

export function App() {
  
  const [user,setUser] = useState<TypeUser>()
  const [devTyped,setDevTyped] = useState<string>('')

  useEffect(()=>{
    api.get('/Gabriel-Aparecido03')
      .then((response)=>{
        if(response.status === 200) {
          const { name,followers,following,public_repos,avatar_url,bio,html_url} = response.data
          setUser({
            name,
            followers,
            following,
            public_repos,
            avatar_url,
            bio,
            html_url
          })
        }
      })
  },[])
  
  function findDev(e:any) {
    e.preventDefault()
    setDevTyped('')
    api.get(`${devTyped}`).then((response)=>{
      if(response.status === 200) {
        const { name,followers,following,public_repos,avatar_url,bio,html_url} = response.data
          setUser({
            name,
            followers,
            following,
            public_repos,
            avatar_url,
            bio,
            html_url
          })
      }
    })
  }

  return (
    <div className="App">
      <div className="title-content">
        
      <h1 id='title'>Find Github Profile !</h1>
      </div>
      <div className="container">
        <div>
          <form onSubmit={findDev}>
            <input type="text" className='input' onChange={e=>setDevTyped(e.target.value)} value={devTyped}/>
            <button type='submit' className='button'>Procurar</button>
          </form>
        </div>
        <div>
          <UserContainer name={user?.name} followers={user?.followers} following={user?.following} avatar_url={user?.avatar_url} bio={user?.bio} public_repos={user?.public_repos} html_url={user?.html_url}/>
        </div>
      </div>
    </div>
  )
}

