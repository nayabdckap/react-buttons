class ComponentOne extends React.Component {
    constructor(props) {
        super(props);
        this.incrementValue_1 = this.incrementValue_1.bind(this)
        this.incrementValue_2 = this.incrementValue_2.bind(this)
        this.incrementValue_3 = this.incrementValue_3.bind(this)

        this.state = {
            value_1: 5,
            value_2: 10,
            value_3: 20
        }
    }

    incrementValue_1() {
        this.setState({value_1: this.state.value_1 + 5})
    }

    incrementValue_2() {
        this.setState({value_2: this.state.value_2 + 10})
    }

    incrementValue_3() {
        this.setState({value_3: this.state.value_3 + 20})
    }

    render() {
        return (
            <div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 5"
                           onClick={this.incrementValue_1}
                    />
                    {this.state.value_1}
                </div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 10"
                           onClick={this.incrementValue_2}
                    />
                    {this.state.value_2}
                </div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 20"
                           onClick={this.incrementValue_3}
                    />
                    {this.state.value_3}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ComponentOne/>, document.getElementById('root')
)
