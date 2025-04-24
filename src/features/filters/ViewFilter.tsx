import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';
import { useEnergyStore } from '../../store/energyStore';

import { useTranslation } from 'react-i18next';



const ViewFilter = () => {
  const { view, setView } = useEnergyStore();

  const { t } = useTranslation();

  const handleChange = (_: unknown, newView: string | null) => {
    if (newView) setView(newView as any);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {t('view_type')}
      </Typography>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        color="primary"
        size="small"
        sx={{flexWrap: 'wrap'}}
      >
        <ToggleButton value="hour">{t('hour')}</ToggleButton>
        <ToggleButton value="day">{t('day')}</ToggleButton>
        <ToggleButton value="month">{t('month')}</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ViewFilter;
