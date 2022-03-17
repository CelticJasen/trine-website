const contactPage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
        <div class="CenterDiv">
            <h1>
                Contact Information:
            </h1>
            <ul>
                <li>417-413-1549</li>
                <li>contact@trinetechnologies.com</li>
            </ul>
        </div>
    `

    contentDiv.appendChild(pageContent);
}

export default contactPage;