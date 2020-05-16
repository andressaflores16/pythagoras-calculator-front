import React, { useState } from 'react';
import { CardContent, Button, CircularProgress, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import triangle from '../../images/angle-vector-trigonometry-4-transparent.png';
import { CssTextField } from '../../styles/index'
import {
    TriangleImage, CalculatorCointainer,
    CalculatorScreen, CalculatorBody,
    Keypad, Result, SpecialButtons, InputContainer
} from '../../styles/styledComponents'
import axios from 'axios';


// estilizacão do loading
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const keypadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function CalculatorBase(props) {
    //react hooks e lógicas
    const classes = useStyles();
    const [catetoOposto, setCatetoOposto] = useState("")
    const [catetoAdjacente, setCatetoAdjacente] = useState("")
    const [hipotenusa, setHipotenusa] = useState("")
    const [focusedTextField, setFocusedTextField] = useState("")
    const [loading, setLoading] = useState(false)

    const keypadButtons = keypadNumbers.map((number) => {
        return (
            <Button key={number} variant="contained" color="primary" onClick={() => {
                onKeypadNumberClick(number)
            }}>
                {number}
            </Button>
        )
    })

    const onKeypadNumberClick = (key) => {
        if (focusedTextField === "catetoOposto") {
            setCatetoOposto(catetoOposto.trim() + `${key}`)
        } else if (focusedTextField === "catetoAdjacente") {
            setCatetoAdjacente(catetoAdjacente.trim() + `${key}`)
        }
    }

    const deleteInputs = () => {
        setCatetoOposto("")
        setCatetoAdjacente("")
        setHipotenusa("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            'cat_op': Number(catetoOposto),
            'cat_adj': Number(catetoAdjacente)
        }

        axios.post('https://atlas-231814.appspot.com/calcula', data)
            .then(response => {
                setLoading(false)
                setHipotenusa(response.data.hip)
            })
            .catch(error => alert("Houve um erro ao calcular")
            )
    }

    //renderização da calculadora

    return (
        <section>
            {loading &&       
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            }
            <CalculatorCointainer elevation={8}>
                <CardContent>

                    <CalculatorScreen>
                        <TriangleImage src={triangle} />
                        <Result
                            label={(hipotenusa === "") ? "Calcule a hipotenusa" : "Sua hipotenusa é:"}
                            value={hipotenusa}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            color="primary"
                        />
                    </CalculatorScreen>
                    <CalculatorBody>
                        <Keypad>
                            {keypadButtons}

                            <SpecialButtons
                                variant="contained"
                                color="secondary"
                                onClick={() => deleteInputs()}>
                                Limpar
                            </SpecialButtons>
                        </Keypad>

                        <InputContainer
                            autoComplete="off"
                            onSubmit={handleSubmit}>
                            <CssTextField
                                variant="outlined"
                                label="Cateto Oposto (a)"
                                type="number"
                                color="secondary"
                                value={catetoOposto}
                                onChange={(event) => setCatetoOposto(event.target.value)}
                                onFocus={() => { setFocusedTextField("catetoOposto") }}
                                required
                            />
                            <br />
                            <CssTextField
                                variant="outlined"
                                label="Cateto Adjacente (b)"
                                type="number"
                                color="secondary"
                                value={catetoAdjacente}
                                onChange={(event) => setCatetoAdjacente(event.target.value)}
                                onFocus={() => { setFocusedTextField("catetoAdjacente") }}
                                required
                            />
                            <br />
                            <SpecialButtons
                                variant="contained"
                                color="secondary"
                                type="submit">
                                Calcular
                            </SpecialButtons>
                        </InputContainer>
                    </CalculatorBody>
                </CardContent>
            </CalculatorCointainer>
        </section>
    )
}

export default CalculatorBase;