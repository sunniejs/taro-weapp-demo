import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'
import { Navigation } from '../../components/navigation/navigation'
import { Popup } from '../../ui/popup/popup'
import { Child } from './sub'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: 'sunnie',
    show: false,
    showAnimation: true
  }

  componentWillMount() {
    let { name } = this.$router.params
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  test(e) {}
  showPopup(show) {
    this.setState({
      show: !show
    })
  }
  onPopupClickMask() {
    this.setState({
      show: false
    })
  }
  render() {
    const { show, showAnimation } = this.state
    return (
      <View className="index">
        <View>
          <Navigation></Navigation>
        </View>
        <Button onClick={this.showPopup.bind(this, show)}>点击</Button>
        <Popup showAnimation={showAnimation} show={show} onClickMask={this.onPopupClickMask.bind(this)}>
          popup
        </Popup>
      </View>
    )
  }
}
