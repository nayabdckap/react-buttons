class MainComp extends React.Component {
    constructor(props) {
        super(props);
        this.incrementValue = this.incrementValue.bind(this)
        this.state = {
            value: 0
        }
    }

    incrementValue(value) {

        this.setState(
            {
                value: this.state.value + value
            }
        )
    }

    render() {
        return (
            <div>
                <ButtonComp param="5" methodOne={this.incrementValue}/><br/>
                <ButtonComp param="10" methodOne={this.incrementValue}/><br/>
                <ButtonComp param="20" methodOne={this.incrementValue}/>
                <DisplayComp display_param={this.state.value}/>
            </div>
        )
    }
}

class ButtonComp extends React.Component {
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
                       value={"Multiples of " + this.props.param}
                       onClick={() => this.props.methodOne(parseInt(this.props.param))}
                />
            </div>
        )
    }
}

class DisplayComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <p>Value: {this.props.display_param}</p>
            </div>
        )
    }
}


ReactDOM.render(
    <MainComp/>, document.getElementById('root')
)
