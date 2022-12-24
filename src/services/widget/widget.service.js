import { axiosInstance } from '@utils';

export const getWidgetData = async () => {
  const result = await axiosInstance.get(`widget.data.json`);

  return result;
};
