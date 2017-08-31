import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';

import allWords from './Paraules/Paraules.json'

class Screen1 extends Component {

  render() {

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Screen 1
        </Text>
      </View>
    );    
  }
}

class Screen2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      castella: '',
      catala: ''
    }; 
  }

  componentDidMount() {
  }

  validateInput(resposta) {
    if (this.state.text === this.state.catala) {
      Alert.alert('Correcte')
    } else {
      Alert.alert('Incorrecte')
    }
  }

  render() { 

    return (
      <View style ={{flex: 1, justifyContent: 'center',  padding: 50}}>        
        <Text>
          Com es diu en català...
        </Text>

        <Text>
          {this.castella}
        </Text>

        <Text>
          {this.catala}
        </Text>
        
        <TextInput 
          style={{height: 40}}
          placeholder='Type text here'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
        <Button
          onPress={() => this.validateInput()}
          title="Comprova!"
        />
      </View>
    );    
  } 
}

export class MainMenu extends Component {
  render() {

    return (
      <Text>
        El joc dels barbarismes
      </Text>
      
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : "MainMenu"
    };
  }

  render() {
    let toRender;

    if (this.state.screen === 'MainMenu') {
      toRender.push(<MainMenu />);
    } else {
      toRender.push(<PlayScreen />);
    }

    return(
      {toRender}
    );
  }  
}

AppRegistry.registerComponent('AwesomeProject', () => App);