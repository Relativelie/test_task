import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Menu } from '../menu/Menu';
import { Tasks } from '../tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const { content } = useTypedSelector(
    (contentState) => contentState.contentReducer,
);
  const { searchedList } = useTypedSelector(
    (searchState) => searchState.searchReducer,
);
const { getResult } = useTypedSelector(
  (requestState) => requestState.sendRequestReducer,
);

const { sendGet, saveContent } = useActions();
  useEffect(() => {
    if (searchedList.length !== 0) {
      console.log(searchedList)
      setTasks(searchedList);
    } else setTasks(content);
  }, [searchedList]);

  useEffect(() => {
    const getRequest = async () => {
        const url = 'https://cors-anywhere.herokuapp.com/https://todo.doczilla.pro/api/todos?limit=100&offset=3';
        const headers = { accept: 'application/json' };
        await sendGet(url, headers);
    };
    getRequest();
}, []);

useEffect(() => {
    saveContent(getResult);
}, [getResult]);

  return (
    <div className="App">
      <Menu />
      <Tasks data={tasks}/>
    </div>
  );
}

export default App;
