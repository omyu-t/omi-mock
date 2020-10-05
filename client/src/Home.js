import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component{
  render(){
    return(
      <Wrapper>
        <Message>受付番号を入力ください。</Message>
        <NumInput></NumInput>
        <Link to='/current'><Button>次へ</Button></Link>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
text-align: center;
`

const Message = styled.p`
font-size: 25px;
font-weight: 700;
`

const NumInput = styled.input`
height: 50px;
width: 75%;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const Button = styled.button`
height: 50px;
width: 50%;
font-size: 30px;
border-radius: 25px 25px;
margin-top: 50px;
color: white;
background-color: #0070C0;
box-shadow: 0px 2px 4px #A4A4A4;
`

export default Home;