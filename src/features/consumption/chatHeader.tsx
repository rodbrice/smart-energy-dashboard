import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  view: 'hour' | 'day' | 'month';
}

const ChartHeader = ({ view }: Props) => {
  const { t } = useTranslation();

  const viewLabel = () => {
    switch (view) {
      case 'day': return t('by_day');
      case 'month': return t('by_month');
      default: return t('by_hour');
    }
  };

  return (
    <Typography variant="h6" gutterBottom>
      {t('energy_consumption')} ({viewLabel()})
    </Typography>
  );
};

export default ChartHeader;
