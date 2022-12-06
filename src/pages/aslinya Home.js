import Header from '../components/Header'
function Home() {
  //nama fungsi == nama file

  //const = langsung mendifinisikan sendiri, tpi tidak bisa diubah di function manapun

  //const biasanya untuk kita pengen menampung variabel yg dilempar dari exdr nama/db
  //var = global dalan satu function ini dan tidak terstruktur
  //let = gk bolek duplikasi dalam 1 file/ lebih spesifik

  // let nama = 'kadal bakar'
  // const showName = () => {
  //   return (nama = 'test react')
  // }

  return (
    <div>
      {/* <h1>Tes</h1>
      {showName()} */}
      <Header />
    </div>
  )
}

export default Home
