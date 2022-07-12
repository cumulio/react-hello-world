import React, { useEffect, useState } from 'react';
import { CumulioDashboardComponent } from '@cumul.io/react-cumulio-dashboard';
import './App.css';

function App() {
  const dashboardId = 'DASHBOARD_ID_HERE';
  const appServer = 'APP_SERVER_HERE';
  const apiHost = 'API_HOST_HERE';
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    (async function() {
      const auth = await fetch('http://localhost:4001').then(response => response.json());
      setKey(auth.key);
      setToken(auth.token);
    })();
  }, []); 
  return (
    <div className="App">
      <CumulioDashboardComponent appServer={appServer} apiHost={apiHost} dashboardId={dashboardId} authKey={key} authToken={token}></CumulioDashboardComponent>
    </div>
  );
}

export default App;
