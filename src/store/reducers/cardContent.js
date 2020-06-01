import cardData from '@data/cardData.json';
import { createReducer } from "@reduxjs/toolkit"

export const initialState = [ ...cardData ]

export const cardContent = createReducer(initialState, {});
