import ninjago_logo from './../assets/images/ninjago_logo.png'
import MovingTray from '../components/tray'; 
import { MovingTray2 } from '../components/tray'; 


const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
      
      <img 
        src={'https://64.media.tumblr.com/70db45cd823b1d77b733f1ce208094e2/60772bf9f136866a-85/s2048x3072/ae057f790bfead8976d0b5d326040d78e4f793a9.pnj'} 
        alt="Header" 
        style={{ width: '100%', height: 'auto', maxWidth: '920px' }}
      />

      <img 
        src={ninjago_logo} 
        alt="Example" 
        style={{ width: '50%', height: 'auto', maxWidth: '700px', position: 'relative', top: '-50px' }}
      />

    <MovingTray/>    
    <MovingTray2/>   
   

    <h1>WELCOME!</h1>
   
      
    </div>
  )
}

export default Home;
