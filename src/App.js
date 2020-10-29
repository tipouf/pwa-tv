import React, { useState } from 'react';
import Main from './lib/main';
import ResponsiveDrawer from './lib/drawer';

export default function App() {
  const [flux, setFlux] = useState(null);

  return (
    <div>
      <ResponsiveDrawer onSelectFlux={setFlux}/>
      <div>
        <Main flux={flux}/>
      </div>
    </div>
  );
}

