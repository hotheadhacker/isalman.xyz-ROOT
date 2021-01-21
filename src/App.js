import './App.css';
import Photo from'./dp.png';
import Quotes from './quotes.json';

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
        <pre>"{Quotes.quotes[x].quote}" - {Quotes.quotes[x].author}</pre>
      </div>

      </div>
      
    </div>
  );
}

export default App;
