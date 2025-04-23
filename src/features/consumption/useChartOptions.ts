import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material';
import { useThemeStore } from '../../store/themeStore';

export const useChartOptions = (categories: string[]): ApexOptions => {
  const theme = useTheme();
  const { mode } = useThemeStore();
  const isDark = mode === 'dark';

  return {
    chart: {
      id: 'energyChart',
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          reset: true,
        },
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      foreColor: isDark ? '#ccc' : '#333',
      background: 'transparent',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories,
      labels: {
        style: { colors: isDark ? '#ccc' : '#888' },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val} kWh`,
        style: { colors: isDark ? '#ccc' : '#888' },
      },
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light',
      y: {
        formatter: (val: number) => `${val} kWh`,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: isDark ? 'dark' : 'light',
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    colors: [theme.palette.primary.main],
  };
};
