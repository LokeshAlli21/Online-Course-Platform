import LogoutButton from './LogoutButton';

function Dashboard({ onLogout, showMessage, loginCredential }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {/* Top-right Logout button */}
      <div className="absolute top-4 right-4">
        <LogoutButton onLogout={onLogout} showMessage={showMessage} />
      </div>

      {/* Dashboard content */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg text-center font-semibold text-green-500">
          Welcome to the Dashboard!
        </h2>
        <p>User ID: {loginCredential.userId}</p>
        <p>Email: {loginCredential.providerUid}</p>
        <p>Provider: {loginCredential.provider}</p>
        <p>IP Address: {loginCredential.ip}</p>
        <p>Operating System: {loginCredential.osName} {loginCredential.osVersion}</p>
        <p>Client: {loginCredential.clientName} {loginCredential.clientVersion}</p>
        <p>Client Engine: {loginCredential.clientEngine} {loginCredential.clientEngineVersion}</p>
        <p>Device Type: {loginCredential.deviceName}</p>
        <p>Country: {loginCredential.countryName} ({loginCredential.countryCode.toUpperCase()})</p>
        <p>Session Created: {new Date(loginCredential.$createdAt).toLocaleString()}</p>
        <p>Session Updated: {new Date(loginCredential.$updatedAt).toLocaleString()}</p>
        <p>Session Expiry: {new Date(loginCredential.expire).toLocaleString()}</p>
        <p>Multi-Factor Authentication: {loginCredential.factors.join(', ')}</p>
      </div>
    </div>
  );
}

export default Dashboard;
