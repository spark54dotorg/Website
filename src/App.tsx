import { _LOGO } from './assets/svgs';

function App() {

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center bg-[rgba(255, 255, 255, 0.87)]'>
        <img src={_LOGO.img} alt={_LOGO.alt} width={150}/>
      </div>
    </>
  )
}

export default App
