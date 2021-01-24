import './App.css';
import Photo from'./dp.png';
import Quotes from './quotes.json';
import Typical from 'react-typical'


function App() {

  
    var x = Math.floor((Math.random() * 100) + 0);
  
  return (
    <div className="container">
      
      <div className="heading">
      <div className="imgContainer">
      <img src={Photo} className="rounded-circle photo"  />
      <p className="txt1 mt-2">Hi 👋 I'm Salman Qureshi ☑️<br></br> Full Stack Developer From Kashmir 🍁</p>
      </div>
        <h1>Welcome to my online presence</h1>
      </div>
     <div className="cards1">
      <div className="row cards pt-2 px-4">
        {/* 1 */}
        <div className="col-6">
           <a href="https://blog.isalman.xyz"> <div className="one">
                <h1 className="title">Blog</h1>
            </div> </a>
            
        </div>
        {/* 2 */}
        <div className="col-6">
        <a href="https://portfolio.isalman.xyz"><div className="two">
          <h1 className="title">Portfolio</h1>
          </div></a>
        </div>
        {/* 3 */}
        <div className="col-6">
        <a href="https://tools.isalman.xyz"><div className="three">
              <h1 className="title">Tools</h1>
          </div></a>
        </div>
        {/* 4 */}
        <div className="col-6">
        <a href="https://cv.isalman.xyz"><div className="four">
              <h1 className="title">CV</h1>
          </div></a>
        </div>
        
      </div>

      <div className="quotes">
        {/* <p className="qTxt">"{Quotes.quotes[x].quote}" - {Quotes.quotes[x].author}</p> */}

        <Typical
        steps={[`"${Quotes.quotes[x].quote}"  ${Quotes.quotes[x].author}`, 1500]}
        loop={Infinity}
        wrapper="p"
        className="qTxt"
      />
      </div>

      </div>


      <footer className="footer mt-2">
       <h3>Designed by 😆 <a href="https://isalman.xyz">Salman Qureshi</a></h3>
       <p>
       <a href="https://github.com/hotheadhacker" target="_BLANK"><i className="fab fa-github fa-2x mx-2 github"></i></a>
       <a href="https://twitter.com/salmanually" target="_BLANK"><i className="fab fa-twitter fa-2x mx-2 twitter"></i></a>
       <a href="https://instagram.com/salmanually" target="_BLANK"><i className="fab fa-instagram fa-2x mx-2 instagram"></i></a>
       <a href="https://isalman.xyz" target="_BLANK"><i className="fas fa-mouse-pointer fa-2x mx-2 website"></i></a>
       <a href="mailto:isalmanqureshi@gmail.com" target="_BLANK"><i className="fas fa-envelope fa-2x mx-2 email"></i></a>
       <a href="https://blog.isalman.xyz" target="_BLANK"><i className="fas fa-blog fa-2x mx-2 blog"></i></a>
       </p>
      </footer>
      
    </div>

    
  );
}

export default App;
