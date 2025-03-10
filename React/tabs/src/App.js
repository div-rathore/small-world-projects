
import './App.css';
import Tabs from './Components/Tabs';

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
];

function App() {
  return (
   <Tabs tabsData={tabsData}/>
  );
}

export default App;
