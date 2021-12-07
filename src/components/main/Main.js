import { data } from "../helpers/data"
import "./Main.css"
// console.log(data);
const Main = () => {
    return (
        <div className="container">
            {
                data.map((liste, index) => {
                    return (
                        <div className="liste-style" key={index}>
                            
                            <ul>
                                <li>
                                       {liste.name} {liste.username} <br /> <span>Email :</span>{liste.email}
                                </li>
                            </ul>
                           

                        </div>
                    )
                })
            }

        </div>
    )
}
export default Main;