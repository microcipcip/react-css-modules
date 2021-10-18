import './App.css'
import GrandParent from './GrandParent/GrandParent'
import Parent from './Parent/Parent'
import Child from './Child/Child'

function App() {
  return (
    <div className="App">
      <h2>Grandparent (with parent and child override)</h2>
      <GrandParent />
      <h2>Parent (with child override)</h2>
      <Parent/>
      <h2>Normal child color</h2>
      <Child/>
    </div>
  )
}

export default App
