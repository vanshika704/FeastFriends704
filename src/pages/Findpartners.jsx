
import { GiWallet } from "react-icons/gi";
import Cards from "../components/alicecarousal";
import { FaSearchLocation } from "react-icons/fa";
import { Spacer } from "@chakra-ui/react";

function Findpartner() {
  return (<><div className="find" ><div>Find a Companion..</div><div className="location">
    <FaSearchLocation size={30}/><Spacer width={30}/> <GiWallet size={30} />
    </div></div><div className="data"><img src="src/assets/image4.jpg" className="imagefind"></img><div className="cardscontainer"><Cards /></div></div></>)
}
export default Findpartner;