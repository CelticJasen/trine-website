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
    `

    contentDiv.appendChild(pageContent);
}

export default aboutPage;