import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeStore } from '../store/themeStore';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const theme = useTheme(); 

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          {t('dashboard')}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={t('toggle_theme')}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            style={{
              background: theme.palette.mode === 'dark' ? '#333' : '#fff',
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              border: '1px solid',
              borderColor: theme.palette.divider,
              borderRadius: 4,
              padding: '2px 8px',
              fontSize: '0.875rem',
              marginLeft: '1rem',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="pt">PT</option>
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
