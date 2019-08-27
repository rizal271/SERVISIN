import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import HeaderChat from '../components/HeaderChat';

class ChatRoom extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Apa Hello2 ha?',
            avatar: 'https://placeimg.com/140/140/any',
          }
        }
      ]
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <HeaderChat />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </>
    );
  }
}

export default ChatRoom