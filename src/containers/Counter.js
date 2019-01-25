import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../actions';

const mapStateToProps = state => ({
  value: state.counter.value
});

const mapDispatchToProps = dispatch => ({
  counter: bindActionCreators({ increment, decrement }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);