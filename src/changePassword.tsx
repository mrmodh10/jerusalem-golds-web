import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const supabaseUrl = 'https://uefravmonfnvzsomfefm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZnJhdm1vbmZudnpzb21mZWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMzE2OTQsImV4cCI6MjAzMzkwNzY5NH0.Yo66m1H4TqsurZfdAc2-D8ukaBY1ISgpfjksBC0UW7o"
if (!supabaseKey) {
  throw new Error('Could not find supabase');
}

const supabase = createClient(supabaseUrl, supabaseKey)

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [searchParams] = useSearchParams();
  const code = searchParams.get('token_hash');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // Set the session with the token
      supabase.auth.verifyOtp({
        token_hash: code,
        type: 'recovery'
      }).then(({ error }) => {
        if (error) {
          console.error('Error setting session:', error.message);
          setError('Error setting session: ' + error.message);
        } else {
          console.log('Session set successfully!');
        }
      })
        .catch((err) => {
          console.error('Error exchanging code for session:', err);
          setError('Error exchanging code for session: ' + err.message);
        });
    }
  }, [code]);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        console.error('Error updating password:', error.message);
        setError('Error updating password: ' + error.message);
      } else {
        console.log('Password updated successfully for user:');
        navigate('/Password-Updated');
      }
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <div className='container'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '8px', marginBottom: '16px' }}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ padding: '8px', marginBottom: '16px' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
