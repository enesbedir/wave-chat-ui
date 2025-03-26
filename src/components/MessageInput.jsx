import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  InputAdornment, 
  Tooltip,
  alpha,
  Menu,
  MenuItem,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const EMOJIS = ['😀', '😂', '😍', '🤔', '👍', '👎', '🎉', '❤️', '🔥', '⭐', '✅', '❌', '🚀'];

const MessageInput = ({ currentChannel }) => {
  const theme = useTheme();
  const [message, setMessage] = useState('');
  const [emojiAnchor, setEmojiAnchor] = useState(null);
  const [addAttachmentAnchor, setAddAttachmentAnchor] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  
  const emojiMenuOpen = Boolean(emojiAnchor);
  const attachmentMenuOpen = Boolean(addAttachmentAnchor);
  
  const handleEmojiClick = (event) => {
    setEmojiAnchor(event.currentTarget);
  };
  
  const handleEmojiClose = () => {
    setEmojiAnchor(null);
  };
  
  const handleAddEmoji = (emoji) => {
    setMessage(prev => prev + emoji);
    handleEmojiClose();
  };
  
  const handleAttachmentClick = (event) => {
    setAddAttachmentAnchor(event.currentTarget);
  };
  
  const handleAttachmentClose = () => {
    setAddAttachmentAnchor(null);
  };
  
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <Box 
      sx={{ 
        p: 2, 
        backgroundColor: theme.palette.background.paper,
        borderTop: '1px solid',
        borderColor: theme.palette.background.darker,
      }}
    >
      {isFocused && (
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 1,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            backgroundColor: alpha(theme.palette.background.darker, 0.5)
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Kalın" arrow>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <FormatBoldIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="İtalik" arrow>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <FormatItalicIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Altı Çizili" arrow>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <FormatUnderlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Üstü Çizili" arrow>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <FormatStrikethroughIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tooltip title="Kod" arrow>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <CodeIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </motion.div>
        </Box>
      )}
      
      <TextField
        fullWidth
        multiline
        maxRows={6}
        variant="outlined"
        placeholder={`#${currentChannel} kanalına mesaj yaz...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Tooltip title="Ekle" arrow>
                  <IconButton 
                    edge="start" 
                    onClick={handleAttachmentClick}
                    aria-controls={attachmentMenuOpen ? 'attachment-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={attachmentMenuOpen ? 'true' : undefined}
                  >
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </motion.div>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Tooltip title="Dosya Ekle" arrow>
                    <IconButton sx={{ mx: 0.5 }}>
                      <AttachFileIcon />
                    </IconButton>
                  </Tooltip>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Tooltip title="GIF" arrow>
                    <IconButton sx={{ mx: 0.5 }}>
                      <GifIcon />
                    </IconButton>
                  </Tooltip>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Tooltip title="İfade" arrow>
                    <IconButton 
                      sx={{ mx: 0.5 }}
                      onClick={handleEmojiClick}
                      aria-controls={emojiMenuOpen ? 'emoji-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={emojiMenuOpen ? 'true' : undefined}
                    >
                      <SentimentSatisfiedAltIcon />
                    </IconButton>
                  </Tooltip>
                </motion.div>
                
                {message.trim() && (
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Tooltip title="Gönder" arrow>
                      <IconButton 
                        sx={{ 
                          mx: 0.5, 
                          backgroundColor: 'primary.main',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                          }
                        }}
                        onClick={handleSendMessage}
                      >
                        <SendIcon />
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                )}
              </Box>
            </InputAdornment>
          ),
          sx: {
            backgroundColor: theme.palette.background.darker,
            borderRadius: 2,
            padding: theme.spacing(1, 1, 1, 0.5),
            '& fieldset': { border: 'none' }
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused': {
              backgroundColor: alpha(theme.palette.background.lighter, 0.1),
            },
          }
        }}
      />
      
      {/* Emoji Menüsü */}
      <Menu
        id="emoji-menu"
        anchorEl={emojiAnchor}
        open={emojiMenuOpen}
        onClose={handleEmojiClose}
        MenuListProps={{
          'aria-labelledby': 'emoji-button',
        }}
        PaperProps={{
          sx: {
            maxWidth: 280,
            mt: 1,
            p: 1,
          }
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" sx={{ px: 1, mb: 1 }}>
          İfadeler
        </Typography>
        <Grid container spacing={1}>
          {EMOJIS.map((emoji, index) => (
            <Grid item key={index}>
              <MenuItem 
                onClick={() => handleAddEmoji(emoji)}
                sx={{ 
                  minWidth: 'auto',
                  fontSize: '1.5rem',
                  p: 1 
                }}
              >
                {emoji}
              </MenuItem>
            </Grid>
          ))}
        </Grid>
      </Menu>
      
      {/* Eklentiler Menüsü */}
      <Menu
        id="attachment-menu"
        anchorEl={addAttachmentAnchor}
        open={attachmentMenuOpen}
        onClose={handleAttachmentClose}
        MenuListProps={{
          'aria-labelledby': 'attachment-button',
        }}
        PaperProps={{
          sx: {
            mt: 1
          }
        }}
      >
        <MenuItem onClick={handleAttachmentClose}>
          <ImageIcon sx={{ mr: 2 }} />
          Resim Ekle
        </MenuItem>
        <MenuItem onClick={handleAttachmentClose}>
          <MicIcon sx={{ mr: 2 }} />
          Ses Kaydı
        </MenuItem>
        <MenuItem onClick={handleAttachmentClose}>
          <VideocamIcon sx={{ mr: 2 }} />
          Video Kaydı
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MessageInput;