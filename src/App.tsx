import { _LOGO } from './assets/svgs';

function App() {

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <img src={_LOGO.img} alt={_LOGO.alt} width={150}/>
      </div>
    </>
  )
}

export default App
