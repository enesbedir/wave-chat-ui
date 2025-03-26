import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReplyIcon from '@mui/icons-material/Reply';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PushPinIcon from '@mui/icons-material/PushPin';
import FlagIcon from '@mui/icons-material/Flag';
import { motion } from 'framer-motion';

const MessageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  display: 'flex',
  position: 'relative',
  '&:hover': {
    backgroundColor: theme.palette.background.hover,
    '& .message-actions': {
      opacity: 1,
      visibility: 'visible',
    }
  }
}));

const MessageActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
}));

const ChatMessage = ({ message }) => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const menuOpen = Boolean(menuAnchor);
  
  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  
  return (
    <MessageWrapper>
      <Avatar 
        src={message.user.avatar} 
        alt={message.user.name}
        sx={{ 
          width: 40, 
          height: 40, 
          mr: 2,
          bgcolor: message.user.color || 'primary.main' 
        }}
      >
        {message.user.name.charAt(0)}
      </Avatar>
      
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: 600, 
              color: message.user.color || 'primary.light',
              mr: 1
            }}
          >
            {message.user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {message.timestamp}
          </Typography>
          {message.edited && (
            <Typography variant="caption" color="text.disabled" sx={{ ml: 1 }}>
              (düzenlendi)
            </Typography>
          )}
        </Box>
        
        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {message.content}
        </Typography>
        
        {message.attachments && message.attachments.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {message.attachments.map((attachment, index) => (
              <Box 
                key={index}
                component="img"
                src={attachment.url}
                alt={`Attachment ${index + 1}`}
                sx={{ 
                  maxWidth: 300, 
                  maxHeight: 225, 
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'background.lighter'
                }}
              />
            ))}
          </Box>
        )}
        
        {message.reactions && message.reactions.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {message.reactions.map((reaction, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  bgcolor: 'background.lighter',
                  borderRadius: 4,
                  px: 1,
                  py: 0.5,
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'background.active' }
                }}
              >
                <Typography variant="body2" sx={{ mr: 0.5 }}>
                  {reaction.emoji}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {reaction.count}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      
      <MessageActions className="message-actions">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Yanıtla" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <ReplyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Tepki Ekle" arrow>
            <IconButton size="small" sx={{ mx: 0.5 }}>
              <EmojiEmotionsIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tooltip title="Daha Fazla" arrow>
            <IconButton 
              size="small" 
              sx={{ mx: 0.5 }}
              onClick={handleMenuClick}
              aria-controls={menuOpen ? 'message-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </motion.div>
      </MessageActions>
      
      <Menu
        id="message-menu"
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'message-more-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <ReplyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Yanıtla</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Düzenle</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <PushPinIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sabitle</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Kopyala</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <ListItemIcon sx={{ color: 'error.main' }}>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sil</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <FlagIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bildir</ListItemText>
        </MenuItem>
      </Menu>
    </MessageWrapper>
  );
};

export default ChatMessage;