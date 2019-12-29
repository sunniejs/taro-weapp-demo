import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import './popup.scss'

export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false // 显示
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({ showPopup: nextProps.show })
    }
  }
  handleClose(e) {
    e.stopPropagation()
    this.setState({
      showPopup: false
    })
    // 触发组件方法
    this.props.onClose && this.props.onClose()
  }
  handleClickMask(e) {
    e.stopPropagation()
    // 触发组件方法
    this.props.onClickMask && this.props.onClickMask()
  }
  render() {
    const { showPopup } = this.state
    const { maskStyle, showAnimation } = this.props
    const cls = classnames('popup-container', { 'popUp-animation': showAnimation })
    return (
      <block>
        {showPopup && (
          <View className='popup'>
            <View className='close-btn' onClick={this.handleClose.bind(this)}>
              {this.props.closeText}
            </View>
            <View className='popup-mask' onClick={this.handleClickMask.bind(this)} style={maskStyle}></View>
            <View className={cls}>{this.props.children}</View>
          </View>
        )}
      </block>
    )
  }
}
Popup.defaultProps = {
  showAnimation: false, // 动画
  maskStyle: '' // mask样式
}
