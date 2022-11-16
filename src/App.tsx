import React from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';
import { useTypedSelector } from './hooks/useTypedSelector';
import { fetchUser } from './store/actions/usersActions';

function App() {
  const users= useTypedSelector(state => state.users);
  const dispatch = useDispatch();

  console.log(users);

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchUser())}>fetch</button>
      {!users.loading ? users.users.map(user => (
        <div key={user.id}>{user.name}</div>
      )) : <div>ЗАГРУЗКА</div>
      }
    </div>
  );
}

export default App;
