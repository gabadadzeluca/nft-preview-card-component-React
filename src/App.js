import './App.css';
import PhotoComponent from './PhotoComponent';
import InfoComponent from './InfoComponent';
import AuthorComponent from './AuthorComponent';
function App() {
  return (
    <div className="card-div">
      <PhotoComponent />
      <InfoComponent />
      <AuthorComponent />
    </div>
  );
}
export default App;
