class Search extends React.Component {
    render() {
        const style = {display:"flex"}
        const imgstyle = {width:"50vw", height:"40vh"}
        const inputstyle = {width:"95vw", marginBottom: "10px"}
        return (
            <div>
            <input type="text" placeholder="search" style={inputstyle}/>
            <div style = {style}>
            <img style={imgstyle} src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/3243025/pexels-photo-3243025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div style = {style}>
            <img style={imgstyle} src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/804126/pexels-photo-804126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div style = {style}>
            <img style={imgstyle} src="https://images.pexels.com/photos/575362/pexels-photo-575362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/1427579/pexels-photo-1427579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <img style={imgstyle} src="https://images.pexels.com/photos/1000985/pexels-photo-1000985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            </div>
        )
    }
}