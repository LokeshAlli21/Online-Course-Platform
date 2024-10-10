import LogoutButton from './LogoutButton';

function Dashboard({ onLogout, showMessage }) {
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
        <p className="text-center mt-4">Here is your main content after login.</p>
      </div>
    </div>
  );
}

export default Dashboard;
