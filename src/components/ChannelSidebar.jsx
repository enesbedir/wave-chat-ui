import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Collapse,
  Divider,
  IconButton,
  Avatar,
  alpha,
  Badge,
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicIcon from '@mui/icons-material/Mic';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { motion } from 'framer-motion';

const ChannelSidebar = ({ currentServer, currentChannel, setCurrentChannel }) => {
  const [openCategories, setOpenCategories] = useState({
    'KANALLAR': true,
    'SES KANALLARI': true,
    'ÖZEL MESAJLAR': false
  });

  const toggleCategory = (category) => {
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category]
    });
  };

  const channels = [
    { id: 'genel', name: 'genel', category: 'KANALLAR', unread: false, mentions: 0, type: 'text' },
    { id: 'duyurular', name: 'duyurular', category: 'KANALLAR', unread: true, mentions: 3, type: 'text' },
    { id: 'topluluk', name: 'topluluk', category: 'KANALLAR', unread: true, mentions: 0, type: 'text' },
    { id: 'yardım', name: 'yardım', category: 'KANALLAR', unread: false, mentions: 0, type: 'text' },
    { id: 'genel-ses', name: 'Genel Sohbet', category: 'SES KANALLARI', users: 3, type: 'voice' },
    { id: 'müzik', name: 'Müzik', category: 'SES KANALLARI', users: 1, type: 'voice' },
    { id: 'oyun', name: 'Oyun', category: 'SES KANALLARI', users: 0, type: 'voice' },
  ];

  const directMessages = [
    { id: 'user1', name: 'Ali Yılmaz', avatar: 'A', status: 'online', unread: true },
    { id: 'user2', name: 'Mehmet Demir', avatar: 'M', status: 'offline', unread: false },
    { id: 'user3', name: 'Zeynep Kaya', avatar: 'Z', status: 'online', unread: false },
  ];

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      color: 'text.secondary'
    }}>
      {/* Sunucu Başlığı */}
      <Box sx={{ 
        px: 2, 
        py: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'background.darker',
      }}>
        <Typography variant="h6" color="text.primary" fontWeight="600">
          {currentServer}
        </Typography>
        <IconButton size="small">
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
      
      {/* Arama */}
      <Box sx={{ px: 2, py: 1.5 }}>
        <TextField
          placeholder="Ara..."
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'background.darker',
              borderRadius: 2,
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            },
          }}
        />
      </Box>

      {/* Kanal Listesi */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', px: 1 }}>
        {/* Text Kanalları */}
        <List component="nav" disablePadding>
          <ListItem 
            disablePadding 
            sx={{ 
              '&:hover': { 
                '& .category-add-btn': { 
                  opacity: 1 
                } 
              } 
            }}
          >
            <ListItemButton 
              onClick={() => toggleCategory('KANALLAR')} 
              sx={{ 
                minHeight: 36, 
                px: 2, 
                py: 0 
              }}
            >
              {openCategories['KANALLAR'] ? 
                <ExpandMoreIcon fontSize="small" sx={{ mr: 1 }} /> : 
                <ExpandLessIcon fontSize="small" sx={{ mr: 1 }} />
              }
              <ListItemText 
                primary="KANALLAR" 
                primaryTypographyProps={{ 
                  variant: 'caption', 
                  fontWeight: 'bold', 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  letterSpacing: '0.5px'
                }} 
              />
              <IconButton 
                size="small" 
                className="category-add-btn"
                sx={{ 
                  opacity: 0, 
                  transition: 'opacity 0.2s',
                  '&:hover': { 
                    backgroundColor: alpha('#fff', 0.1) 
                  }
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          
          <Collapse in={openCategories['KANALLAR']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {channels
                .filter(channel => channel.category === 'KANALLAR')
                .map(channel => (
                  <ListItem key={channel.id} disablePadding>
                    <ListItemButton 
                      selected={currentChannel === channel.id}
                      onClick={() => setCurrentChannel(channel.id)}
                      sx={{ 
                        minHeight: 36,
                        pl: 2, 
                        pr: 1,
                        borderRadius: 1,
                        mb: 0.5,
                        color: channel.unread ? 'text.primary' : 'text.secondary',
                        '&.Mui-selected': {
                          backgroundColor: 'background.active',
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <TagIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={channel.name} 
                        primaryTypographyProps={{ 
                          fontWeight: channel.unread ? 600 : 400,
                          fontSize: '0.9rem'
                        }} 
                      />
                      {channel.mentions > 0 && (
                        <Chip 
                          label={channel.mentions} 
                          color="error" 
                          size="small"
                          sx={{ 
                            height: 20, 
                            fontSize: '0.7rem',
                            fontWeight: 'bold'
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Collapse>

          {/* Ses Kanalları */}
          <ListItem 
            disablePadding 
            sx={{ 
              mt: 1,
              '&:hover': { 
                '& .category-add-btn': { 
                  opacity: 1 
                } 
              } 
            }}
          >
            <ListItemButton 
              onClick={() => toggleCategory('SES KANALLARI')} 
              sx={{ 
                minHeight: 36, 
                px: 2, 
                py: 0 
              }}
            >
              {openCategories['SES KANALLARI'] ? 
                <ExpandMoreIcon fontSize="small" sx={{ mr: 1 }} /> : 
                <ExpandLessIcon fontSize="small" sx={{ mr: 1 }} />
              }
              <ListItemText 
                primary="SES KANALLARI" 
                primaryTypographyProps={{ 
                  variant: 'caption', 
                  fontWeight: 'bold', 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  letterSpacing: '0.5px'
                }} 
              />
              <IconButton 
                size="small" 
                className="category-add-btn"
                sx={{ 
                  opacity: 0, 
                  transition: 'opacity 0.2s',
                  '&:hover': { 
                    backgroundColor: alpha('#fff', 0.1) 
                  }
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          
          <Collapse in={openCategories['SES KANALLARI']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {channels
                .filter(channel => channel.category === 'SES KANALLARI')
                .map(channel => (
                  <ListItem key={channel.id} disablePadding>
                    <ListItemButton 
                      sx={{ 
                        minHeight: 36,
                        pl: 2, 
                        pr: 1,
                        borderRadius: 1,
                        mb: 0.5
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <VolumeUpIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={channel.name} 
                        primaryTypographyProps={{ 
                          fontSize: '0.9rem'
                        }} 
                      />
                      {channel.users > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <GroupIcon fontSize="small" sx={{ mr: 0.5 }} />
                          <Typography variant="caption">{channel.users}</Typography>
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Collapse>
          
          {/* Özel Mesajlar */}
          <ListItem 
            disablePadding 
            sx={{ 
              mt: 1,
              '&:hover': { 
                '& .category-add-btn': { 
                  opacity: 1 
                } 
              } 
            }}
          >
            <ListItemButton 
              onClick={() => toggleCategory('ÖZEL MESAJLAR')} 
              sx={{ 
                minHeight: 36, 
                px: 2, 
                py: 0 
              }}
            >
              {openCategories['ÖZEL MESAJLAR'] ? 
                <ExpandMoreIcon fontSize="small" sx={{ mr: 1 }} /> : 
                <ExpandLessIcon fontSize="small" sx={{ mr: 1 }} />
              }
              <ListItemText 
                primary="ÖZEL MESAJLAR" 
                primaryTypographyProps={{ 
                  variant: 'caption', 
                  fontWeight: 'bold', 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  letterSpacing: '0.5px'
                }} 
              />
              <IconButton 
                size="small" 
                className="category-add-btn"
                sx={{ 
                  opacity: 0, 
                  transition: 'opacity 0.2s',
                  '&:hover': { 
                    backgroundColor: alpha('#fff', 0.1) 
                  }
                }}
              >
                <PersonAddIcon fontSize="small" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          
          <Collapse in={openCategories['ÖZEL MESAJLAR']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {directMessages.map(user => (
                <ListItem key={user.id} disablePadding>
                  <ListItemButton 
                    sx={{ 
                      minHeight: 42,
                      pl: 2, 
                      pr: 1,
                      borderRadius: 1,
                      mb: 0.5,
                      color: user.unread ? 'text.primary' : 'text.secondary',
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        color={user.status === 'online' ? 'success' : 'default'}
                        sx={{ '.MuiBadge-badge': { border: '2px solid', borderColor: 'background.paper' } }}
                      >
                        <Avatar sx={{ width: 28, height: 28, fontSize: '0.9rem' }}>{user.avatar}</Avatar>
                      </Badge>
                    </ListItemIcon>
                    <ListItemText 
                      primary={user.name} 
                      primaryTypographyProps={{ 
                        fontWeight: user.unread ? 600 : 400,
                        fontSize: '0.9rem'
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
      
      {/* Kullanıcı Bölümü */}
      <Box sx={{ 
        p: 1, 
        mt: 'auto', 
        backgroundColor: 'background.darker',
        borderTop: '1px solid',
        borderColor: 'background.darker',
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          p: 1,
          borderRadius: 1,
          '&:hover': { 
            backgroundColor: alpha('#fff', 0.05) 
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color="success"
              sx={{ '.MuiBadge-badge': { border: '2px solid', borderColor: 'background.paper' } }}
            >
              <Avatar sx={{ width: 36, height: 36 }}>K</Avatar>
            </Badge>
            <Box sx={{ ml: 1.5 }}>
              <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                Kullanıcı
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1 }}>
                #1234
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <MicIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <HeadphonesIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <SettingsIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelSidebar;