import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Box } from '@mui/material';
import { useEnergyStore } from '../store/energyStore';
import { useChartOptions } from '../features/consumption/useChartOptions';
import ChartHeader from './consumption/chatHeader';
import ChartLoader from '../components/chartLoader';


const EnergyChart = () => {
  const { view, data, loading, fetchData } = useEnergyStore();

  useEffect(() => {
    fetchData(view);
  }, [view]);

  const chartOptions = useChartOptions(data.map(d => d.time));
  const chartSeries = [{ name: 'kWh', data: data.map(d => d.kWh) }];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <ChartHeader view={view} />
        {loading ? (
          <ChartLoader />
        ) : (
          <Box sx={{ width: '100%', height: 300 }}>
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default EnergyChart;