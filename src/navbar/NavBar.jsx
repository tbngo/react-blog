import './navbar.css'

export default function NavBar() {
    return (
        <div className="nav">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg" 
                    src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?cs=srgb&dl=pexels-just-a-couple-photos-3777622.jpg&fm=jpg" 
                    alt="">
                </img>
                <i className="topSearchIcon fas fa-search"></i>
              </div>
        </div>
    )
}