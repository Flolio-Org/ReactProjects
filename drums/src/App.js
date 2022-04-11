import './App.css';

function App() {

  function handleClick(e) {
    const key = document.querySelector(`.key[data-key="${e.target.outerText}"]`)
    key.classList.add('playing');
    const keys = document.querySelectorAll('.key');

    function handleTransition(e) {
      if(e.propertyName !== 'transform')return
      this.classList.remove('playing')
    }

    keys.forEach(key => {
     key.addEventListener('transitionend',handleTransition) 
    });
  }

  return (
    <div className="App">
      <div className='btns'>
        <button data-key="A" className='key' onClick={handleClick}>A</button>
        <button data-key="B" className='key' onClick={handleClick}>B</button>
        <button data-key="C" className='key' onClick={handleClick}>C</button>
        <button data-key="D" className='key' onClick={handleClick}>D</button>
        <button data-key="E" className='key' onClick={handleClick}>E</button>
        <button data-key="F" className='key' onClick={handleClick}>F</button>
        <button data-key="G" className='key' onClick={handleClick}>G</button>
      </div>
    </div>
  );
}

export default App;
