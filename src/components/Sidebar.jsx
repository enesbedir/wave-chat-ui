import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  Tooltip, 
  Avatar, 
  Divider,
  IconButton
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';

const StyledServerIcon = styled(Box)(({ theme, active }) => ({
  width: 48,
  height: 48,
  borderRadius: active ? '30%' : '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.background.lighter,
  color: theme.palette.text.primary,
  fontSize: 20,
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderRadius: '30%',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.primary.dark,
  }
}));

const ServerPill = styled(Box)(({ theme, active }) => ({
  position: 'absolute',
  left: 0,
  width: 4,
  height: active ? 36 : 8,
  backgroundColor: theme.palette.common.white,
  borderRadius: 4,
  transition: 'height 0.2s ease',
}));

const Sidebar = ({ currentServer, setCurrentServer }) => {
  const servers = [
    { id: 'Wave', name: 'Wave', avatar: 'W' },
    { id: 'React', name: 'React', avatar: 'R' },
    { id: 'Design', name: 'Design', avatar: 'D' },
    { id: 'Gaming', name: 'Gaming', avatar: 'G' },
    { id: 'Music', name: 'Music', avatar: 'M' },
  ];

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Ana Sayfa" placement="right" arrow>
            <IconButton 
              sx={{ 
                backgroundColor: 'secondary.main',
                '&:hover': { backgroundColor: 'secondary.dark' }
              }}
            >
              <img src="/wave-logo.png" alt="Wave" style={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>
        </motion.div>
      </Box>
      
      <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
      
      <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        {servers.map(server => (
          <ListItem 
            key={server.id} 
            disablePadding 
            sx={{ 
              mb: 1.5, 
              position: 'relative',
              width: 'auto'
            }}
          >
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {currentServer === server.id && (
                <ServerPill active={currentServer === server.id} />
              )}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Tooltip title={server.name} placement="right" arrow>
                  <StyledServerIcon 
                    active={currentServer === server.id ? 1 : 0}
                    onClick={() => setCurrentServer(server.id)}
                  >
                    {server.avatar}
                  </StyledServerIcon>
                </Tooltip>
              </motion.div>
            </Box>
          </ListItem>
        ))}
        
        <ListItem disablePadding sx={{ mt: 2, width: 'auto' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Sunucu Ekle" placement="right" arrow>
              <IconButton 
                sx={{ 
                  backgroundColor: 'background.lighter',
                  color: 'success.main',
                  '&:hover': { backgroundColor: 'background.active' }
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </motion.div>
        </ListItem>
        
        <ListItem disablePadding sx={{ mt: 1, width: 'auto' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Sunucu Keşfet" placement="right" arrow>
              <IconButton 
                sx={{ 
                  backgroundColor: 'background.lighter',
                  color: 'primary.main',
                  '&:hover': { backgroundColor: 'background.active' }
                }}
              >
                <ExploreIcon />
              </IconButton>
            </Tooltip>
          </motion.div>
        </ListItem>
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Profil" placement="right" arrow>
            <Avatar 
              sx={{ 
                width: 48, 
                height: 48, 
                cursor: 'pointer',
                backgroundColor: 'primary.dark',
                '&:hover': { boxShadow: '0 0 0 2px #8559da' } 
              }}
            >
              K
            </Avatar>
          </Tooltip>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Sidebar;