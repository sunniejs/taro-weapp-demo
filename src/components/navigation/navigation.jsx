import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './navigation.scss'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps() {}
  render() {
    const { custom, customOnlyTitle } = this.props
    let content = null
    if (custom) {
      content = <View> 1 </View>
    } else if (customOnlyTitle) {
      content = <View> 2 </View>
    } else {
      content = <View> 3 </View>
    }
    return (
      <View>
        <View className="navigation-temp" style=""></View>
        <View className="navigation">{content}</View>
      </View>
    )
  }
}
