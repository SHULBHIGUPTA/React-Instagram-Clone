class Profile extends React.Component {
    render() {
        const style = {display: "flex", gap:"5rem"}
        const imgstyle = {borderRadius:"50%", height:"20vh"}
        return (
            <>
                <h2>Shulbhi Gupta</h2>
                <div style = {style}>
                <img style={imgstyle} src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <span>
                <p>4000</p>
                <h1>Posts</h1>
                </span>
                <span>
                <p>8000</p>
                <h1>Followers</h1>
                </span>
                <span>
                <p>9000</p>
                <h1>Following</h1>
                </span>
                </div>
            </>
        )
    }
}