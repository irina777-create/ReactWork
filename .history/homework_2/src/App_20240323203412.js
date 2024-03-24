import List from'./components'
import ListClass from './components/ListClass';
import './style.sass'

function App() {
    const city =['Kharkiv',"Mykolaiv', 'Lviv', 'Poltava'];
    return (
    <>
    <List list={city} color="lightblue"/>
    <ListClass list={city} backgroundColor="blue"/>
    </>
  );
}

export default App;
