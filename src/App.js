
import './App.css';
import Header from './Header';
import Button from './Button';
import Person from './Person';
import List from './List';

function App() {
  return (
  
    <div >
     
    <Person name="vikas" age="22"/>
    <Button text="click" onClick={()=>console.log("CLick Me")}/>
    <Header tittle="This Is My First Rect App"/>
      <List items={['Javascript', 'HTML', 'CSS']} />
  
      
    </div>
  );
}

export default App;
