import { set_theme } from '../slices/uiSlice';
import { AppDispatch } from './../store';



export const setThemeSwitch = (checked: boolean) => (dispatch: AppDispatch) => {

    localStorage.setItem('theme', `${checked}`)
    dispatch(set_theme(checked))
}


export const getThemeLocalStorage = () => (dispatch: AppDispatch) => {

    const checked = localStorage.getItem('theme')

    if (checked === null) {
        localStorage.setItem('theme', `true`)
        dispatch(set_theme(true))
    } 

    if(checked === 'false'){
        dispatch(set_theme(false))
    }

    if(checked === 'true'){
        dispatch(set_theme(true))
    }
}