import chartData from '@data/chartData';
import { createReducer } from "@reduxjs/toolkit"

const initialState = [ ...chartData ]

export const chartContent = createReducer(initialState, {});

export const actions = {}
