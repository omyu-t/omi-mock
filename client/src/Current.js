import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Current extends Component{
  render(){
    return(
      <div>
        <Message>
          現状の登録内容です。<br></br>
          お間違いなければ暗証番号を入力し、<br></br>
          「次へ」をタップしてお進みください。
        </Message>
        <hr size="2" width="100%" color="1C66E6" noshade="true"/>
        <Table>
          <TR>
            <TD><Point></Point>お名前</TD>
            <TD>三菱太郎</TD>
          </TR>
          <TR>
            <TD><Point></Point>生年月日</TD>
            <TD>1919年8月15日</TD>
          </TR>
          <TR>
            <TD><Point></Point>店番</TD>
            <TD>001</TD>
          </TR>
          <TR>
            <TD><Point></Point>店名</TD>
            <TD>本店</TD>
          </TR>
          <TR>
            <TD><Point></Point>口座番号</TD>
            <TD>1234567</TD>
          </TR>
          <TR>
            <TD><Point></Point>暗証番号</TD>
            <TD><Password type="password"></Password></TD>
          </TR>
        </Table>
        <ButtonWrapper>
          <Link to='/Change'><Button>次へ</Button></Link>
        </ButtonWrapper>
      </div>
    )
  }
}


const Message = styled.p`
margin: 8px;
font-size: 20px;
font-weight: 700;
text-align: center;
`

const Table = styled.table`
width: 85%;
margin: 25px auto;
align-self: center;
border-collapse: separate;
border-spacing: 8px 15px;
`

const Point = styled.div`
width: 10px;
height: 10px;
margin: 12px;
background-color: #0070C0;
border-radius: 50%;
float: left;
`

const TR = styled.tr`
height: 30px;
line-height: 34px;
`

const TD = styled.td`
height: 30px;
padding-left: 10px;
font-size: 20px;
`

const Password = styled.input`
width: 70%;
height: 40px;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const ButtonWrapper = styled.div`
text-align: center;
`

const Button = styled.button`
height: 50px;
width: 50%;
font-size: 30px;
border-radius: 25px 25px;
margin-top: 10px;
color: white;
background-color: #0070C0;
box-shadow: 0px 2px 4px #A4A4A4;
vertical-align: middle;
`

export default Current;