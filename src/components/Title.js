import React from 'react';
import App from '../containers/App';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "'TO DO' APPLICATION"
        };
    }

    render() {
        const app = new App(),
            data = app.state.data,

            list = data.map((item) => {
                return (
                    <li key={item.id}>
                        <p>{item.text}</p>
                    </li>
                )
            });

        return (
            <div>
                <h2>{this.state.title}</h2>
                <ul>{list}</ul>
                <p>Number of tasks: {list.length}</p>
            </div>
        );
    }

}

export default Title;