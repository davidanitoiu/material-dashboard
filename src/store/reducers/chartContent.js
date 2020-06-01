import chartData from '@data/chartData';
import { createReducer } from "@reduxjs/toolkit"

export const initialState = [ ...chartData ]

export const chartContent = createReducer(initialState, {});
