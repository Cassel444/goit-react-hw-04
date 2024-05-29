import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";

function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
    </>
  );
}
export default App;
