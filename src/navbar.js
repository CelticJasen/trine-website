const navbar = (contentDiv) => {
    contentDiv.innerHTML = `
        <nav id = "navbar">
            <img src="images/logowhite.png" class="logo">
            <ul>
                <li class="navButton">Home</li>
                <li class="navButton">About</li>
                <li class="navButton">Contact</li>
            </ul>
        </nav>
    `
}

export default navbar;