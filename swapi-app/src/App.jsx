
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearData } from './actions/swapiActions.jsx';
import './App.css';


function App() {
    const [url, setUrl] = useState('https://swapi.dev/api/people/1/');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.swapi);

    const handleFetch = () => {
        dispatch(fetchData(url));
    };

    const handleClear = () => {
        dispatch(clearData());
    };

    return (
        <div className="container">
            <h1>SWAPI</h1>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter SWAPI URL"
            />
            <button onClick={handleFetch}>Get info</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
            )}
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default App;
