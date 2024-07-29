// pages/index.tsx
import { useState } from 'react';

const TestComponent = () => {
  const [tokenData, setTokenData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/token?id=32015`);
      const data = await response.json();
      setTokenData(data);
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Token Data</button>
      {tokenData && <pre>{JSON.stringify(tokenData, null, 2)}</pre>}
    </div>
  );
};

export default TestComponent;
