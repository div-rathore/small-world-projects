
import './App.css';
import FileExplorer from './Component/FileExplorer';
import FileExplorerContextWrapper from './context/FileExplorerContext.js';
import data from './data/FileExplorerData.js';

function App() {
  return (
    // <div className="App">
    // <FileExplorer data={data} id={1}/>
    // </div>
    <FileExplorerContextWrapper>
      <FileExplorer/>
    </FileExplorerContextWrapper>
  );
}

export default App;
