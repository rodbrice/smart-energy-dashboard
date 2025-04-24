import { Drawer, List, ListItemButton, ListItemIcon, useMediaQuery, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


const drawerWidth = 240;

const Sidebar = () => {

  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const drawerContent = (
    <Drawer variant="permanent" sx={{ width: 240, [`& .MuiDrawer-paper`]: { width: 240, top: "100px" } }}>
    <List>
          <ListItemButton component={Link} to="/" onClick={() => setMobileOpen(false)}>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary={t('dashboard')} />
      </ListItemButton>
      <ListItemButton component={Link} to="/insights" onClick={() => setMobileOpen(false)}>
        <ListItemIcon><InsightsIcon /></ListItemIcon>
        <ListItemText primary={t('insights')} />
      </ListItemButton>
    </List>
  </Drawer>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            onClick={() => setMobileOpen((prev) => !prev)}
            sx={{
              position: 'fixed',
              top: 90,
              left: 300,
              zIndex: 1300,
              backgroundColor: 'background.paper',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{ '& .MuiDrawer-paper': { width: drawerWidth, top: '64px' } }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              top: '64px',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;