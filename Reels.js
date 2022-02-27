class Reels extends React.Component {
    render() {
        const videostyle = {width:"80vw", marginLeft: "100px"}
        return (
            <>
                <h2>Reels</h2>
                <video style={videostyle}  src="https://player.vimeo.com/external/415289689.sd.mp4?s=5f5ec58d7a6ef996a083e5d8aadf511112fcf47c&profile_id=139&oauth2_token_id=57447761" />
                <video style={videostyle}  src="https://player.vimeo.com/external/408412129.sd.mp4?s=76ec61ca4192efe52c4d04629ebc49b05eb1951f&profile_id=139&oauth2_token_id=57447761" />
                <video style={videostyle}  src="https://player.vimeo.com/external/415278025.sd.mp4?s=2cd7f75674b85ba9af5d2a651c97df9d289b619a&profile_id=139&oauth2_token_id=57447761" />
            </>
        )
    }
}