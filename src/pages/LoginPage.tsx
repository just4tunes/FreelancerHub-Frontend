import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput, Button, Paper, Notification } from '@mantine/core';
import axios from 'axios';
import { UserContext } from '../hooks/userContext';

// Define the shape of the context
interface UserContextType {
  login: (data: { token: string; user: { id: string; name: string; email: string; role: string } }) => void;
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext) as UserContextType;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting login with:', { email, password });
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
      console.log('Login response:', response.data);
      login({ token: response.data.token, user: response.data.user });
      const { role } = response.data.user;
      console.log('User role:', role);
      setSuccess('Login successful');
      setError('');
      setEmail('');
      setPassword('');
      if (role === 'student') {
        console.log('Navigating to /student/dashboard');
        navigate('/student/dashboard', { replace: true });
      } else if (role === 'client') {
        console.log('Navigating to /client/dashboard');
        navigate('/client/dashboard', { replace: true });
      } else if (role === 'admin') {
        console.log('Navigating to /admin/dashboard');
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(`Unknown role: ${role}`);
        console.log('Unknown role:', role);
      }
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      console.error('Login error:', axiosError.response?.data || axiosError.message);
      setError(axiosError.response?.data?.message || 'Login failed. Check your credentials.');
      setSuccess('');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4 relative">
      <Link
        to="/"
        className="absolute top-7 left-6 sm:left-16 text-[#266464] hover:underline text-sm sm:text-base font-medium"
      >
        ← Back Home
      </Link>
      <div className="w-full max-w-6xl bg-gray-50 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Login</h2>
          {success && <Notification color="teal" onClose={() => setSuccess('')}>{success}</Notification>}
          {error && <Notification color="red" onClose={() => setError('')}>{error}</Notification>}
          <Paper className="space-y-4" withBorder p={0} shadow="none" radius="md">
            <form onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                radius="md"
                size="md"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                styles={{ input: { paddingLeft: 12, paddingRight: 12 } }}
              />
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                radius="md"
                size="md"
                required
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                styles={{ input: { paddingLeft: 12, paddingRight: 12 } }}
              />
              <Button
                fullWidth
                radius="md"
                size="md"
                color="teal.9"
                className="mt-2 hover:bg-green-900"
                type="submit"
              >
                Login
              </Button>
            </form>
            <p className="text-sm text-center mt-2">
              Don’t have an account?{' '}
              <Link to="/auth/register" className="text-[#266464] font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </Paper>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center gap-6 px-2 bg-[#f3f4f6] relative">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-2 h-8 bg-black rounded-full shadow-sm" />
          ))}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow"
            title="Pin"
          />
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 text-xl rotate-[15deg]"
            title="Star Sticker"
          >
            ⭐
          </div>
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-32 h-20 bg-green-700 text-sm text-gray-800 font-medium rounded-sm shadow-md p-2 rotate-[-6deg] flex items-center justify-center"
          >
            Welcome back! 💬
          </div>
        </div>
        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-white min-h-[300px] md:min-h-0">
          <img
            src="/images/signupimage.jpg"
            alt="Top Left"
            className="absolute top-4 left-4 w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-cover rounded-full shadow-md border-2 border-white rotate-3"
          />
          <img
            src="/images/signupimage.jpg"
            alt="Top Right"
            className="absolute top-6 right-4 w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover rounded-xl shadow-lg border-2 border-white rotate-[-6deg]"
            style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)' }}
          />
          <img
            src="/images/signupimage.jpg"
            alt="Bottom Left"
            className="absolute bottom-6 left-6 w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover shadow-md border-2 border-white rotate-[8deg]"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              borderRadius: '8px',
            }}
          />
          <img
            src="/images/signupimage.jpg"
            alt="Bottom Right"
            className="absolute bottom-4 right-6 w-[70px] h-[70px] md:w-[110px] md:h-[110px] object-cover shadow-md border-2 border-white rotate-[-10deg]"
            style={{ clipPath: 'circle(40% at 60% 40%)' }}
          />
          <div className="relative z-10 w-[110px] h-[130px] md:w-[190px] md:h-[200px] bg-white shadow-lg border border-gray-200 p-1 flex items-center justify-center rotate-[18deg]">
            <img src="/images/signupimage.jpg" alt="Center" className="w-full h-full object-cover rounded-md" />
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-black-500 font-semibold">
              Welcome 📸
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

