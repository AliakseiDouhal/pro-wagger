import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import * as S from './styled'


export default class Modal extends PureComponent {
  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(

        <S.ModalWrapper>
          <S.CloseButton onClick={this.props.toggleModal}/>
          {this.props.children}
        </S.ModalWrapper>,
      this.root
    );
  }
}
