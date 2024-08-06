import './App.css';
import Calender from './components/Calender';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import {ModalProvider} from './contexts/ModalContext';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NotificationProvider>
        <TodoList/>
        <Calender/>
        {/* <ModalProvider>
         
        </ModalProvider> */}
        
      </NotificationProvider>
      
    </div>
  );
}

export default App;
