import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StatusBar, SafeAreaView, Alert, Modal, TextInput } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myEmail: this.props.route.params.email,
      myPassword: this.props.route.params.password,
      isModalVisible: false,
      isAdd:false,
      title: '',
      location: '',
      index: 0,
      flatData: [
        {
          id: 1,
          title: "Cup Of Coffee Anyone?",
          location: 'Hanoi, Vietnam',
          image: 'https://picsum.photos/id/235/200'
        },
        {
          id: 2,
          title: "48 hours In Copenhagen",
          location: 'Copenhagen,Denmark',
          image: 'https://picsum.photos/id/236/200'
          
        },
        {
          id: 3,
          title: "5 Hours In Paradise",
          location: 'Lord Howe Island,Austrslia',
          image: 'https://picsum.photos/id/237/200'
        }, {
          id: 4,
          title: "Coffe Shop In Paradise Island",
          location: 'Bali, Indonesia',
          image: 'https://picsum.photos/id/238/200'
        }, {
          id: 5,
          title: "Moab,Utah",
          location: 'Moab,UT,United States',
          image: 'https://picsum.photos/id/239/200'
        }, {
          id:6,
          title: "Love To Work From",
          location: 'Sydney,Australia',
          image: 'https://picsum.photos/id/240/200'
        }, {
          id: 7,
          title: "Breakfast In Vienna",
          location: 'Vienna,Austria',
          image: 'https://picsum.photos/id/241/200'
        },
        {
          id: 8,
          title: "A Barista's Guide To Chicago's Coffee",
          location: 'Vienna,Austria',
          image: 'https://picsum.photos/id/1/200' //key vlue pair
        },
        {
          id: 9,
          title: "Moab,Utah",
          location: 'Moab,UT,United States',
          image: 'https://picsum.photos/id/244/200'
        }, {
          id: 10,
          title: "Love To Work From",
          location: 'Sydney,Australia',
          image: 'https://picsum.photos/id/243/200'
        }, {
          id: 11,
          title: "Breakfast In Vienna",
          location: 'Vienna,Austria',
          image: 'https://picsum.photos/id/242/200'
        },
        {
          id: 12,
          title: "A Barista's Coffee",
          location: 'Vienna,Austria',
          image: 'https://picsum.photos/id/2/200' //key vlue pair
        },
      ],
    };
  }
  // this.props.route.params.keyName,
  onnext = () => {
    console.log('next pressed');
    this.props.navigation.navigate('Profile');
  };

  deleteAlert(item) {
    Alert.alert(
      "Delete!",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancle Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.onConfirmDelete(item) }
      ]
    );
  }

  onConfirmDelete(item) {
    const a = this.state.flatData.filter((data) => {
      return data.id != item.id
    })
    this.setState({ flatData: a })
    console.log('merge', a)
  }

  onEdit(item, index) {
    this.setState({ isModalVisible: true, index: index, title: item.title, location: item.location })
  }
  onUpdate() {
    this.state.flatData[this.state.index].title = this.state.title
    this.state.flatData[this.state.index].location = this.state.location
    this.setState({
      title: '',
      location: ''
    })
    this.setState({ isModalVisible: false })
  }

  onAdd() {
    const len=this.state.flatData.length-1
    let obj = {
      id: this.state.flatData[len].id+1,
      image: 'https://picsum.photos/200',
      title: this.state.title,
      location: this.state.location
    }
    console.log('my Add',obj)
    this.state.flatData.push(obj)
    this.setState({
      title: '',
      location: '',
      isAdd:false
    })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle={'dark-content'} />
        <SafeAreaView style={{ backgroundColor: "white", height: StatusBar.currentHeight }} />
        {/* to get value through navigation */}
        {/* <Text>{this.props.route.params.email}</Text>
        <Text>{this.state.myPassword}</Text>
        <View style={{
          height: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}> */}
        <FlatList
          data={this.state.flatData}
          // ItemSeparatorComponent={()=>
          //   <View style={{height:1,backgroundColor:'black'}}/>
          // }
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{
              flexDirection: 'row',
              marginTop: 12, borderWidth: 0.5, borderColor: 'gray', borderRadius: 20, width: "95%",
              padding: 8, alignSelf: "center",
              marginBottom:index<this.state.flatData.length-1?0:80
              
            }}>
              <View style={{ width: '10%', marginHorizontal: 20 }}>
                <Image style={{ height: 70, width: 70 }}
                resizeMode={'contain'}
                  source={{ uri: item.image }} />
              </View>
              <View style={{ width: '50%', marginHorizontal: 30 }}>
                <Text style={{ fontSize: 14, color: "black" }}>{item.title}</Text>
                <Text style={{ fontSize: 12, color: "gray", marginVertical: 4 }}>{item.location}</Text>
              </View>

              <View style={{ width: '10%', justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => this.onEdit(item, index)}>
                  <Image style={{ height: 20, width: 20 }}
                    source={require('../Images/editing.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteAlert(item)}>
                  <Image style={{ height: 20, width: 20 }}
                    source={require('../Images/delete.png')} />
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          )}
        />
        {/* </View> */}
        {/* <Text style={{ height: 50, backgroundColor: 'yellow', width: 50, }}>{this.state.flatData[0].title}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: '90%',
          }}
          onPress={this.onnext}>
          <Text>Go to Profile Screen</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={{ position: "absolute", right: 20, bottom: 20, backgroundColor: "white" }}
        onPress={()=>this.setState({isAdd:true})}>
          <Image style={{ height: 50, width: 50 }}
            resizeMode={'contain'}
            source={require('../Images/add.png')} />
        </TouchableOpacity>
        {/* Update Data Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isModalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            this.setState({ isModalVisible: false });
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


            <TextInput
            placeholder={'Title'}
              style={{ width: '90%', height: 50, borderRadius: 20, borderColor: "gray", borderWidth: 0.5 }}
              value={this.state.title}
              onChangeText={(text) => this.setState({ title: text })} />
            <TextInput
            placeholder={'location'}
              value={this.state.location}
              style={{ width: '90%', height: 50, borderRadius: 20, borderColor: "gray", borderWidth: 0.5, marginVertical: 10 }}
              onChangeText={(text) => this.setState({ location: text })} />

            <TouchableOpacity
              style={{
                width: '90%', height: 50, borderRadius: 20, marginVertical: 10,
                backgroundColor: 'black', alignItems: "center", justifyContent: "center"
              }}
              onPress={() => this.onUpdate()}
            >
              <Text style={{ color: "white" }}>Update Value</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Add new Data Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isAdd}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            this.setState({ isAdd: false });
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


            <TextInput
              style={{ width: '90%', height: 50, borderRadius: 20, borderColor: "gray", borderWidth: 0.5 }}
              value={this.state.title}
              placeholder={'Title'}
              onChangeText={(text) => this.setState({ title: text })} />
            <TextInput
              value={this.state.location}
              placeholder={'Location'}
              style={{ width: '90%', height: 50, borderRadius: 20, borderColor: "gray", borderWidth: 0.5, marginVertical: 10 }}
              onChangeText={(text) => this.setState({ location: text })} />

            <TouchableOpacity
              style={{
                width: '90%', height: 50, borderRadius: 20, marginVertical: 10,
                backgroundColor: 'black', alignItems: "center", justifyContent: "center"
              }}
              onPress={() => this.onAdd()}
            >
              <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
