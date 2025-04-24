import { Card, CardContent, Typography, Box } from '@mui/material';
import { useEnergyStore } from '../../store/energyStore';
import ReactApexChart from 'react-apexcharts';
import { useChartOptions } from './useChartOptions';
import InsightsStats from './insightStats';
import { useTranslation } from 'react-i18next';

const InsightsPanel = () => {
  const { data } = useEnergyStore();
  const { t } = useTranslation();

  const total = data.reduce((sum, item) => sum + item.kWh, 0);
  const avg = (total / data.length).toFixed(2);
  const peak = Math.max(...data.map((item) => item.kWh)).toFixed(2);

  const chartOptions = useChartOptions(data.map(d => d.time));
  const chartSeries = [{
    name: 'kWh',
    data: data.map(d => d.kWh),
  }];

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <InsightsStats avg={avg} total={total.toFixed(2)} peak={peak} />

      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            {t('consumption_comparison')}
          </Typography>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={300}
            sx={{flexWrap: 'wrap'}}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default InsightsPanel;
