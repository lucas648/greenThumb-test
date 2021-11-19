import { selectionTypes } from './enums';
import { createAction, props } from "@ngrx/store";

export const selectSun = createAction(
  selectionTypes.sun,
  props<{sun: string}>()
)

export const selectWater = createAction(
  selectionTypes.water,
  props<{water: string}>()
)

export const selectPets = createAction(
 selectionTypes.pets,
 props<{pets: string}>()
)