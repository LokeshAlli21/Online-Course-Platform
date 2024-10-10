import { account } from '../appwrite/appwriteService'

function LogoutButton({ onLogout, showMessage }) {

    const handleLogout = async () => {
      try {
        const result = await account.deleteSessions();
        console.log(result);
        onLogout();
        showMessage('Logged out successfully', 'success');
      } catch (error) {
        console.error('Logout failed:', error.message);
        showMessage('Logout failed. Please try again.', 'error');
      }
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
  