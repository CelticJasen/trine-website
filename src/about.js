const aboutPage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
        <div class="CenterDiv">
            <h1>
                Providing Technology Support For West Plains and Surrounding Areas
            </h1>
            <p>
                Excellent solutions for all your technology needs.
            </p>
        </div>
        <div class="TextBlock">
            <p>
                I have lived in West Plains and surrounding areas since I got home back in 2012 from serving in the Army for nearly 10 years. Since then, I went on to college to get a degree in computer programming. After finishing with that, my career has been working with computer technology ever since. I started this business back in 2020 just as the whole COVID thing started to kick off. It was a rocky start to say the least because of that. My goal is to provide tech services to the people and small businesses in town because it doesn't seem like there are a whole lot of skilled and reliable businesses like that around here. I've seen quite a few come and go and I intend to stick around.
            </p>
        </div>
    `

    contentDiv.appendChild(pageContent);
}

export default aboutPage;
