import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import './modal.scss'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }
  preventTouchMove() {}
  prevent() {}
  closeModal(e) {
    e.stopPropagation()
    if (this.props.maskClose) {
      this.setState({
        'modalInfo.showModal': false
      })
      this.props.onCloseModal && this.props.onCloseModal()
    }
  }
  render() {
    const { modalInfo } = this.props
    return (
      <block>
        {modalInfo.showModal && (
          <View className={classnames('modal-box', modalInfo.rootClass)} onCatchtouchmove={this.preventTouchMove.bind(this)} onClick={this.closeModal.bind(this)}>
            <View onClick={this.prevent.bind(this)} className="modal-bg" style={modalInfo.rootStyle}>
              <View className="modal-title" style={modalInfo.titleStyle}>
                {modalInfo.modalTitle}
              </View>
              <View className="modal-txt" style={modalInfo.contentStyle}>
                {modalInfo.modalTxt}
              </View>
              {this.props.children}
              <block></block>
            </View>
          </View>
        )}
      </block>
    )
  }
}
Modal.defaultProps = {
  modalInfo: {
    showModal: !1,
    modalTitle: null,
    modalTxt: '',
    confirmTxt: '确定',
    cancelTxt: '取消',
    showCancel: !0,
    showConfirm: !0,
    share: !1,
    rootClass: 'address'
  },
  confirmBtnStyle: '',
  rootStyle: '',
  titleStyle: '',
  contentStyle: '',
  maskClose: true
}
