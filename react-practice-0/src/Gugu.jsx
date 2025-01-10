import './App.css'

function Gugu() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      {num.map(m => (
        <div key={m} className="gugu">
          {num
            .filter(a => a != 2)
            .map(n => (
              <div key={`${n}-${m}`} className={n % 2 == 0 ? 'black' : 'blue'}>
                {`${n}*${m}=${n * m}`}
              </div>
            ))}
        </div>
      ))}
    </>
  )
}

export default Gugu
