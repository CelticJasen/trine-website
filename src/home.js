const homePage = (contentDiv) => {
    let pageContent = document.createElement('div');

    pageContent.innerHTML = `
        <div>
            <div class="backgroundimage">

            </div>
            <div class="CenterDiv">
                <h1>
                    We Provide Technology Solutions
                </h1>
                <h1>
                    So You Can Stay Focused On The Things That Matter.
                </h1>
                <p>
                    Get the most practical and cost effective support available.
                </p>
            </div>
            <div id="callwraper">
                <div id="callnow">
                    <h3>Call Now</h3>
                </div>
                <div id="callbutton">
                    <a href="tel:417-413-1549" target="_blank" data-icon="">417-413-1549 <i class="fa fa-phone"></i></a>
                </div>
            </div>
            <div id="jobs">
                <h1>Computer Repair</h1>
                <h1>Electronics Repair</h1>
                <h1>Hardware Replacement</h1>
                <h1>Custom Built PCs</h1>
                <h1>Data Recovery</h1>
                <h1>Enterprise Solutions</h1>
                <h1>Virus Removal</h1>
                <h1>Ransomware Prevention</h1>
                <h1>Backup Solutions</h1>
                <h1>Diagnostics</h1>
                <h1>Tech Support</h1>
                <h1>Remote Monitoring</h1>
                <h1>Password Recovery</h1>
                <h1>BIOS Restoration</h1>
                <h1>Network Management</h1>
                <h1>Camera Installation</h1>
                <h1>Software Development</h1>
                <h1>Website Development</h1>
            </div>
        </div>
    `
    contentDiv.appendChild(pageContent);
}

export default homePage;
