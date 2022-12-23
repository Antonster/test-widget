import { createSlice } from '@reduxjs/toolkit';

import * as widgetActions from './widget.actions';

const { reducer } = createSlice({
  name: 'widget',
  initialState: {
    pages: undefined,
    teams: undefined,
    stages: undefined,
    matches: undefined,
    filters: undefined,
    waiter: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(widgetActions.getWidgetData.pending, (state) => {
        state.waiter = true;
      })
      .addCase(widgetActions.getWidgetData.fulfilled, (state, action) => {
        const {
          pages,
          tournament: { teams, stages, matches, filters },
        } = action.payload;

        state.pages = pages;
        state.teams = teams;
        state.stages = stages;
        state.matches = matches;
        state.filters = filters;
        state.waiter = false;
      })
      .addCase(widgetActions.getWidgetData.rejected, (state, action) => {
        state.waiter = false;
        state.error = action.error.code;
      });
  },
});

export default reducer;
