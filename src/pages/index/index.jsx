import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'
import { Navigation } from '../../components/navigation/navigation'
import { Menu } from '../../components/menu/menu'
import { Child } from './sub'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: 'sunnie',
    modalInfo: {
      showModal: true,
      modalTxt: '请求失败，请再次点击卡片参与活动哟～',
      confirmTxt: '我知道了',
      showConfirm: true
    }
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
  confirmModal() {
    console.log('confirmModal')
  }
  render() {
    const { modalInfo } = this.state
    return (
      <View className='index'>
        <View>
          <Navigation></Navigation>
        </View>
        <Menu></Menu>
      </View>
    )
  }
}
