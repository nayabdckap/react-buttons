import React, {Component} from 'react';

class MainComp extends Component {
    constructor(props) {
        super(props);
        this.incrementValue = this.incrementValue.bind(this)
        this.state = {
            value: []
        }
    }

    incrementValue(value) {

    }

    render() {
        return (
            <div>
                <ButtonComp param="5" methodOne={this.incrementValue}/>
                <ButtonComp param="10" methodOne={this.incrementValue}/>
                <ButtonComp param="20" methodOne={this.incrementValue}/>
            </div>
        )
    }
}

class ButtonComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
    }

    render() {
        return (
            <div>
                <input type="button"
                       value="Multiples of "
                       onClick={() => this.props.methodOne(this.props.param)}
                />
            </div>
        )
    }
}

// class LogicComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: []
//         }
//     }
//
//     render() {
//         return (
//             <div>
//
//             </div>
//         )
//     }
// }


ReactDOM.render(
    <MainComp/>, document.getElementById('root')
)
