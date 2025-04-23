import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Sidebar = () => {

  const { t } = useTranslation();
    return(
        <Drawer variant="permanent" sx={{ width: 240, [`& .MuiDrawer-paper`]: { width: 240, top: "64px" } }}>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary={t('dashboard')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/insights">
          <ListItemIcon><InsightsIcon /></ListItemIcon>
          <ListItemText primary={t('insights')} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;