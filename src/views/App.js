import React from 'react';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import { connect } from 'react-redux';

// Action creators
import actionCreators from '../actions/actionCreators'

// Components
import Head from '../components/Head';

const Main = React.createClass({
  handleClick() {
    this.props.setBackground();
  },
  render() {
    document.body.style.background = this.props.background;

    return (
      <main>
        <Head/>
        <header className='header flex items-center justify-center w-100 pv2'>
          <Link to='/' className='center' onClick={this.handleClick}>
            Home Link
          </Link>
        </header>

        {React.cloneElement({...this.props}.children, {...this.props})}
      </main>
    )
  }
});


function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Main);
