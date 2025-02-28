
import './App.css';
import FileExplorer from './Component/FileExplorer';
import data from './data.json';

function App() {
  return (
    <div className="App">
    <FileExplorer folderData={data}/>
    </div>
  );
}

export default App;
