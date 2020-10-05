import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import img from './iseto.png';
import Home from './Home';
import Current from './Current';
import Change from './Change';
import Check from './Check';
import Login from './Login';
import firebase from './firebase';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: null,
      loding: true,
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loding:false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loding: false
        });
      }
    });
  }



  render() {
    const { authenticated, loding } = this.state;
    if(loding) return <p>loding...</p>
    return(
      <BrowserRouter>
        <Wrapper>
          <Img src={img} alt="Logo" />
          <TitleBar>
          <Title>登録内容変更フォーム</Title>
          </TitleBar>
          <hr size="10" width="100%" color="1C66E6" noshade="true"/>

          <Route exact path="/" render={() => 
            authenticated === true ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            )
          } 
          />
          <Route path="/login" render={() =>
            authenticated === false ? (
              <Login />
            ) : (
              <Redirect to="/" />
            )
          } 
          />
          <Route path="/current" render={() =>
            this.state.authenticated === true ? (
              <Current />
            ) : (
              <Redirect to="/login" />
            )
          } 
          />
          <Route path="/change" render={() => 
            this.state.authenticated === true ? (
              <Change />
            ) : (
              <Redirect to="/login" />
            )
          } 
          />
          <Route path="/check" render={() => 
            this.state.authenticated === true ? (
              <Check />
            ) : (
              <Redirect to="/login" />
            )
          } 
          />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

/*
const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Img src={img} alt="Logo" />
      <Form>
      <Title>登録内容変更フォーム</Title>
      </Form>
      <hr size="10" width="100%" color="1C66E6" noshade="true"/>

      <Route exact path='/' component={Home} />
      <Route path='/current' component={Current} />
      <Route path='/change' component={Change} />
      <Route path='/check' component={Check} />
    </Wrapper>
  </BrowserRouter>
)
*/


const Wrapper = styled.div`
  width: 400px;
  padding-bottom: 50px;
  border: 1px solid #5DA5D7;
`

const Img = styled.img`
  width: 100%;
`

const TitleBar = styled.div`
  width: 100%;
  height: 54px;
  margin-top: 4px;
  background: #1C66E6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 33px;
  color: #FFFFFF;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`

export default App;
