function Notification({ message, type }) {
    if (!message) return null;
  
    const alertStyle = type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
  
    return (
      <div className={`${alertStyle} p-3 mb-4 rounded-md text-center`}>
        {message}
      </div>
    );
  }
  
  export default Notification;
  