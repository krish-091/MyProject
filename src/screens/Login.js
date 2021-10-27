import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pswrd: '',
   
    };
    // const {navigation} = props;
    // this.didFocusListener = navigation.addListener(
    //   'focus',
    //   this.componentDidFocus,
    // );
  }

  onnext = () => {
    console.log('::', this.state.email);
    console.log('::', this.state.pswrd);
    if(this.state.email===''){
      alert('Please enter the email')
    }
    else if(this.state.pswrd===''){
      alert('Please enter the Password')
    }
    else{
      //navigation o next screen without passing value
      // this.props.navigation.navigate('home')
      //passing value to next screen through navigation
      this.props.navigation.navigate('home', {
        email: this.state.email,
        password: this.state.pswrd,
        //keyname: value to be passed
      });

    }
  };
 
  render() {
    return (
      <View
        style={{
          flex: 1,
        
          backgroundColor: 'skyblue',

        }}>
        <Image source={require('../Images/google-logo-png.png')}
          style={{ height: 70, width: 70, marginTop: '20%',alignSelf:'center', }}
        />

        <View style={{
          flex:1,
          justifyContent:"flex-end",
          alignItems:'center',

        }}>

          <TextInput
            style={{
              width: '90%',
              height: 45,
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              fontStyle: 'italic',
              borderWidth: 1,
              borderColor: 'black',
              marginVertical: 10,
              backgroundColor: 'white',

            }}
            placeholder={'Email'}
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
          />

          <TextInput
            style={{
              width: '90%',
              height: 45,
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              fontStyle: 'italic',
              borderWidth: 1,
              borderColor: 'black',
              marginVertical: 10,
              backgroundColor: 'white',
            }}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => this.setState({ pswrd: text })}
          />

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
              width: '90%',
            marginVertical: 10,
            marginBottom: 80,

            }}
            onPress={this.onnext}>
            <Text style={{color:'blue'}}>LOGIN</Text>
          </TouchableOpacity>



        </View>

      </View>
    );
  }
}
