import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Notification from './components/Notification';
import Dashboard from './components/Dashboard';
import { account } from './appwrite/appwriteService';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    // Fetch user data from account.get() to check if the user is logged in
    const checkUserLogin = async () => {
      try {
        const data = await account.get();
        if (data) {
          setLoggedIn(true);
          // console.log('User data:', data); // Log user data
        } else {
          setLoggedIn(false); // User is not logged in
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoggedIn(false); // Optionally set loggedIn to false on error
      }
    };

    checkUserLogin();
  }, []);
  
  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Notification message={message} type={messageType} />

      {!loggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Online Course Platform</h1>

          {isLogin ? (
            <>
              <LoginForm
                onSuccess={() => {
                  setLoggedIn(true);
                }}
                showMessage={showMessage}
              />
              <p className="text-sm text-center">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm
                onSuccess={() => setIsLogin(true)} // Switch to login page after successful sign-up
                showMessage={showMessage}
              />
              <p className="text-sm text-center">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 hover:underline"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      ) : (
        // Render the Dashboard component when logged in
        <Dashboard
          onLogout={() => {
            setLoggedIn(false);
          }}
          showMessage={showMessage}
        />
      )}
    </div>
  );
}

export default App;
