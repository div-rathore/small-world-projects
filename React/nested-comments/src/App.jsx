import './App.css'
import NestedComments from './components/NestedComments'
import commentsData from './data/comments.json';

function App() {

  return (
    <>
     <h1>Nested Comment System</h1>
     <NestedComments comments = {commentsData}
     onSubmit= {(content)=>{}}
     onEdit={(content)=>{}}
     onDelete={()=>{}}
    //  onUpvote={()=>{}}
    //  onDownVote={()=>{}}
     />
    </>
  )
}

export default App
