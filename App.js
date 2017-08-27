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
    this.state = {
      text: ''
    };

    this.castella = '--';
    this.catala = '--';

    //this.componentDidMount = this.componentDidMount.bind(this);
     
  }

  componentDidMount() {
    let AllParaules = require('.Paraules/Paraules.json');
    let AllCastella = Object.keys(AllParaules[0]);

    // here the index must be randomly generated
    // setting the state using previous state is required here to ensure
    // sync updating
    this.castella = AllCastella[1];
    this.catala = AllParaules[0][this.castella];
    // does not update on time
    this.render();
  }

  validateInput(resposta) {
    if (this.state.text === this.catala) {
      Alert.alert('Correcte')
    } else {
      Alert.alert('Incorrecte')
    }
  }

  

  render() {

    
    console.log(this.castella);
    console.log(this.catala);

    return (
      <View style ={{flex: 1, justifyContent: 'center',  padding: 50}}>
        
        <Text>
          Com es diu en català...
        </Text>

        <Text>
          {this.castella}
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