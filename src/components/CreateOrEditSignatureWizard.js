import React, { Component } from 'react';
import StepZilla from "react-stepzilla";

import CreateOrEditSignatureStep1Details from './CreateOrEditSignatureStep1Details/CreateOrEditSignatureStep1Details';
import CreateOrEditSignatureStep2Volnarability from './CreateOrEditSignatureStep2Volnarability/CreateOrEditSignatureStep2Volnarability';
import CreateOrEditSignatureStep3Validate from './CreateOrEditSignatureStep3Validate/CreateOrEditSignatureStep3Validate';
import CreateOrEditSignatureStep4ExternalReferences from './CreateOrEditSignatureStep4ExternalReferences/CreateOrEditSignatureStep4ExternalReferences';
import CreateOrEditSignatureStep5Attributes from './CreateOrEditSignatureStep5Attributes/CreateOrEditSignatureStep5Attributes';

import '../../node_modules/react-stepzilla/src/css/main.css';

const steps = [
    { name: 'Step 1 Details', component: <CreateOrEditSignatureStep1Details /> },
    { name: 'Step 2 Volnarability', component: <CreateOrEditSignatureStep2Volnarability /> },
    { name: 'Step 3 Validate', component: <CreateOrEditSignatureStep3Validate /> },
    { name: 'Step 4 ExternalReferences', component: <CreateOrEditSignatureStep4ExternalReferences /> },
    { name: 'Step 5 Attributes', component: <CreateOrEditSignatureStep5Attributes /> }
];

class CreateOrEditSignatureWizard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="example">
                        <div className="step-progress">
                            <StepZilla
                                steps={steps}
                                preventEnterSubmission={true}
                                // nextTextOnFinalActionStep={'CREATE'}
                                hocValidationAppliedTo={[4]}
                                startAtStep={
                                    window.sessionStorage.getItem("step")
                                        ? parseFloat(window.sessionStorage.getItem("step"))
                                        : 0
                                }
                                onStepChange={step => window.sessionStorage.setItem("step", step) }
                            />
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default CreateOrEditSignatureWizard;