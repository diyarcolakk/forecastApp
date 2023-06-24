import { useContext } from "react";
import { myContext } from "../../Context/Context";
import "./Header.css";



const Header = () => {
  const newContext = useContext(myContext);
  const { cities ,setCityName} = newContext;

  return (
    <>
      <div className="header">
        <select defaultValue="İstanbul" className="option-styler" onChange={(e) => {setCityName(e.target.value)}}>
          {cities.map((city, index) => (
            <option key={index} className="select-selecter">
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Header;
