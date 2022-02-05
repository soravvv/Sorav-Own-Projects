function navbar() {
    return ` <div id="header">
            <a href="/index.html"><div id="image">
                <img src="https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png">
            </div></a>
            <div id="searches">
                <input type="text" id="video" placeholder="Search">
                <button id="searchVideo" onclick="searchVideo()">Search</button>
                <div id="signup">
                    <a href="/signUp.html">Sign Up
                    </a>
                </div>
                <div id="signin">
                    <a href="/signIn.html">Sign In
                    </a>
                </div>
                <div id="greet"></div>
            </div>
        </div>`;
}

export default navbar;