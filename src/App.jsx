import React, { useState } from 'react';
import { Button, Input, QRCode, Space, Typography } from 'antd';

const { Text } = Typography;

function App() {
  const [text, setText] = useState('https://example.com');

  const handleQRCodeClick = () => {
    if (text.startsWith('http://') || text.startsWith('https://')) {
      window.open(text, '_blank');
    } else {
      alert('Iltimos, to‘g‘ri URL kiriting (http:// yoki https:// bilan boshlansin).');
    }
  };
  return (
    <>
       <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Space direction="vertical" align="center">
        <Text strong>URL kiriting:</Text>
        <Input
          style={{ width: '300px' }}
          placeholder="Havola (URL) kiriting..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="primary" onClick={handleQRCodeClick}>
          QR Kodni bosib havolaga o'tish
        </Button>
        <QRCode
          value={text || '-'}
          size={200}
          onClick={handleQRCodeClick}
          style={{ cursor: 'pointer', backgroundColor: 'white', padding: '10px' }}
        />
      </Space>
    </div>
    </>
  )
}

export default App
