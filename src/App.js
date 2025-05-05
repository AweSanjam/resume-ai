import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography } from '@mui/material';
import ResumeUpload from './ResumeUpload';

const theme = createTheme({
  palette: {
    mode: 'light', // Or 'dark'
    primary: {
      main: '#6750A4', // Material You purple-ish tone
    },
    background: {
      default: '#fef7ff',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ paddingTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          AI Resume Analyzer
        </Typography>
        <ResumeUpload />
      </Container>
    </ThemeProvider>
  );
}

export default App;
