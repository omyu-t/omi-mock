import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class Change extends Component{
  constructor(props) {
    super(props);
    this.SendMail = this.SendMail.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      imageData1: null,
      imageData2: null
    }
  }

  SendMail() {
    window.open().location.href = 'mailto:sample@sample.com';
  }

  handleChange1(e) {
    const files = e.target.files

    if(files.length > 0) {

        var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {

            this.setState({ imageData1: e.target.result })
            
        };
        reader.readAsDataURL(file)
        
    } else {

        this.setState({ imageData1: null })
        
    }
  }

  handleChange2(e) {
    const files = e.target.files

    if(files.length > 0) {

        var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {

            this.setState({ imageData2: e.target.result })

        };
        reader.readAsDataURL(file)
        
    } else {

        this.setState({ imageData2: null })

    }
  }

  handleClick() {
    this.props.history.push({
      pathname: '/check',
      state: {
        imageData1: this.state.imageData1,
        imageData2: this.state.imageData2
      }
    })
  }

  render(){
    return(
      <Wrapper>
        <Message>変更内容を入力ください。</Message>
        <hr size="2" width="100%" color="1C66E6" noshade="true"/>
        <Text><Point></Point>郵便番号 (ハイフン不要)</Text>
        <PostInput></PostInput>
        <Text><Point></Point>住所</Text>
        <AddresInput></AddresInput>
        <Text><Point></Point>携帯番号</Text>
        <PhoneInput></PhoneInput>
        <Text><Point></Point>ご自宅電話番号</Text>
        <PhoneInput></PhoneInput>
        <Text><Point></Point>携帯アドレス</Text>
        <ButtonWrapper>
          <MailButton onClick={this.SendMail}>クリックして空メールを送信</MailButton>
        </ButtonWrapper>
        <AuthWrapper>
          <AuthMessage>受信メールに<br/>記載の番号を<br/>入力ください。</AuthMessage>
          <AuthNum></AuthNum>
        </AuthWrapper>
        <Text><Point></Point>本人確認資料WEB提出</Text>
        <Kome>※</Kome>
        <AuthLink>当行が認めている本人確認<br/>資料はコチラをご確認ください。</AuthLink>
        <ImageForm>
          <ImageDiv>
            <ImageText>表</ImageText>
            <ImageLabel>
              ファイルを選択
              <ImageUpload type="file" accept="image/*" onChange={ (e) => this.handleChange1(e) }/>
            </ImageLabel>
          </ImageDiv>
          <ImageDiv>
            <ImageText>裏</ImageText>
            <ImageLabel>
              ファイルを選択
              <ImageUpload type="file" accept="image/*" onChange={ (e) => this.handleChange2(e) }/>
            </ImageLabel>
          </ImageDiv>
        </ImageForm>
        <ButtonWrapper>
          <Button onClick={this.handleClick}>内容確認</Button>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

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
height: 38px;
margin: 0 auto;
font-size: 25px;
`

const PostInput = styled.input`
width: 40%;
height: 30px;
margin-top: 5px;
margin-left: calc(5% + 38px);
margin-bottom: 5px;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const AddresInput = styled.input`
width: 80%;
height: 90px;
margin-top: 5px;
margin-left: calc(5% + 38px);
margin-bottom: 5px;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const PhoneInput = styled.input`
width: 80%;
height: 40px;
margin-top: 5px;
margin-left: calc(5% + 38px);
margin-bottom: 5px;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const ButtonWrapper = styled.div`
text-align: center;
`

const MailButton = styled.button`
height: 50px;
width: 80%;
font-size: 20px;
font-weight: 900;
border: 2px solid #0070C0;
border-radius: 25px 25px;
color: #0070C0;
background-color: #B7ECFF;
box-shadow: 0px 2px 4px #A4A4A4;
`

const AuthWrapper = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-between;
`

const AuthMessage = styled.p`
width: 45%;
font-size: 20px;
`

const AuthNum = styled.input`
width: 50%;
height: 40px;
margin-top: 40px;
border: 1px solid #A4A4A4;
box-shadow: inset 2px 2px 6px #A4A4A4;
`

const Kome = styled.p`
font-size: 14px;
color: #0070C0;
float: left;
width: 10px;
height: 10px;
margin: 0 14px 20px calc(5% + 12px);
`

const AuthLink = styled.a`
color: #0070C0;
text-decoration: underline;
`

const ImageForm = styled.form`
width: 70%;
margin: 0 auto;
`

const ImageDiv = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
`

const ImageText = styled.p`
font-size: 25px;
margin: 10px 0;
`

const ImageLabel = styled.label`
display: inline-block;
width: 80%;
height: 40px;
line-height: 2;
font-size: 20px;
font-weight: 900;
text-align: center;
border: 2px solid #0070C0;
border-radius: 25px 25px;
color: #0070C0;
background-color: #B7ECFF;
box-shadow: 0px 2px 4px #A4A4A4;
align-self: center;
`

const ImageUpload = styled.input`
display: none;
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

export default withRouter(Change);