import { useContext } from "react"
import { myContext } from "../../Context/Context"

const Header = () => {

const newContext = useContext(myContext)

const {cities} = newContext


  return (
    <div>{cities}</div>
  )
}
export default Header