import { createAsyncThunk } from '@reduxjs/toolkit';
import { widgetService } from '@services';

export const getWidgetData = createAsyncThunk('widget/get-widget-data', async () => {
  const result = await widgetService.getWidgetData();

  return result.data;
});
