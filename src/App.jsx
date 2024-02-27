
import './App.css'
import ToDo from './ToDo'

function App() {

  return (
    <div>
      <ToDo labels={[
        { id: 1, label: 'carrot' },
        { id: 2, label: 'banana' },
        { id: 3, label: 'orange' }
      ]} />
    </div>
  )
}

export default App
