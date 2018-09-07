import React, { Component } from 'react';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router-dom';
import { userSelector } from '../../selectors/auth';
import { app } from 'firebase';
import * as S from './styled';
import Modal from '../Modal'
import NewWaggerForm from '../../components/NewWagger';
import { fetchWagersRequest,test } from '../../redux/wagers';
import { activeWagersSelector } from '../../selectors/wagers';

class Board extends Component {
  state = {
    isOpen: false,
  };
  componentDidMount() {
    this.props.fetchWagersRequest();

  }

  toggleModal = () => {
    this.setState(({isOpen})=> ({isOpen: !isOpen}))
  }




  test = () => {
    const test = {
      author: 'I',
      stack: 'none',
      data: 'sport',
    }
    app()
      .firestore()
      .collection('test')
      .doc("LA")
      .set({test: 'архитектор', top:'da'}).then(data=> console.log(data))

  }

  render() {
    const {activeWagers} = this.props;
    console.log('active', activeWagers);
    return (
      <div>
        <div>
          {activeWagers?
            activeWagers.map((el)=>(
            <p>{el.type}</p>
          )
            ):<p>her</p>}
        </div>
        <p onClick={this.props.test}>Board</p>
        <S.AddWrapper onClick={this.toggleModal}>
          <S.PlusWrapper>
            <S.Horizontal/>
            <S.Vertical/>
          </S.PlusWrapper>
        </S.AddWrapper>
        {
          this.state.isOpen &&
          <Modal toggleModal={this.toggleModal}>
            <NewWaggerForm />
          </Modal>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: userSelector(state),
  activeWagers: activeWagersSelector(state),
});

const mapDispatchToProps = {
  fetchWagersRequest,
  test
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Board);
