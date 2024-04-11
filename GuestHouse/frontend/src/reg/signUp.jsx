import React, { Component } from 'react'
import { FaChessBishop, FaHouse } from 'react-icons/fa6'
import NameEmail from './nameEmail';
import TelszamSzuldat from './TelszamSzuldat';
import Jelszo from './jelszo';
import Success from './success';
import { useState } from 'react'

export default class signUp extends Component {
    state = {
        step: 1,
        email: '',
        nev: '',
        telefonszam: '',
        szul_dat: '',
        jelszo: ''
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
    handleStepChange = () =>{

    }
    render() {
        const { step } = this.state;
        const { email, nev, telefonszam, szul_dat, jelszo } = this.state;
        const values = { email, nev, telefonszam, szul_dat, jelszo }

        switch (step) {
            case 1:

                return (
                    <div className='flex gap-5 flex-col justify-center items-center w-screen h-screen'>
                        <div className='flex text-xl font-bold text-white  gap-2 items-center justify-center w-96 bg-red '>
                            <div id='elem' className='rounded-full p-3 h-11 w-11 scale-125 bg-slate-500 animate-bounce shadow-lg flex justify-center items-center'>
                                1
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 shadow-lg flex justify-center items-center'>
                                2
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                                3
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                                <FaHouse />
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 sm:w-full md:w-full justify-center items-center text-white w-full lg:w-7/12 h-450 sm:h-[440px] rounded-lg shadow-lg bg-sky-700'>
                            <h1 className='text-3xl font-bold font-sans'>Regisztráció</h1>
                            <div className='w-full flex flex-col sm:flex-row justify-center items-center h-full'>
                                <NameEmail
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />

                                <div className='flex flex-col p-5 bg-sky-600 rounded-lg shadow-xl items-center justify-center w-full h-full'>
                                    <h1 className='text-2xl text-white font-bold'>Van már fiókod?</h1>
                                    <div className='flex text-center items-center gap-2 justify-center w-full h-20'>
                                        <span className='text-white font-sans font-semibold'>
                                            Jelentkezz be most a fiókodba
                                        </span>
                                        <a
                                            href='bejelentkezes'
                                            type="button"
                                            className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        >
                                            bejelentkezés
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className='flex gap-5 flex-col justify-center items-center w-screen h-screen'>
                        <div className='flex text-xl font-bold text-white  gap-2 items-center justify-center w-96 bg-red '>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                                1
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 scale-125 bg-slate-500 animate-bounce shadow-lg flex justify-center items-center'>
                                2
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                                3
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                                <FaHouse />
                            </div>
                        </div>

                        <div className='flex flex-col p-5 gap-3 sm:w-full md:w-full justify-center items-center text-white w-full lg:w-7/12 h-450 sm:h-[440px] rounded-lg shadow-lg bg-sky-700'>
                            <h1 className='text-3xl font-bold font-sans'>Regisztráció</h1>
                            <div className='w-full flex flex-col sm:flex-row justify-center items-center h-full'>
                                <TelszamSzuldat
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                                <div className='flex flex-col p-5 bg-sky-600 rounded-lg shadow-xl items-center justify-center w-full h-full'>
                                    <h1 className='text-2xl text-white font-bold'>Van már fiókod?</h1>
                                    <div className='flex text-center items-center gap-2 justify-center w-full h-20'>
                                        <span className='text-white font-sans font-semibold'>
                                            Jelentkezz be most a fiókodba
                                        </span>
                                        <a
                                            href='bejelentkezes'
                                            type="button"
                                            className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        >
                                            bejelentkezés
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className='flex gap-5 flex-col justify-center items-center w-screen h-screen'>
                        <div className='flex text-xl font-bold text-white  gap-2 items-center justify-center w-96 bg-red '>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                                1
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                                2
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 scale-125 bg-slate-500 animate-bounce flex shadow-lg justify-center items-center'>
                                3
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                                <FaHouse />
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 sm:w-full md:w-full justify-center items-center text-white w-full lg:w-7/12 h-450 sm:h-[440px] rounded-lg shadow-lg bg-sky-700'>
                            <h1 className='text-3xl font-bold font-sans'>Regisztráció</h1>
                            <div className='w-full flex flex-col sm:flex-row justify-center items-center h-full'>
                                <Jelszo
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                                <div className='flex flex-col p-5 bg-sky-600 rounded-lg shadow-xl items-center justify-center w-full h-full'>
                                    <h1 className='text-2xl text-white font-bold'>Van már fiókod?</h1>
                                    <div className='flex text-center items-center gap-2 justify-center w-full h-20'>
                                        <span className='text-white font-sans font-semibold'>
                                            Jelentkezz be most a fiókodba
                                        </span>
                                        <a
                                            href='bejelentkezes'
                                            type="button"
                                            className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        >
                                            bejelentkezés
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className='flex gap-5 flex-col justify-center items-center w-screen h-screen'>
                        <div className='flex text-xl font-bold text-white  gap-2 items-center justify-center w-96 bg-red '>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                                1
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                                2
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 bg-green-500 flex shadow-lg justify-center items-center'>
                                3
                            </div>
                            <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                            </div>
                            <div className='rounded-full w-11 h-11 p-3 scale-125 bg-slate-500 animate-bounce flex shadow-lg justify-center items-center'>
                                <FaHouse />
                            </div>
                        </div>
                        <div className='flex flex-col p-5 gap-3 sm:w-full md:w-full justify-center items-center text-white w-full lg:w-7/12 h-450 sm:h-[440px] rounded-lg shadow-lg bg-sky-700'>
                            <h1 className='text-3xl font-bold font-sans'>Regisztráció</h1>
                            <div className='w-full flex flex-col sm:flex-row justify-center items-center h-full'>
                                <Success
                                    values={values}
                                />
                                <div className='flex flex-col p-5 bg-sky-600 rounded-lg shadow-xl items-center justify-center w-full h-full'>
                                    <h1 className='text-2xl text-white font-bold'>Van már fiókod?</h1>
                                    <div className='flex text-center items-center gap-2 justify-center w-full h-20'>
                                        <span className='text-white font-sans font-semibold'>
                                            Jelentkezz be most a fiókodba
                                        </span>
                                        <a
                                            href='bejelentkezes'
                                            type="button"
                                            className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        >
                                            bejelentkezés
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
        }
    }
}