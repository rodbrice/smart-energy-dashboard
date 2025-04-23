import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BoltIcon from '@mui/icons-material/Bolt';
import { useTranslation } from 'react-i18next';



const SuggestionPanel = () => {

  const { t } = useTranslation();
  const tips = t('tips', { returnObjects: true }) as string[];

  
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
        {t('energy_tips')}
        </Typography>
        <List>
          {tips.map((tip, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                {i % 2 === 0 ? <LightbulbIcon color="primary" /> : <BoltIcon color="secondary" />}
              </ListItemIcon>
              <ListItemText primary={tip} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SuggestionPanel;
