import React from 'react';
import { 
  Box, 
  IconButton, 
  Typography, 
  Divider, 
  Badge,
  Tooltip,
  useTheme
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { motion } from 'framer-motion';

const Topbar = ({ currentServer, currentChannel }) => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      px: 2, 
      py: 1.5, 
      backgroundColor: theme.palette.background.paper,
      borderBottom: '1px solid',
      borderColor: theme.palette.background.darker
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TagIcon sx={{ mr: 1, color: theme.palette.text.secondary }} />
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
          {currentChannel}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography variant="body2" color="text.secondary">
          Burası #{currentChannel} kanalının açıklamasıdır. Burada konuyla ilgili tartışmalar yapabilirsiniz.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Bildirimler" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Sabitlenmiş Mesajlar" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <PushPinIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Üye Listesi" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <PeopleIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
        
        <Box 
          sx={{ 
            mx: 1, 
            px: 1.5, 
            py: 0.5, 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: theme.palette.background.darker,
            borderRadius: 1,
            '&:hover': { backgroundColor: theme.palette.background.hover }
          }}
        >
          <SearchIcon fontSize="small" sx={{ mr: 1, color: theme.palette.text.disabled }} />
          <Typography variant="body2" color="text.disabled" sx={{ fontSize: '0.8rem' }}>
            Ara
          </Typography>
        </Box>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Yardım" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Topbar;