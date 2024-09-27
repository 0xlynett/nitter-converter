import React, { useState } from 'react';

function App() {
  const [twitterUrl, setTwitterUrl] = useState('');

  const handleInputChange = (event) => {
    setTwitterUrl(event.target.value);
  };

  const handleRedirect = () => {
    if (twitterUrl) {
      const url = new URL(twitterUrl);
      const path = url.pathname + url.search + url.hash;
      const nitterUrl = `https://nitter.poast.org${path}`;
      window.location.href = nitterUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Twitter to Nitter Redirect</h1>
        <input
          type="text"
          value={twitterUrl}
          onChange={handleInputChange}
          placeholder="Enter Twitter/X URL"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button 
          onClick={handleRedirect}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Nitter
        </button>
      </div>
    </div>
  );
}

export default App;
