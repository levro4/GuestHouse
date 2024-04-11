import React, { Component } from 'react'
import Hetfo from './hetfo';

export default class Tablamain extends Component {
    state = {
        step: 1,
        hetfoA :"",
        hetfoB :"",
        hetfoC :"",
        keddA :"",
        keddB :"",
        keddC :"",
        szerdaA :"",
        szerdaB :"",
        szerdaC :"",
        csütörtökA :"",
        csütörtökB :"",
        csütörtökC :"",
        péntekA :"",
        péntekB :"",
        péntekC :"",
        szombatA :"",
        szombatB :"",
        szombatC :"",
        vasárnapA :"",
        vasárnapB :"",
        vasárnapC :""
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
  render() {
    const { step } = this.state;
        const { 
            hetfoA, 
            hetfoB, 
            hetfoC, 
            keddA, 
            keddB, 
            keddC, 
            szerdaA, 
            szerdaB, 
            szerdaC, 
            csütörtökA, 
            csütörtökB, 
            csütörtökC, 
            péntekA, 
            péntekB, 
            péntekC, 
            szombatA, 
            szombatB, 
            szombatC, 
            vasárnapA, 
            vasárnapB, 
            vasárnapC
        } = this.state;
        const values = { 
            hetfoA, 
            hetfoB, 
            hetfoC, 
            keddA, 
            keddB, 
            keddC, 
            szerdaA, 
            szerdaB, 
            szerdaC, 
            csütörtökA, 
            csütörtökB, 
            csütörtökC, 
            péntekA, 
            péntekB, 
            péntekC, 
            szombatA, 
            szombatB, 
            szombatC, 
            vasárnapA, 
            vasárnapB, 
            vasárnapC }
    switch (step) {
        case 1:
            return(
                <Hetfo 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}/>
            )
        case 2:
            return(
                <div>

                </div>
            )
        case 3:
            return(
                <dir>

                </dir>
            )
        case 4:
            return(
                <div>

                </div>
            )
        case 5:
            return(
                <div>

                </div>
            )
        case 6:
            return(
                <div>

                </div>
            )
        case 7:
            return(
                <div>

                </div>
            )
    }
  }
}
