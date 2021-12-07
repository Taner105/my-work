import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <h2 style={{marginRight:950 ,fontSize:50}}>LİST OF STAFF</h2>
            <a  id="emp" href="#">EMPLOYEE</a>
            <a id="abt" href="#">ABOUT</a>
            <a id="con" href="#">CONTACT</a>  
        </div>
    )
}
export default Navbar;