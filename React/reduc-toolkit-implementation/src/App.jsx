
import './App.css'
import {Provider} from 'react-redux';
import store from './store/store';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import HabitStats from './components/HabitStats';

function App() {

  return (
    <Provider store={store} >
      <div className='flex flex-col justify-center '>
        <p className='font-bold flex text-4xl  justify-center'>Habit Tracker</p>
        <AddHabitForm/>
        <HabitList/>
        <HabitStats/>
      </div>

    </Provider>
  )
}

export default App
