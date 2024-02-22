import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useAuth } from '../../security/useAuth';
import { useNavigate } from 'react-router-dom';

interface User {
  userName: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [user, setUser] = useState<User>({ userName: '', password: '' });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = () => {
    auth?.login(user);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>

      <div>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
};

export default SignInPage;
