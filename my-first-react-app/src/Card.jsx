import profilePic from "./assets/profile-pic.png"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">HopeInHim</h2>
            <p className="card-text">Serving Got is my mission and goal in live!
            </p>
        </div>
    );
}

export default Card;