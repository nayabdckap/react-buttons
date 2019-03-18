class ComponentOne extends React.Component {
    param_1;
    param_2;
    param_3;

    constructor(props) {
        super(props);
        this.incrementValue = this.incrementValue.bind(this)

        this.state = {
            // value_1: 5,
            // value_2: 10,
            // value_3: 20
            value: [5, 10, 20]
        }
    }

    incrementValue(param_1, param_2, param_3) {
        var i;
        for (i = 0; i <= (this.state.value.length - 1); i++) {
            // console.log(this.state.value[i])
            console.log(this.state.value[i] + param_1)
            this.setState({
                value: this.state.value[i] + param_1
            })
        }

        // if (param_1 === 5) this.setState({value_1: this.state.value_1 + param_1})
        // if (param_2 === 10) this.setState({value_2: this.state.value_2 + param_2})
        // if (param_3 === 20) this.setState({value_3: this.state.value_3 + param_3})

    }

    render() {
        return (
            <div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 5"
                           onClick={() => this.incrementValue(this.param_1 = 5, this.param_2, this.param_3)}
                        // onClick={() => this.incrementValue(this.param_1 = this.state.value_1)}
                    />
                    {this.state.value[0]}
                    {"hhh"}
                </div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 10"
                           onClick={() => this.incrementValue(this.param_1, this.param_2 = 10, this.param_3)}
                    />
                    {this.state.value[1]}
                </div>
                <div>
                    <input type="button"
                           className=""
                           value="Multiples of 20"
                           onClick={() => this.incrementValue(this.param_1, this.param_1, this.param_3 = 20)}
                    />
                    {this.state.value[2]}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ComponentOne/>, document.getElementById('root')
)
