import horizontal from'/src/assets/imgs/horizontal.png'
import packages from'/src/assets/imgs/packages.png'
import vertical from'/src/assets/imgs/vertical.png'
function Homepage() {
  return (
    <div className='home'>
    {/* the nav bar and company name */}
      <div className='navigation'>
        <h1 id="logo">Ranges <span> Millers </span></h1>
        <nav className="nav-menu">          
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>   
                   
        </nav>
      </div>

      <div className='packets'>
        <img src={packages} alt="packages"  id= 'packages' />
        <div className='intro'>
            <p id='name'><h2><span>Imara</span> Premium</h2> </p>
            <p id='name1'><h2> Maize Mill</h2></p>
          
         <div className='quantity'>
           <p id='g'><h3>1kg</h3></p>
          <p id='kg'><h3>2kg</h3></p>
         </div>
        </div>          
        {/* <img src={horizontal} alt="flour packets" id='horizontal' /> */}
        {/* <img src={vertical} alt="flour packets" id='vertical'/> */}
      </div>


      
    </div>
  );
}

export default Homepage;