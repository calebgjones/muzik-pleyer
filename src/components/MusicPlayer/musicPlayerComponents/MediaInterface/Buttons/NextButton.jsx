function nextSong({ onClick }) {
  return (
    <button onClick={onClick}>
      <i className="fa-solid fa-forward"></i>
    </button>
  );

}


function NextButton({ onClick }) {

  return (
    <button onClick={ onClick }>
      <i className="fa-solid fa-forward"></i>
    </button>
  )
  
}

export default NextButton;