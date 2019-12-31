import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import classnames from 'classnames'
import './modal.scss'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    const { modalInfo } = props
    this.state = {
      _isOpened: modalInfo.showModal
    }
  }
  componentWillReceiveProps(nextProps) {
    const { modalInfo } = nextProps
    if (modalInfo.showModal !== this.state._isOpened) {
      this.setState({
        _isOpened: modalInfo.showModal
      })
    }
  }
  preventTouchMove() {}
  prevent() {}
  closeModal(e) {
    e && e.stopPropagation()
    if (this.props.maskClose) {
      this.setState({
        _isOpened: false
      })
      this.props.onCloseModal && this.props.onCloseModal()
    }
  }
  // 确定
  confirm(e) {
    e.stopPropagation()
    this.closeModal()
    this.props.onConfirmModal && this.props.onConfirmModal()
  }
  // 取消
  cancel(e) {
    e.stopPropagation()
    this.closeModal()
    this.props.onCancelModal && this.props.onCancelModal()
  }
  render() {
    const { modalInfo, confirmBtnStyle } = this.props
    const { _isOpened } = this.state
    return (
      <block>
        {_isOpened && (
          <View className={classnames('modal-box', modalInfo.rootClass)} onCatchtouchmove={this.preventTouchMove.bind(this)} onClick={this.closeModal.bind(this)}>
            <View onClick={this.prevent.bind(this)} className='modal-bg' style={modalInfo.rootStyle}>
              <View className='modal-title' style={modalInfo.titleStyle}>
                {modalInfo.modalTitle}
              </View>
              <View className='modal-txt' style={modalInfo.contentStyle}>
                {modalInfo.modalTxt}
              </View>
              {this.props.children}
              <block>
                {modalInfo.showConfirm || modalInfo.showCancel ? (
                  <View className='btn'>
                    {modalInfo.showConfirm && (
                      <Button onClick={this.confirm.bind(this)} className='confirm-btn' style={confirmBtnStyle}>
                        {modalInfo.confirmTxt}
                      </Button>
                    )}
                    {modalInfo.showCancel && (
                      <Button onClick={this.cancel.bind(this)} className='cancel-btn'>
                        {modalInfo.cancelTxt}
                      </Button>
                    )}
                  </View>
                ) : null}
              </block>
            </View>
          </View>
        )}
      </block>
    )
  }
}
Modal.defaultProps = {
  modalInfo: {
    showModal: false,
    modalTitle: null,
    modalTxt: '',
    confirmTxt: '确定',
    cancelTxt: '取消',
    showCancel: true,
    showConfirm: true,
    rootClass: 'address'
  },
  confirmBtnStyle: '',
  rootStyle: '',
  titleStyle: '',
  contentStyle: '',
  maskClose: true
}
