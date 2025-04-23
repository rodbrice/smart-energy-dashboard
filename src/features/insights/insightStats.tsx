import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  avg: string;
  total: string;
  peak: string;
}

const InsightsStats = ({ avg, total, peak }: Props) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h5" gutterBottom>
            {t('insights')}
          </Typography>
          <Typography variant="subtitle1">
            {t('average')}: <strong>{avg} kWh</strong>
          </Typography>
          <Typography variant="subtitle1">
            {t('total')}: <strong>{total} kWh</strong>
          </Typography>
          <Typography variant="subtitle1">
            {t('peak')}: <strong>{peak} kWh</strong>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default InsightsStats;
