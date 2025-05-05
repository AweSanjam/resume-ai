import React, { useState } from 'react';
import {
  Button,
  Input,
  Paper,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import axios from 'axios';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:8000/upload', formData);
      setFeedback(response.data.feedback);

    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong:\n" + (err.response?.data?.feedback || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload Resume (.pdf or .docx)
      </Typography>

      <Input
        type="file"
        inputProps={{ accept: '.pdf,.docx' }}
        onChange={(e) => setFile(e.target.files[0])}
        fullWidth
        disableUnderline
      />

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Analyze Resume'}
        </Button>
      </Box>

      {feedback && (
        <Box mt={3}>
          <Typography variant="subtitle1">AI Feedback:</Typography>
          <Paper variant="outlined" sx={{ p: 2, mt: 1, backgroundColor: '#f5f0ff' }}>
            <Typography style={{ whiteSpace: 'pre-wrap' }}>{feedback}</Typography>
          </Paper>
        </Box>
      )}
    </Paper>
  );
}

export default ResumeUpload;
