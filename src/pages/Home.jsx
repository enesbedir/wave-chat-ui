import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';

const WelcomeBanner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  borderBottom: `1px solid ${theme.palette.background.darker}`,
}));

const Home = () => {
  const messages = [
    {
      id: 1,
      user: {
        name: 'Ali Yılmaz',
        avatar: '',
        color: '#8559da'
      },
      content: 'Merhaba herkes! Wave Chat'e hoş geldiniz! 👋',
      timestamp: 'Bugün 12:34',
      edited: false,
      reactions: [
        { emoji: '👋', count: 3 },
        { emoji: '❤️', count: 2 }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Ayşe Demir',
        avatar: '',
        color: '#1db9c3'
      },
      content: 'Bu uygulama gerçekten çok güzel görünüyor. Discord\'a benzemiyor ama tüm özellikleri var gibi.',
      timestamp: 'Bugün 12:35',
      edited: false,
      reactions: [
        { emoji: '👍', count: 4 },
      ]
    },
    {
      id: 3,
      user: {
        name: 'Mehmet Kaya',
        avatar: '',
        color: '#e6704b'
      },
      content: 'Aynen öyle, tasarım oldukça modern ve şık duruyor. Bu UI Discord\'dakinden daha temiz ve daha profesyonel.',
      timestamp: 'Bugün 12:37',
      edited: true,
      reactions: []
    },
    {
      id: 4,
      user: {
        name: 'Zeynep Öztürk',
        avatar: '',
        color: '#5ca9f0'
      },
      content: 'Ses ve görüntü özellikleri de var mı? Takım çalışması için bunlara ihtiyacımız olacak.',
      timestamp: 'Bugün 12:39',
      edited: false,
      reactions: []
    },
    {
      id: 5,
      user: {
        name: 'Ali Yılmaz',
        avatar: '',
        color: '#8559da'
      },
      content: 'Evet, tüm ses ve görüntü özellikleri var. Ayrıca ekran paylaşımı da yapabileceksiniz. Sunucular da kurabilir ve kendi topluluğunuzu oluşturabilirsiniz.',
      timestamp: 'Bugün 12:40',
      edited: false,
      attachments: [
        { url: 'https://via.placeholder.com/300x200?text=Wave+Chat+Ekran+Görüntüsü', type: 'image' }
      ],
      reactions: [
        { emoji: '🔥', count: 2 },
        { emoji: '👏', count: 3 }
      ]
    },
    {
      id: 6,
      user: {
        name: 'Kemal Şahin',
        avatar: '',
        color: '#f44336'
      },
      content: 'Harika tasarım! Renk paleti ve UI çok modern. Gerçekten beğendim.',
      timestamp: 'Bugün 12:41',
      edited: false,
      reactions: [
        { emoji: '❤️', count: 1 },
      ]
    },
    {
      id: 7,
      user: {
        name: 'Aslı Yıldız',
        avatar: '',
        color: '#4caf50'
      },
      content: 'Mobil uyumlu olacak mı? İş yerinde toplantıdayken mesajları takip etmek isterim.',
      timestamp: 'Bugün 12:43',
      edited: false,
      reactions: []
    },
    {
      id: 8,
      user: {
        name: 'Ali Yılmaz',
        avatar: '',
        color: '#8559da'
      },
      content: 'Evet, tamamen responsive tasarım. Mobil, tablet ve masaüstü cihazlarda sorunsuz çalışacak.',
      timestamp: 'Bugün 12:45',
      edited: false,
      reactions: [
        { emoji: '👌', count: 3 },
      ]
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', pb: 2 }}>
        <WelcomeBanner>
          <Typography variant="h4" color="primary.main" gutterBottom fontWeight="bold">
            # genel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bu, #genel kanalının başlangıcı. Burada topluluk ile konuşabilir, sorular sorabilir ve etkileşimde bulunabilirsiniz.
          </Typography>
        </WelcomeBanner>
        
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </Box>
      
      <MessageInput currentChannel="genel" />
    </Box>
  );
};

export default Home;