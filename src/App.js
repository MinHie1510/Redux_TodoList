import './App.css';
import Formaddtask from './components/form_add_task';
import Listtask from './components/list_task';


function App() {


  return (
    <>
      <div class="wrapper">
          <h1 class="text-center">TODO LIST APP</h1>
          <Formaddtask/>
          {/* <Listtask/> */}
      </div>
    </>
  );
}

export default App;