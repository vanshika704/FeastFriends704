
import Cards from "../components/alicecarousal";


function Findpartner() {
  return (<><div className="find" ><div>Find a Companion..</div><div>
    <input
      type="text"
      placeholder="Location"
      className="location"
      // value={location}
      readOnly
    /></div></div><div className="data"><img src="src/assets/image4.jpg" className="imagefind"></img><div className="cardscontainer"><Cards /></div></div></>)
}
export default Findpartner;