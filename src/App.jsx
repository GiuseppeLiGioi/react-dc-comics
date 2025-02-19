import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {



  const links = [
    {id: 1, url: '/'},
    {id: 2, url: '/about'},
    {id: 3, url: '/servizi'},
    {id: 4, url: '/contatti'}

  ];
  return (
    <>
      <Header links={links}/>
      <Main />
      <Footer />
    </>
  )
}

export default App
