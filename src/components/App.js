import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";

function App() {

    const [state, setState] = useState({
       first: 0,
       second: 0,
       result: null,
    });

    const [error, setError] = useState(null);

    function handleFirst(e) {
        let value = parseInt(e.target.value);

        if(value < 0 || value > 255 || !Number.isInteger(value)){
            setError("Must be an integer greater than 255 but less than 0");
            return;
        }

        setError(null);

        setState(state => ({
            ...state,
            first: value,
        }))
    }

    function handleSecond(e) {
        let value = parseInt(e.target.value);

        if(value < 0 || value > 255 || !Number.isInteger(value)){
            setError("Must be an integer greater than 255 but less than 0");
            return;
        }

        setError(null);

        setState(state => ({
            ...state,
            second: value,
        }))
    }

    function handleSubmit() {
        setError(null);

        const query = new URLSearchParams({ first: state.first, second: state.second });

        axios
            .get( API_URL + "/api/multiply?" + query.toString())
            .then(res => {
                try{
                    setState(state => ({
                        ...state,
                        result: res.data.data.result,
                    }))
                }catch(err) {
                    console.log(err);

                    setError("There was an issue with setting result.");
                }
            })
            .catch(err => {
                console.log(err);

                setError("There was an issue with the API.");
            })
    }

    return (
        <div className="container">
            <header className="header">
                <Link to="/">
                    Multiplier
                </Link>
            </header>
            <div className="content">
                <p>Enter numbers:</p>
                <div className="input">
                    <input placeholder="First number"
                           autoComplete="false"
                           type="number"
                           onChange={handleFirst}
                           value={state.first} />
                </div>
                <div className="input">
                    <input placeholder="First number"
                           autoComplete="false"
                           type="number"
                           onChange={handleSecond}
                           value={state.second} />
                </div>
                <div className="input">
                    <button type="button"
                            onClick={handleSubmit}
                            disabled={
                                !Number.isInteger(state.first)
                                ||
                                !Number.isInteger(state.second)
                            }>
                        Submit
                    </button>
                </div>
            </div>
            {
                error !== null &&
                <div className="content">
                    <div className="banner error">
                        <p>{error}</p>
                    </div>
                </div>
            }
            {
                state.result !== null &&
                <div className="content">
                    <div className="banner">
                        <h3>Result:</h3>
                        <p>{state.result}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
