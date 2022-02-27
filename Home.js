class Home extends React.Component {
    render() {
        const style = {marginLeft: "100px", width: "100px"}
        const imgstyle = {width:"80vw"}
        return(
            <>
            <h2>Instagram</h2>
            <div style = {style}>
            <img style={imgstyle} src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <br />
            <img  style={imgstyle} src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <br />
            <img  style={imgstyle} src="https://images.pexels.com/photos/3243025/pexels-photo-3243025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            </>
        )
    }
}