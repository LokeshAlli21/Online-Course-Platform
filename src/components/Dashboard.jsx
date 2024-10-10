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
        {loginCredential.userId && <p>User ID: {loginCredential.userId}</p>}
        {loginCredential.providerUid && <p>Email: {loginCredential.providerUid}</p>}
        {loginCredential.provider && <p>Provider: {loginCredential.provider}</p>}
        {loginCredential.ip && <p>IP Address: {loginCredential.ip}</p>}
        {loginCredential.osName && loginCredential.osVersion && (
            <p>Operating System: {loginCredential.osName} {loginCredential.osVersion}</p>
        )}
        {loginCredential.clientName && loginCredential.clientVersion && (
            <p>Client: {loginCredential.clientName} {loginCredential.clientVersion}</p>
        )}
        {loginCredential.clientEngine && loginCredential.clientEngineVersion && (
            <p>Client Engine: {loginCredential.clientEngine} {loginCredential.clientEngineVersion}</p>
        )}
        {loginCredential.deviceName && <p>Device Type: {loginCredential.deviceName}</p>}
        {loginCredential.countryName && loginCredential.countryCode && (
            <p>Country: {loginCredential.countryName} ({loginCredential.countryCode.toUpperCase()})</p>
        )}
        {loginCredential.$createdAt && (
            <p>Session Created: {new Date(loginCredential.$createdAt).toLocaleString()}</p>
        )}
        {loginCredential.$updatedAt && (
            <p>Session Updated: {new Date(loginCredential.$updatedAt).toLocaleString()}</p>
        )}
        {loginCredential.expire && (
            <p>Session Expiry: {new Date(loginCredential.expire).toLocaleString()}</p>
        )}
        {loginCredential.factors && loginCredential.factors.length > 0 && (
            <p>Multi-Factor Authentication: {loginCredential.factors.join(', ')}</p>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
