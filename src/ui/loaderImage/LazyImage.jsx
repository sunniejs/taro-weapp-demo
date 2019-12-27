import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class LazyImage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.failCount = 0
      this.setState({
        downGradeOpen
      })
    }
  }
  render() {
    {
      /* <view class="lazy-img {{src&&!showDefaultImg?'has-url':''}}"
 style="{{rootStyle}}">
    <image lazyLoad mode="{{mode}}" 
    src="{{showImg||!shouldObserve?src:''}}" 
    style="width: {{width}}; height: {{height}};border-radius: {{radius}}rpx;">
    </image>
</view> */
    }
    const { mode, shouldObserve, showImg, src, width, height, radius } = this.props
    return (
      <View className="lazy-img">
        <Image lazyLoad mode={mode} src={showImg || !shouldObserve ? src : ''}></Image>
      </View>
    )
  }
}
LazyImage.defaultProps = {
  src: '',
  width: '100%',
  height: '100%',
  mode: 'scaleToFill',
  radius: '0px',
  styleStr: '',
  lazyLoad: false
}
