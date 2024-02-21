
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './routes/mainPage'
import Unions from './routes/unions'
import Navbar from './navbar';
import Topbar from './topbar';
import Events from './routes/events';

function App() {
  return (
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/unions' element={<Unions/>}/>
          <Route path='/events' element={<Events/>}/>
        </Routes>
        <Navbar/>
      </BrowserRouter>
    // const router = createBrowserRouter([
      //   {
      //     path: "/",
      //     element: <MainPage/>,
      //     errorElement: <ErrorPage/>
      //   },
      //   {
      //     path:"/unions",
      //     // element: ,
      //     errorElement: <ErrorPage/>
      //   },
      //   {
      //     path:"/event_catalog",
      //     // element: ,
      //     errorElement: <ErrorPage/>
      //   },
      //   {
      //     path:"/calendar",
      //     // element: ,
      //     errorElement: <ErrorPage/>
      //   }
      // ]);
      
    
      // {/* <Post className="" img="img/peoples.png" author_avatar="img/ppos.svg" header="Набор в ППОС СВФУ" text="Всем привет! На связи первичная профсоюзная организация студентов СВФУ. Мы рады сообщить вам об открытии заявок на вступление в наш коллектив. Ждем ваших заявок в наши ряды!"  author="ППОС СВФУ"/> */}
      // {/* <Stories img="img/ppos.svg" alt="ppos" text="PPOS SVFU"/> */}
      // {/* <Concert concert_img="/img/tolpa.png" concert_date="6.09.2024" concert_name="Сила первых" concert_peoples="763" concert_redirect="event_active.html"/> */}
      
    
  );
}

export default App;
