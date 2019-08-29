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
import { connect } from 'react-redux';
import { notif } from '../publics/redux/actions/notif';
class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.navigation.state.params.name,
      uid: this.props.navigation.state.params.uid,
      image: this.props.navigation.state.params.image,
      text: '',
      messagesList: [],

    }
  }

  async componentDidMount() {
    const role = await AsyncStorage.getItem('role')
    let id
    if (role === 'mitra') {
      id = await AsyncStorage.getItem('idmitra')
    } else {
      id = await AsyncStorage.getItem('idUser')
    }
    this.setState({
      myuid: id,
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
      const data = {
        msg: this.state.text,
        phoneid: 'ea532432-d9d2-4a07-8d0d-1df861f506bf',
        header: 'Pesan Baru'
      }
      this.props.dispatch(notif(data))
      updates['messages/' + this.state.myuid + '/' + this.state.uid + '/' + msgId] = message;
      updates['messages/' + this.state.uid + '/' + this.state.myuid + '/' + msgId] = message;
      Database.ref().update(updates)
      this.setState({ text: '' })

    }
  }
  render() {
    console.warn(this.props.navigation.state.params.data)
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

const mapStateToProps = state => {
  return {
    notif: state.notif
  }
}

export default connect(mapStateToProps)(ChatRoom);