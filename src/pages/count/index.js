import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decreaseAction, } from 'redux/count';

class Count extends Component {
    render() {
        const { value, incrementAction, decreaseAction } = this.props;
        return (
        <div className="Count">
            <div className="container">
                <h1>Count</h1>
                <h2>{value}</h2>
                <button className="btn btn-success" onClick={() => incrementAction(1)}>+1</button>&nbsp;
                <button className="btn btn-success" onClick={decreaseAction}>-1</button>&nbsp;
                <button className="btn btn-success" onClick={() => incrementAction(10)}>+10</button>

                <br /><br /><br />

                <h1>Ajax</h1>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: (num) => dispatch(incrementAction(num)),
  decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
