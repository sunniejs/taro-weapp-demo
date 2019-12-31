import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './avatar.scss'
class Avatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { size } = this.props
    const customStyle = {
      width: `${size}rpx`,
      height: `${size}rpx`
    }
    // ;<view class='avatar' style='width: {{size}}rpx; height: {{size}}rpx; {{avatarStyle}}'>
    //   <image mode='aspectFill' src='{{src?src:icon.userAvatar}}' style='{{imageStyle}}'></image>
    //   <block>
    //     <block wx:if='{{tagName}}'>
    //       <view class='userTag' style='{{tagStyle}}'>
    //         {{ tagName }}
    //       </view>
    //     </block>
    //   </block>
    // </view>
    return (
      <block>
        <View className='avatar' style={customStyle}></View>
      </block>
    )
  }
}
Avatar.defaultProps = {
  src: '',
  size: 100,
  avatarStyle: '',
  imageStyle: '',
  tagStyle: '',
  tagName: ''
}
