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
      <button className="custom-button">GitHub</button><br/><br/>
      <button className="custom-button">Frontend Mentor</button><br/><br/>  
      <button className="custom-button">LinkedIn</button><br/><br/>  
      <button className="custom-button">Twitter</button><br/><br/>
      <button className="custom-button">Instagram</button><br/>
    </div>

    </div>
  )
}

export default App
