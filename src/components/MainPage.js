import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from './Header'
import { SignatureList } from './SignatureList'
import { SignatureForm } from './SignatureForm'
import axios from 'axios'
import {signatures} from './signatures20200926'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signatures: []
        }
    }
    getDataFromExternalAPI = () => {
        // axios.post(`https://www.vazimesikulturu.sk/api/get.php`)
        // .then(res => {
        //     console.log("retrieved users=", res.data);
        //     const signatures = res.data
        //     this.setState({signatures})
        // })   
        this.setState({signatures})
    }
    componentDidMount = () => {
        this.getDataFromExternalAPI()
    }    
    stateHandler = (signatures) => {
        this.getDataFromExternalAPI()
    }
    render() {
        return (
            <div>
                <div className="light-shade">
                    <div className="container">
                        <Header type="petition" heading="Podpísať otvorený list"/>
                        <SignatureForm stateHandler={this.stateHandler}/>
                    </div>
                </div>
                <div className="signature-list-table-area">
                    <div className="container">            
                        <Header type="list-of-signatures" heading="Zoznam všetkých podpisov"/>
                        <SignatureList signatures={this.state.signatures}/>
                    </div>
                </div>
            </div>
        )
    }

}
