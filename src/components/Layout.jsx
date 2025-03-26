import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, Typography, Divider, List } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChannelSidebar from './ChannelSidebar';

const drawerWidth = 80;
const channelDrawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${drawerWidth + channelDrawerWidth}px`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }),
);

const Layout = () => {
  const [currentServer, setCurrentServer] = useState('Wave');
  const [currentChannel, setCurrentChannel] = useState('genel');

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <CssBaseline />
      
      {/* Ana Sidebar - Sunucu Listesi */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme => theme.palette.background.darker,
            borderRight: 'none',
          },
        }}
      >
        <Sidebar currentServer={currentServer} setCurrentServer={setCurrentServer} />
      </Drawer>
      
      {/* Kanal Listesi Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: channelDrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: channelDrawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme => theme.palette.background.paper,
            borderRight: 'none',
            marginLeft: `${drawerWidth}px`,
          },
        }}
      >
        <ChannelSidebar 
          currentServer={currentServer} 
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
        />
      </Drawer>
      
      {/* Ana İçerik */}
      <Main>
        <Topbar currentServer={currentServer} currentChannel={currentChannel} />
        <Box 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            overflow: 'auto',
            backgroundColor: theme => theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
};

export default Layout;