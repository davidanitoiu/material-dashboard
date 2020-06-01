import chartData from 'Resources/data/chartData.js';
import { createReducer } from "@reduxjs/toolkit"

export const initialState = [ ...chartData ]

export const chartContent = createReducer(initialState, {});
