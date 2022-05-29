import {getJsonplaceholderType, JsonplaceholderAPI} from "../api/JsonplaceholderAPI";
import {Dispatch} from "redux";

let initialState: Array<getJsonplaceholderType> = [
    {
        userId: 0,
        id: 0,
        title: 'q',
        body: 'q'
    }
]

export const JsonplaceholderReducer = (state = initialState, action: JSPRType) => {
    switch (action.type) {
        case 'GETJSP': {
            return [...action.payload.data]
        }
        default:
            return state
    }
}

type JSPRType = getJSPACType
type getJSPACType = ReturnType<typeof getJSPAC>
export const getJSPAC = (data: Array<getJsonplaceholderType>) => {
    console.log(data)
    return {
        type: 'GETJSP',
        payload: {
            data
        }
    }
}

export const getJSPACThunk = () => async (dispatch: Dispatch) => {
    try {
        let res = await JsonplaceholderAPI.getJsonplaceholder()
        // console.log(res.data)
        dispatch(getJSPAC(res.data))
    } catch {
        console.log('vse propalo')
    }
}

//прозвон через  .then
// export const getJSPACThunk = () => (dispatch: Dispatch) => {
//     JsonplaceholderAPI.getJsonplaceholder()
//         .then((res) => {
//             console.log(res.data)
//         })
// }