import { RequestPlants } from './../interfaces/IRequests';
import { selectPets, selectSun, selectWater } from './actions';
import { createReducer, on } from "@ngrx/store";

const initialState : RequestPlants =  { 
  sun: '',
  water: '',
  pets: ''
}

export const sunReducer  = createReducer(
  initialState,
  on(selectSun, (state, {sun})=>({...state, sun})),
  on(selectWater, (state, {water})=>({...state, water})),
  on(selectPets, (state, {pets})=>({...state, pets}))
)