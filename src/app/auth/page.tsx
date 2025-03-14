import LoginForm from '@/features/auth/components/LoginForm';
import { Typography } from '@mui/material';

export default function AuthPage() {
  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <LoginForm />
    </div>
  );
}
