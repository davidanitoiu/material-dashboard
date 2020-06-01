import cardData from '@data/cardData.json';
import { createReducer } from "@reduxjs/toolkit"

const initialState = [ ...cardData ]

export const cardContent = createReducer(initialState, {});

export const actions = {}
