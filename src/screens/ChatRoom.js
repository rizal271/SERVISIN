import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  AsyncStorage
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import HeaderChat from '../components/HeaderChat';
import firebase from 'firebase';
import { Database, Auth } from '../publics/firebase/config';

class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.navigation.state.params.fullname,
      uid: this.props.navigation.state.params.idMitra,
      image: 'blabla',
      text: '',
      messagesList: [],

    }
  }

  async componentDidMount() {
    this.setState({
      myuid: await AsyncStorage.getItem('idUser'),
      myname: await AsyncStorage.getItem('fullname'),
      avatar: await AsyncStorage.getItem('image')
    })
    await Database.ref('messages').child(this.state.myuid).child(this.state.uid)
      .on('child_added', (value) => {
        this.setState((previousState) => {
          return {
            messagesList: GiftedChat.append(previousState.messagesList, value.val()),
          }
        })
      })
  }

  sendMessage = async () => {
    if (this.state.text.length > 0) {
      let msgId = Database.ref('messages').child(this.state.myuid).child(this.state.uid).push().key;
      let updates = {};
      let message = {
        _id: msgId,
        text: this.state.text,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          _id: this.state.myuid,
          name: this.state.myname,
          avatar: this.state.avatar
        }
      }
      updates['messages/' + this.state.myuid + '/' + this.state.uid + '/' + msgId] = message;
      updates['messages/' + this.state.uid + '/' + this.state.myuid + '/' + msgId] = message;
      Database.ref().update(updates)
      this.setState({ text: '' })

    }
  }
  render() {
    console.log(this.state.myuid);
    
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <HeaderChat item={this.props.navigation.state.params} />
        <GiftedChat
          text={this.state.text}
          messages={this.state.messagesList}
          onSend={this.sendMessage}
          showAvatarForEveryMessage={true}
          user={{
            _id: this.state.myuid,
            name: this.state.myname,
            avatar: this.state.avatar
          }}
          onInputTextChanged={(value) => this.setState({ text: value })}
        />
      </>
    );
  }
}

export default ChatRoom