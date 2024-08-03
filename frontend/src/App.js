import './App.css';
import TodoList from './components/TodoList';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <TodoList/>
      </NotificationProvider>
      
    </div>
  );
}

export default App;
