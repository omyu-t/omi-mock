import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Photoimage from './Photoimage.png';

class Check extends Component{
  
  render(){
    const imageData1 = this.props.location.state.imageData1;
    const imageData2 = this.props.location.state.imageData2;
    let preview1 = '';
    let preview2 = '';

    if(imageData1 != null) {

        preview1 = (
            <PhotoImage src={imageData1} alt="image1" />
        )

    } else {

        preview1 = (
            <NullPhotoImage src={Photoimage} alt="image1" />
        )

    }

    if(imageData2 != null) {

        preview2 = (
            <PhotoImage src={imageData2} alt="image2" />
        )

    } else {

        preview2 = (
            <NullPhotoImage src={Photoimage} alt="image2" />
        )

    }

    return(
      <div>
        <Message>内容にお間違いなければ、<br/>登録ボタンを押して下さい。</Message>
        <hr size="2" width="100%" color="1C66E6" noshade="true"/>
        <Text><Point></Point>郵便番号</Text>
        <UserInfo>103-0011</UserInfo>
        <Text><Point></Point>住所</Text>
        <UserInfo>東京都中央区日本橋<br/>大伝馬町１２－１２</UserInfo>
        <Text><Point></Point>携帯番号</Text>
        <UserInfo>999-9999-9999</UserInfo>
        <Text><Point></Point>ご自宅電話番号</Text>
        <UserInfo>登録無し</UserInfo>
        <Text><Point></Point>携帯アドレス</Text>
        <UserInfo>登録済み</UserInfo>
        <Text><Point></Point>本人確認資料</Text>
        <PreviewWrapper>
          <PreviewText>写真・表</PreviewText>
          {preview1}
        </PreviewWrapper>
        <PreviewWrapper>
          <PreviewText>写真・裏</PreviewText>
          {preview2}
        </PreviewWrapper>
        <ButtonWrapper>
          <Button>登録</Button>
        </ButtonWrapper>
      </div>
    )
  }
}

const Message = styled.p`
margin: 8px;
font-size: 25px;
font-weight: 700;
text-align: center;
`

const Point = styled.div`
width: 10px;
height: 10px;
margin: 14px;
background-color: #0070C0;
border-radius: 50%;
float: left;
`

const Text = styled.p`
width: 90%;
margin: 0 auto;
font-size: 25px;
`

const UserInfo = styled.p`
width: 70%;
margin: 0 0 30px 30%;
font-size: 25px;
`
const PreviewWrapper = styled.div`
width: 90%;
height: 160px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`

const PreviewText = styled.p`
font-size: 22px;
align-self: center;
margin-left: 40px;
`

const PhotoImage = styled.img`
width: 60%;
height: 140px;
`

const NullPhotoImage = styled.img`
width: 60%;
height: 140px;
background-color: #BFBFBF;
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

export default withRouter(Check);