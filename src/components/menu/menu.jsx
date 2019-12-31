import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Menu extends Component {
  config = {
    navigationBarTitleText: ''
  }

  state = {}
  render() {
    return (
      <View className='topiclist-menu'>
        <Image onClick={this.showDrawer.bind(this)} className='image  left' src={require('../../assets/img/cata.png')} />
        <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
        <Image onClick={this.toUser.bind(this)} className='image right' src={require('../../assets/img/login.png')} />
      </View>
    )
  }
}
