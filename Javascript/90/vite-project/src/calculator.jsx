import React, { Component } from 'react'
import Button from './button';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

    }

    buttonClicked = (label) => {
        if (label === '=') {
            this.setState((lastState) => ({
                input: eval(lastState.input).toString()
            }));
        }
        else if (label === 'C') {
            this.setState({
                input: ''
            });
        }
        else {
            this.setState((lastState) =>
            ({
                input: lastState.input + label
            })
            )
        }
    }

    render() {
        return (
            <>
                <div className='title'>PCS Calculator</div>
                <input className='outputScreen' readOnly value={this.state.input} />
                <div>
                    <Button label='7' clickFunction={this.buttonClicked} />
                    <Button label='8' clickFunction={this.buttonClicked} />
                    <Button label='9' clickFunction={this.buttonClicked} />
                </div>
                <div>
                    <Button label='4' clickFunction={this.buttonClicked} />
                    <Button label='5' clickFunction={this.buttonClicked} />
                    <Button label='6' clickFunction={this.buttonClicked} />
                </div>
                <div>
                    <Button label='1' clickFunction={this.buttonClicked} />
                    <Button label='2' clickFunction={this.buttonClicked} />
                    <Button label='3' clickFunction={this.buttonClicked} />
                </div>
                <div>
                    <Button label='+' clickFunction={this.buttonClicked} />
                    <Button label='-' clickFunction={this.buttonClicked} />
                    <Button label='*' clickFunction={this.buttonClicked} />
                </div>
                <div>
                    <Button label='/' clickFunction={this.buttonClicked} />
                    <Button label='=' clickFunction={this.buttonClicked} />
                    <Button label='C' clickFunction={this.buttonClicked} />
                </div>


            </>
        );
    }
}