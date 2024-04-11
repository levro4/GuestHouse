import React, { useState } from 'react'
import Hetfo from './hetfo'
import Kedd from './kedd'
import Szerda from './szerda'
import Csutortok from './csutortok'
import Pentek from './pentek'
import Szombat from './szombat'
import Vasarnap from './vasarnap'
import Veglegesites from './veglegesites'

const Tablaszerkmain = () => {
    const [hetfo, setHetfo] = useState({nap:"Hetfő",a:{},b:{},c:{}})
    const [kedd, setKedd] = useState({nap:"Kedd",a:{},b:{},c:{}})
    const [szerda, setSzerda] = useState({nap:"Szerda",a:{},b:{},c:{}})
    const [csutortok, setCutsortok] = useState({nap:"Csütörtök",a:{},b:{},c:{}})
    const [pentek, setPentek] = useState({nap:"Péntek",a:{},b:{},c:{}})
    const [szobaszam, setSzobaszam] = useState({nap:"Szombat",a:{},b:{},c:{}})
    const [vasarnap, setVasarnap] = useState({nap:"Vasárnap",a:{},b:{},c:{}})
    const [step, setStep] = useState(1)
    
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }

    const writeHetfoData = (e) => {
        setHetfo((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
        console.log(hetfo)
    }
    const writeKeddData = (e) => {
        setKedd((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }
    const writeSzerdaData = (e) => {
        setSzerda((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }
    const writeCsutortokData = (e) => {
        setCutsortok((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }
    const writePentekData = (e) => {
        setPentek((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    }
    const writeSzobaszamData = (e) => {
        setSzobaszam((prevState) => ({...prevState, [e.target.id]: e.target.value }));
    }
    const writeVasarnapData = (e) => {
        setVasarnap((prevState) => ({...prevState, [e.target.id]: e.target.value }));
    }
    switch (step){
        case 1:
            return (
                <Hetfo 
                nextStep={nextStep}
                writeData={writeHetfoData}/>
                )
        case 2:
            return (
                <Kedd
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writeKeddData}/>
            )
        case 3:
            return (
                <Szerda
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writeSzerdaData}/>
            )
        case 4:
            return (
                <Csutortok
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writeCsutortokData}/>
            )
        case 5:
            return (
                <Pentek
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writePentekData}/>
            )
        case 6:
            return (
                <Szombat
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writeSzobaszamData}/>
            )
        case 7:
            return (
                <Vasarnap
                prevStep={prevStep}
                nextStep={nextStep}
                writeData={writeVasarnapData}/>
            )
            case 8:
                return (
                    <Veglegesites
                    hetfoData={hetfo}
                    keddData={kedd}
                    szerdaData={szerda}
                    csutortokData={csutortok}
                    pentekData={pentek}
                    szombatData={szobaszam}
                    vasarnapData={vasarnap}
                    prevStep={prevStep}/>
                )
        default:
    }
}

export default Tablaszerkmain