function LogoutButton({ onLogout, showMessage }) {
    const handleLogout = () => {
      onLogout();
      showMessage('Logged out successfully', 'success');
    };
  
    return (
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    );
  }
  
  export default LogoutButton;
  