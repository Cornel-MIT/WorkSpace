import Jessica from './assets/avatar-jessica.jpeg'
import './App.css'

function App() {
  return (
    < div className='container'>

     <div className='avatar'>
         <img src={Jessica} alt='avatar'></img>
      </div>

      <div className='headers'>
        <h3>Jessica Randall</h3><br/>
        <p className='para1'>London, United Kingdom</p><br/>
        <p className='para2'>"Front-end developer and avid reader"</p>
      </div>
      

      <div className='button-container'>
      <a href="https://github.com"><button className="custom-button">GitHub</button><br/><br/></a>
      <a href="https://www.frontendmentor.io"><button className="custom-button">Frontend Mentor</button><br/><br/></a>
      <a href="https://www.linkedin.com"><button className="custom-button">LinkedIn</button><br/><br/></a>
      <a href="https://twitter.com"><button className="custom-button">Twitter</button><br/><br/></a>
      <a href="https://www.instagram.com"><button className="custom-button">Instagram</button><br/></a>
    </div>

    </div>
  )
}

export default App
