import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import  {showDrawer, changeCata,hideDrawer} from  '../../actions/menu';
@connect(function(store){
  return  {...store.menu }
},function(dispatch){
  console.log(dispatch)
  return {
  showMenu(){
      dispatch(showDrawer())
  },
  hideDrawer(){
      dispatch(hideDrawer())
  },
  changeCata(cata){
      dispatch(changeCata(cata))
  }
}
})
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
Menu.defaultProps = {}
