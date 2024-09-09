import React, { useState, useEffect } from 'react';
import { CircularProgress, Button, TextField, Typography, Box } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await backend.nonExistentFunction();
        console.log('Function called successfully');
      } catch (err) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const result = await backend.mismatchedTypes(data.input);
      console.log(result);
    } catch (err) {
      setError('An error occurred while submitting data');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Non-Compiling Project
      </Typography>
      {error && (
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#FF6B6B', mb: 2 }}>
          <ErrorOutline sx={{ mr: 1 }} />
          <Typography>{error}</Typography>
        </Box>
      )}
      {loading ? (
        <CircularProgress sx={{ color: '#4ECDC4' }} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('input')}
            label="Input"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: '#4ECDC4' }}>
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
};

export default App;