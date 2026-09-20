function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ocbDlBX_1eNUSoAVBMPLK5ssJE86ouOxSGqGRcjdYQauPKueQtB4KTI&s=10" height="80px" width="60px"/>
            <div className="options">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>
            <input className="search-bar" placeholder="Search for products brands and more"></input>

            <div className="profile">
                <button className="but2">Profile</button>
                <button className="but2">Wishlist</button>
                <button className="but2">Bag</button>
            </div>
        </div>
    )
}

export default Header;