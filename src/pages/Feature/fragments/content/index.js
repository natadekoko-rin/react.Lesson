import './styles.css'
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'

function Content(prop) {
  if (prop.noImg === 1) {
    var x = img1
    var y = 'tambal ban kereta'
  } else if (prop.noImg === 2) {
    var x = img2
    var y = 'tambal ban tank'
  } else if (prop.noImg === 3) {
    var x = img3
    var y = 'tambal ban kapal'
  }

  return (
    <section>
      <h1 className="content-wrapper">Ini adalah jenis tambal ban</h1>
      <h3>{y}</h3>
      <img className="content-image" src={x} alt={x} />
    </section>
  )
}

export default Content
