import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: require('../Images/facebook.png'),
      name: '',
      dummy: '',
    };
    const {navigation} = props;
    this.didFocusListener = navigation.addListener(
      'focus',
      this.componentDidFocus,
    );
  }
  componentDidMount() {
    // it runs only once when screen rendered first time
  }
  componentDidFocus = () => {
    // it runs each time screen is opened
  };
  componentDidUpdate() {
    // it runs when any value on screen is updated
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <Image
          source={this.state.profileImage}
          style={{height: 100, width: 100,margin: 40, borderRadius:50,}}
        />
      

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: '90%',
            marginVertical:350,
          }}>
          <Text>Back to login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
