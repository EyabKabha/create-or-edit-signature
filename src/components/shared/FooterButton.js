import React, { Component } from 'react';

class FooterButton extends Component {
    render() {
        return (
            <button type="button" className={this.props.bootstrapClass} onClick={() => this.props.action(this.props.args)}>
                {this.props.text}
            </button>
        );
    }
}

export default FooterButton;