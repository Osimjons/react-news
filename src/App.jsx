import { Header } from './components/Header/Header';
import { Main } from './/pages/Main/Main';
function App() {
  // const API_KEY = 'pub_463189e28681fa60706f4407fe644c224aaf3';
  // const [title, setTitle] = useState([]);

  // let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=ru&language=ru`;

  // useEffect(() => {
  //   async function getNews() {
  //     try {
  //       const resp = await fetch(url);
  //       const data = await resp.json();
  //       setTitle(data.results);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   }
  //   getNews();
  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
