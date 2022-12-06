import './styles.css'
import imgH from '../../img/home.png'
function Content(prop) {
  return (
    <section>
      <h1 className="content-wrapper">Ini adalah kontennya </h1>
      <p className="content-text">{prop.data}</p>
      <img className="content-image" src={imgH} alt="image Home" />
    </section>
  )
}

export default Content
