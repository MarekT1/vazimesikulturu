import React from 'react'
import axios from 'axios'
import ToolTip from 'react-portal-tooltip'
import ModalDialog from './ModalDialog'

const NUMBER_A_MAX = 50;
const NUMBER_B_MAX = 10;
const NUMBER_AB_MIN = 1;

export class SignatureForm extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = {
            firstName: '',
            lastName: '',
            profession: '',
            email: '',
            errors: {
                firstName: {
                    blurred: false,
                    valid: false
                },
                lastName: {
                    blurred: false,
                    valid: false
                },
                email: {
                    blurred: false,
                    valid: false
                },
                agreeGDPRChecked: {
                    blurred: false,
                    valid: false
                },
                captcha: {
                    blurred: false,
                    valid: false
                }                
            },
            captcha: '',
            captchaAnswer: '',
            captchaCorrectAnswer: '',
            agreeGDPRChecked: false,
            agreeSubscribeChecked: false,
            submitButtonDisable: true,
            stateMessage: '',
            stateStatus: false,
            isTooltipActive: false
        };
      }
      componentDidMount = () => {
        const numberA = Math.floor(Math.random()*(NUMBER_A_MAX - NUMBER_AB_MIN) + NUMBER_AB_MIN)
        const numberB = Math.floor(Math.random()*(NUMBER_B_MAX - NUMBER_AB_MIN) + NUMBER_AB_MIN)
        this.setState({
            captcha: `(${numberA} + ${numberB} = zadajte výsledok)`,
        });
        this.setState({
            captchaCorrectAnswer: `${numberA + numberB}`,
        });
    }
    toggleGDPRChange = () => {
        this.setState({
            agreeGDPRChecked: !this.state.agreeGDPRChecked,
        });
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.agreeGDPRChecked.blurred = true;
            return {
                errors: newStateErrors
                }
        }) 
    }    
    toggleSubscribeChange = () => {
        this.setState({
            agreeSubscribeChecked: !this.state.agreeSubscribeChecked,
        });
    }
    onFirstNameChange = (e) => {
        const firstName = e.target.value
        this.setState(() => ({firstName}))

        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.firstName.valid = !(firstName < 1);
            return {
                errors: newStateErrors
                }
        })
    }
    onFirstNameBlur = (e) => {
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.firstName.blurred = true;
            return {
                errors: newStateErrors
                }
        })        
    }         
    onLastNameChange = (e) => {
        const lastName = e.target.value
        this.setState(() => ({lastName}))

        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.lastName.valid = !(lastName < 1);
            return {
                errors: newStateErrors
                }
        })
    }     
    onLastNameBlur = (e) => {
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.lastName.blurred = true;
            return {
                errors: newStateErrors
                }
        })        
    }      
    onProfessionChange = (e) => {
        const profession = e.target.value
        this.setState(() => ({profession}))
    }      
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({email}))
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.email.valid = expression.test(String(email).toLowerCase());
            return {
                errors: newStateErrors
                }
        })
    }     
    onEmailBlur = (e) => {
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.email.blurred = true;
            return {
                errors: newStateErrors
                }
        })        
    }     
    onCaptchaChange = (e) => {
        const captchaAnswer = e.target.value
        this.setState(() => ({captchaAnswer}))
        
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.captcha.valid = state.captchaCorrectAnswer === captchaAnswer;
            return {
                errors: newStateErrors
                }
        })        
    }
    onCaptchaBlur = () => {
        this.setState((state) => {
            let newStateErrors = state.errors
            newStateErrors.captcha.blurred = true;
            return {
                errors: newStateErrors
                }
        })         
    }
    onSubmitClick = () => {
        if ( this.state.errors.firstName.blurred === true &&
            this.state.errors.firstName.valid === true &&
            this.state.errors.lastName.blurred === true &&
            this.state.errors.lastName.valid === true &&
            this.state.errors.email.blurred === true &&
            this.state.errors.email.valid === true &&
            this.state.errors.agreeGDPRChecked.blurred === true &&
            this.state.agreeGDPRChecked === true &&                                   
            this.state.errors.captcha.blurred === true &&
            this.state.errors.captcha.valid === true
        ) { 
            axios.post(`https://www.vazimesikulturu.sk/api/put.php`, { 
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                profession: this.state.profession, 
                email: this.state.email, 
                agreeGDPRChecked: this.state.agreeGDPRChecked ? 1 : 0,
                agreeSubscribeChecked: this.state.agreeSubscribeChecked ? 1 : 0,
                captcha: this.state.captcha,
                captchaAnswer: this.state.captchaAnswer,
            })
            .then(res => {
                console.log("called POST with=", res.data);
                // initiate state change
                this.props.stateHandler();

                this.setState((state) => {
                    return {
                        ...state,
                        stateMessage: res.data.message,
                        stateStatus: res.data.status,
                        isTooltipActive: true
                        }
                })

                setTimeout(() => {
                    this.setState((state) => {
                        return {
                            ...state,
                            isTooltipActive: false
                            }
                    })
                }, 3000)


            })              
        } else {
            // make the form "dirty", so that the errors appear 
            this.setState((state) => {
                let newStateErrors = state.errors
                newStateErrors.firstName.blurred = true;
                newStateErrors.lastName.blurred = true;
                newStateErrors.email.blurred = true;
                newStateErrors.captcha.blurred = true;
                newStateErrors.agreeGDPRChecked.blurred = true;
                return {
                    errors: newStateErrors
                    }
            }) 
        }



      
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="signature-form">
                        <div className="row">
                            <label className="sr-only">First Name</label>
                            <div className="col-md-6">
                                <div className="form-group is-empty">
                                    <input 
                                        type="text"
                                        placeholder="Meno"
                                        className = {
                                            !this.state.errors.firstName.blurred  ||
                                            this.state.errors.firstName.valid 
                                            ? this.state.errors.firstName.blurred ? "form-control ok": "form-control" : "form-control error"
                                        }
                                        value={this.state.firstName}
                                        onBlur={this.onFirstNameBlur}
                                        onChange={this.onFirstNameChange}
                                    />
                                </div>
                            </div>

                            
                            <label className="sr-only" >Last Name</label>
                            <div className="col-md-6">
                                <div className="form-group is-empty">
                                    <input 
                                        type="text"
                                        placeholder="Priezvisko"
                                        className = {
                                            !this.state.errors.lastName.blurred  ||
                                            this.state.errors.lastName.valid 
                                            ? this.state.errors.lastName.blurred ? "form-control ok": "form-control" : "form-control error"
                                        }
                                        value={this.state.lastName}
                                        onBlur={this.onLastNameBlur}
                                        onChange={this.onLastNameChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group is-empty">
                                    <input 
                                        type="text"
                                        placeholder="Profesia"
                                        className="form-control"
                                        value={this.state.profession}
                                        onChange={this.onProfessionChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group is-empty">
                                    <input 
                                        type="text"
                                        placeholder="email"
                                        className = {
                                            !this.state.errors.email.blurred  ||
                                            this.state.errors.email.valid 
                                            ? "form-control": "form-control error"
                                        }
                                        value={this.state.email}
                                        onBlur={this.onEmailBlur}
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group is-empty">                                        
                                    <input 
                                        type="text"
                                        placeholder={this.state.captcha}
                                        className = {
                                            !this.state.errors.captcha.blurred  ||
                                            this.state.errors.captcha.valid 
                                            ? this.state.errors.captcha.blurred ? "form-control ok": "form-control" : "form-control error"
                                        }
                                        value={this.state.captchaAnswer}
                                        onBlur={this.onCaptchaBlur}
                                        onChange={this.onCaptchaChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <label
                                    className = "label-input"                      
                                >
                                    <input type="checkbox"
                                        checked={this.state.agreeGDPRChecked}
                                        onChange={this.toggleGDPRChange}
                                    />&nbsp;<span className={
                                        !this.state.errors.agreeGDPRChecked.blurred  ||
                                        this.state.agreeGDPRChecked 
                                        ? "label-input": "label-input-error"
                                    }>Súhlasím</span> so <ModalDialog linkedText="zásadami ochrany osobných údajov"/>.
                                </label>
                            </div>

                            <div className="col-md-6">                        
                                <label className="label-input">
                                    <input type="checkbox"
                                        checked={this.state.agreeSubscribeChecked}
                                        onChange={this.toggleSubscribeChange}
                                    />&nbsp;Chcem byť informovaný o ďalšom postupe ohľadom tohto listu.
                                </label> 
                            </div>
                            <div className="col-xs-12 signature-top-padding">
                                <p className="text-center">
                                    <button 
                                        id="saveSignature"
                                        className="btn btn-brand btn-cta" 
                                        onClick={this.onSubmitClick}
                                        disabled={true}
                                    >
                                        Podpísať otvorený list
                                    </button>
                                </p>
                                <p className="text-center">
                                    <i>List už nie je možné podpísať. V tomto stave bol zaslaný Ministerstvu kultúry SR v máji 2020.</i>
                                </p>
                            </div>
                            <ToolTip active={this.state.isTooltipActive} position="right" parent="#saveSignature">
                                <div className={this.state.stateStatus === false ? "signature-message-err":"signature-message-ok"}>
                                    <p>{this.state.stateStatus}</p>
                                    <p>{this.state.stateMessage}</p>
                                </div>
                            </ToolTip> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SignatureForm