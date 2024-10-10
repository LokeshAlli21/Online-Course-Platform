import { useEffect, useState } from 'react';
import LogoutButton from './LogoutButton';
import { account } from '../appwrite/appwriteService';

function Dashboard({ onLogout, showMessage }) {
  const [loginCredential, setLoginCredential] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch user data when the component mounts
    account.get()
      .then(data => {
        setLoginCredential(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data.');
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after the fetch
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show error message if fetching fails
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {/* Top-right Logout button */}
      <div className="absolute top-4 right-4">
        <LogoutButton onLogout={onLogout} showMessage={showMessage} />
      </div>

      {/* Dashboard content */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl text-center font-semibold text-green-500 mb-6">
          Welcome, {loginCredential.name || 'User'}!
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Account Information</h3>
            <p><strong>Name:</strong> {loginCredential.name}</p>
            <p><strong>User ID:</strong> {loginCredential.$id}</p>
            <p><strong>Email:</strong> {loginCredential.email}</p>
            <p><strong>Phone:</strong> {loginCredential.phone || 'N/A'}</p>
            <p><strong>Email Verification:</strong> {loginCredential.emailVerification ? 'Verified' : 'Not Verified'}</p>
            <p><strong>Phone Verification:</strong> {loginCredential.phoneVerification ? 'Verified' : 'Not Verified'}</p>
            <p><strong>Multi-Factor Authentication:</strong> {loginCredential.mfa ? 'Enabled' : 'Disabled'}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Provider Information</h3>
            {loginCredential.targets && loginCredential.targets.length > 0 && (
              <p><strong>Provider Type:</strong> {loginCredential.targets[0].providerType}</p>
            )}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Activity Information</h3>
            <p><strong>Account Created:</strong> {new Date(loginCredential.$createdAt).toLocaleString()}</p>
            <p><strong>Account Updated:</strong> {new Date(loginCredential.$updatedAt).toLocaleString()}</p>
            <p><strong>Registration Date:</strong> {new Date(loginCredential.registration).toLocaleString()}</p>
            <p><strong>Last Accessed:</strong> {new Date(loginCredential.accessedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
