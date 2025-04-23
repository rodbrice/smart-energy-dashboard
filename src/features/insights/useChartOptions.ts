import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material';
import { useThemeStore } from '../../store/themeStore';

export const useChartOptions = (categories: string[]): ApexOptions => {
  const theme = useTheme();
  const { mode } = useThemeStore();
  const isDark = mode === 'dark';

  return {
    chart: {
      id: 'minimalBarChart',
      toolbar: { show: false },
      foreColor: isDark ? '#ddd' : '#333',
    },
    xaxis: {
      categories,
      labels: { style: { colors: isDark ? '#aaa' : '#666' } },
    },
    yaxis: {
      labels: {
        formatter: val => `${val} kWh`,
        style: { colors: isDark ? '#aaa' : '#666' },
      },
    },
    stroke: { width: 2 },
    tooltip: { theme: isDark ? 'dark' : 'light' },
    fill: {
      colors: [theme.palette.primary.main],
      opacity: 0.8,
    },
  };
};
