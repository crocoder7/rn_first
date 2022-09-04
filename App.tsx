import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Loading from './screens/loading/Loading';
import Navigation from './components/navigation/Navigation';
import { store } from './store/MainStore';




export default function App() {
  const [appLoaded, setAppLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true)
    }, 1000)
  }, []);

  if(appLoaded) {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  } else {
    return (
      <Loading/>
    );
  }
}
