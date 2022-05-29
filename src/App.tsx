import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {getJsonplaceholderType, JsonplaceholderAPI} from "./api/JsonplaceholderAPI";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store";
import {getJSPACThunk} from "./reducers/JsonplaceholderReducer";
import {light} from "@mui/material/styles/createPalette";

function App() {
    let dispatch = useDispatch()
    let data = useSelector<rootReducerType, Array<getJsonplaceholderType>>(state => state.jsp)
    console.log(data)

    //прозвон
    // useEffect(()=>{
    //    JsonplaceholderAPI.getJsonplaceholder()
    //        .then((res)=>{
    //            console.log(res.data)
    //        })
    // },[])

    useEffect(() => {
        dispatch(getJSPACThunk())
    }, [])

    return (
        <div className="App">
            <ul>
                {data.map(el => {
                    return (
                        <li>
                            <span>{el.userId} </span>
                            <span> - {el.id} </span>
                            <span> - {el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;

// ------------------------------------------ГОРЯЧИЕ КЛАВИШИ------------------------------------------------
//
//     shift+f6    -переименовать везде
// Ctrl+shift+v    –достать из буфера
// Ctrl+shift+n    –глобальный поиск
// Ctrl+space –подсказать путь в импорте
//
// -----------------------------------------ГОРЯЧИЕ БИБЛИОТЕКИ--------------------------------------------
//
//     yarn add uuid
// yarn add @types/uuid
// yarn create react-app newapp --template typescript
// yarn add react-router-dom
// yarn add @types/react-router-dom
// yarn add redux react-redux @types/react-redux
// yarn add axios
// yarn add redux-thunk
// yarn add formik
// yarn add @reduxjs/toolkit
// -команды для Material UI:
//     yarn add @mui/material @emotion/react @emotion/styled
// yarn add @mui/icons-material
// -обновление TS если Material UI не пошел
// -yarn add typescript
//
// -styled-components
// yarn add styled-components
// yarn add @types/styled-components
// yarn add @reduxjs/toolkit
//
// Heroku
// https://create-react-app.dev/docs/deployment/#heroku
//     https://github.com/mars/create-react-app-buildpack    -вставляй в хероку (settings-AddBuildPack)
//         Deploy-GitHub - repo name - connect - Enable automatic deploy - Deploy Branch
