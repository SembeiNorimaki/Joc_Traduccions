import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';


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
    this.state = {text: ''};
  }

  validateInput(resposta) {
    if (this.state.text === resposta) {
      Alert.alert('Correcte')
    } else {
      Alert.alert('Incorrecte')
    }
  }

  render() {

    let paraula = 'Alfarero'
    let resposta = 'Terrissaire'

    return (
      <View style ={{flex: 1, justifyContent: 'center',  padding: 50}}>
        
        <Text>
          Com es diu en català...
        </Text>

        <Text>
          {paraula}
        </Text>
        
        <TextInput 
          style={{height: 40}}
          placeholder='Type text here'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
        <Button
          onPress={() => this.validateInput(resposta)}
          title="Comprova!"
        />
      </View>
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

    return (
      <Screen2 /> 
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);