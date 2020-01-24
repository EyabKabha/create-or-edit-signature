import React, { Component } from 'react';
import FooterButton from './FooterButton';

class WizardFooterButtons extends Component {
    render() {
        return (
            <div style={{ width:'100%', borderTop:'1px solid #4B4E50', backgroundColor: '#cccccc', paddingTop:'20px', paddingBottom:'20px', margin: '0px', position: 'fixed', left: '0px', bottom: '0px' }}>
                {!this.props.isFirstStep && <FooterButton action={this.props.setCurrentStep} args={this.props.currentStep - 1} text="BACK" bootstrapClass="btn btn-light ml-2"></FooterButton>}
                {!this.props.isLastStep && <FooterButton action={this.props.setCurrentStep} args={this.props.currentStep + 1} text="NEXT" bootstrapClass="btn btn-primary ml-2"></FooterButton>}
                {this.props.isLastStep && <FooterButton action={this.props.createSignatureButtonClick} args={this.props.signatureData} text="CREATE SIGNATURE" bootstrapClass="btn btn-success ml-2"></FooterButton>}
                {this.props.showCreateWithDefaultsButton && <FooterButton action={this.props.createWithDefaultsButtonClick} args={this.props} text="CREATE WITH DEFAULTS" bootstrapClass="btn btn-warning ml-2"></FooterButton>}
            </div>
        );
    }
}

export default WizardFooterButtons;