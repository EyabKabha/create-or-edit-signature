import React, { Component } from 'react';

import ControlSteps from '../shared/ControlSteps';
import WizardFooterButtons from '../shared/WizardFooterButtons';

import CreateOrEditSignatureStep1Details from './CreateOrEditSignatureStep1Details/CreateOrEditSignatureStep1Details';
import CreateOrEditSignatureStep2Volnarability from './CreateOrEditSignatureStep2Volnarability/CreateOrEditSignatureStep2Volnarability';
import CreateOrEditSignatureStep3Validate from './CreateOrEditSignatureStep3Validate/CreateOrEditSignatureStep3Validate';
import CreateOrEditSignatureStep4ExternalReferences from './CreateOrEditSignatureStep4ExternalReferences/CreateOrEditSignatureStep4ExternalReferences';
import CreateOrEditSignatureStep5Attributes from './CreateOrEditSignatureStep5Attributes/CreateOrEditSignatureStep5Attributes';

const steps = [
    <CreateOrEditSignatureStep1Details />,
    <CreateOrEditSignatureStep2Volnarability />,
    <CreateOrEditSignatureStep3Validate />,
    <CreateOrEditSignatureStep4ExternalReferences />,
    <CreateOrEditSignatureStep5Attributes />
];

class CreateOrEditSignatureWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        };
    }

    setCurrentStep = (currentStep) => {
        this.setState({ currentStep: currentStep });
    }

    createSignatureButtonClick = (signatureData) => {
        alert(`CREATE SIGNATURE ${signatureData}`);
    }

    createWithDefaultsButtonClick = () => {
        alert(`CREATE WITH DEFAULTS BUTTON CLICKED!`);
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <ControlSteps currentStep={this.state.currentStep} setCurrentStep={this.setCurrentStep} />
                {steps[this.state.currentStep]}
                <WizardFooterButtons
                    currentStep={this.state.currentStep}
                    setCurrentStep={this.setCurrentStep}
                    isFirstStep={this.state.currentStep === 0}
                    isLastStep={this.state.currentStep === steps.length - 1}
                    createSignatureButtonClick={this.createSignatureButtonClick}
                    signatureData={'{signatureData: "data data data"}'}
                    showCreateWithDefaultsButton={[1, 2, 3].includes(this.state.currentStep)}
                    createWithDefaultsButtonClick={this.createWithDefaultsButtonClick}
                />
            </div>
        );
    }
}

export default CreateOrEditSignatureWizard;