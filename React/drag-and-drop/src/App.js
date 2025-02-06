import logo from "./logo.svg";
import "./App.css";
import DragAndDrop from "./Components/DragAndDrop";
const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};
function App() {
  return (
    <div className="App">
      <DragAndDrop initialData={initialData} />
    </div>
  );
}

export default App;
