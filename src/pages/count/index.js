import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decreaseAction, getDataAction } from 'redux/count';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        };
    }

    componentDidMount() {
        this.props.getDataAction(1);
    }

    render() {
        const { value, get_data, incrementAction, decreaseAction, getDataAction } = this.props;
        let pages;
        if (this.props.match.params.id === "aaa") {
            pages = "Page 1";
        } else {
            pages = "Page 2";
        }

        let lists;
        if (get_data) {
            lists = get_data.map((list) => {
                if (list.id <= 10) {
                    return (
                        <div key={list.id}>item{list.id}: {list.title}</div>
                    );
                } else {
                    return null;
                }
            });
        }

        return (
            <div className="Count">
                <div className="container">
                    <h1 className="text-center">{pages}</h1>
                    <h1>Count</h1>
                    <h2>{value}</h2>
                    <button className="btn btn-success" onClick={() => incrementAction(1)}>+1</button>&nbsp;
                    <button className="btn btn-success" onClick={decreaseAction}>-1</button>&nbsp;
                    <button className="btn btn-success" onClick={() => incrementAction(10)}>+10</button>

                    <br /><br /><br />

                    <h1>Ajax</h1>
                    <button className="btn btn-success" onClick={() => getDataAction(2)}>Get_DATA</button>
                    <br /><br />
                    {lists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.count.value,
    get_data: state.count.get_data,
});

const mapDispatchToProps = (dispatch) => ({
    incrementAction: (num) => dispatch(incrementAction(num)),
    decreaseAction: () => dispatch(decreaseAction()),
    getDataAction: (params) => dispatch(getDataAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
