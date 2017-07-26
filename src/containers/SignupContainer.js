import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import styled from 'styled-components/native';
import {login}  from "../lib/netlify-api.js";

const StyledText = styled.Text`
  font-size: 65;
  text-align: center;
  color: #00C7B7;
`;

const Wrapper = styled.View`
  padding: 55;
`;

export default class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {loginError: null};
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(provider) {
    return (event) => {
      event.preventDefault();
      login().then((res) => console.log(res.data));
    };
  }

  logout() {
    console.log("logout")
  }

  render() {
    const {user} = this.props;

    return !user ?
      <Wrapper>
        <StyledText>
          Netlify
        </StyledText>
        <Button onPress={this.onLogin("github")} title="GitHub" />
        <Button onPress={this.onLogin("gitlab")} title="GitLab" />
        <Button onPress={this.onLogin("bitbucket")} title="BitBucket" />
        <Button onPress={this.onLogin("email")} title="sign up with email" />
      </Wrapper>
      : <div>You are logged in</div>;
  }
}
