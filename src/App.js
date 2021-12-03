import './App.css';
import Feedback from './Components/Feedback/Feedback';

function App() {
  return (
    <div>
      <Feedback good={0} neutral={0} bad={0} />
    </div>
  );
}

export default App;
