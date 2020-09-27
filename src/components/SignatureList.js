import React from 'react'
import { connect } from 'react-redux'


export class SignatureList extends React.Component { 
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    {false && <p>Spolu podpisov: {this.props.signatures.length}</p>}
                        
                            
                            {this.props.signatures.map(signature => {
                                return (
                                    <div className="col-xs-4" key={signature.user_id}>
                                        <p>{signature.firstName} {signature.lastName}, {signature.profession}</p>
                                    </div>
                                )
                            })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ signatures: state.signatures })

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)