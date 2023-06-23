import React from 'react'
// import logo from "../images/logon.png"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from 'react-icons/fa'
import Type from "./Type"
import styled from 'styled-components';
const Home = () => {
  return (
    <DIV id="home" >
      <div className='home' >

        <div  >
          <h1>I am,</h1>
          <h1 id="user-detail-name">Akhilesh Takawale</h1>
          <h3 id="user-detail-intro"  >Aspiring<Type /></h3>
          <div id="" className='social'>
            <div  >
              <GoMarkGithub />
            </div>
            <div>
              <FaLinkedin />
            </div>

          </div>


        </div>
        <div className='borderimg' >
          <img src="https://camo.githubusercontent.com/a67096f5f1acc0b3c32597dbf7bdb857e308dd0f51825de811ab41119fbec95f/68747470733a2f2f692e67697068792e636f6d2f6d656469612f4c3152317476493973766b495777705659722f67697068792e77656270" />
        </div>

      </div>
    </DIV>
  )
}


const DIV = styled.div`

.home{
  display:flex;
  width:100%;
  margin:auto;
margin-top:10%;
justify-content:space-between;
gap:10%;
padding-bottom:10%

}
.home :nth-child(1)>h1{
font-size:38px;
margin-top:2%;
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:700
}
.home :nth-child(1)>h3{
font-size:2.5rem;
color:black;
margin-top:2%;
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:700
}

.social{
  display:flex;
  margin-top:4%;
  justify-content:space-evenly;
  align-items:center
}

.social> :nth-child(1){
 
 font-size: 35px;
  
}
.social> :nth-child(2){  
  font-size: 35px;
  border-radius:50%
}
.social>:nth-child(3){
  width:25%;
  border:3px solid black;
  border-radius:5%
}
.social> :nth-child(3)>div{
border:3px solid white;
  border-radius:5%;
  background-color:black;
  color:white;
  font-weight:700;
 height:7vh;
 width:100%;
 border-radius:5%

}
.social>div img{
 width:80%;
margin:auto
}
.social >:nth-child(3)>div> h1{

font-size:1.5rem;
margin:auto;
}

.borderimg{
  border-radius:23% 77% 69% 31% / 39% 24% 76% 61%   ;
  height:50vh;
  background-color:black
}
.borderimg>img{
margin:auto;
height:50vh

}
@media screen and (min-width: 950px) and (max-width:1050px){
  .home :nth-child(1)>h1{
    font-size:3rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem;
  }
}
@media screen and (min-width: 836px) and (max-width:1050px){
  .home :nth-child(1)>h1{
    font-size:2.6rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.2rem;
  }
}
@media screen and (min-width: 1051px) and (max-width:1200px){
  .home :nth-child(1)>h1{
    font-size:3.3rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem;
  }
}
@media screen and (max-width:836px){
  .home{
    display:flex;
    flex-direction:column;
    height:100vh;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem
  }
  .home :nth-child(1)>h3{
    font-size:2rem
  }

.borderimg{
  width:80%;
  margin:auto;

}
.borderimg>img{
  width:100%
}

}
`


export default Home
