import React, { Component } from 'react';

class About extends Component {
    render() {
        let arrLists = ['打文章','寫程式','耍廢'];
        let lists = arrLists.map((list) => {
            return (
                <li key={list}>{list}</li>
            );
        });

        return (
        <div className="About">
            <div className="container">
                <h1>About</h1>
                <ul>{lists}</ul>
            </div>
        </div>
        );
    }
}

export default About;
