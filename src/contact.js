const contactPage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
        <div class="CenterDiv">
            <h1>
                Contact Information:
            </h1>
            <ul>
                <li>417-712-6626</li>
                <li>contact@trinetechnologies.tech</li>
            </ul>
        </div>
        <div class="TheMap" title="Map showing business location.">
            <img class="MapImage" src="./images/map.png" alt="Map showing business location">
        </div>
        <div class="ContactData">
            <div class="ContactField">
                <h3 class="ContactHeader">Contact</h3>
                <div data-field="phone">
                    <a class="ContactButton" href="tel:417-712-6626" data-tracking-element-type="3" jslog="56037; track:impression,click" itemprop="telephone" dir="ltr">Call now</a>
                    <ul>
                        <li dir="ltr">(417) 712-6626</li>
                    </ul>
                </div>
            </div>
            <div class="ContactField">
                <h3 class="ContactHeader">Address</h3>
                <div data-field="address">
                    <a class="ContactButton" href="https://www.google.com/maps/place/Trine+Technologies+LLC/@36.747144,-91.8071745,4361m/data=!3m1!1e3!4m6!3m5!1s0x87d0f9a79e6baa4f:0x2d6f6bd89ef61179!8m2!3d36.7464504!4d-91.7968559!16s%2Fg%2F11g_v264vf" target="_blank" data-tracking-element-type="6" jslog="56039; track:impression,click">Get directions</a>
                    <address class="Address" itemprop="address">
                    <div>8538 County Road 8030</div>
                    <div>West Plains, MO 65775</div>
                    <div>USA</div>
                </address>
                </div>
            </div>
            <div class="ContactField">
                <h3 class="ContactHeader">Business Hours</h3>
                <div>
                    <table itemprop="openingHours">
                        <tbody>
                            <tr>
                                <th class="Days">Mon:</th>
                                <td class="Times">
                                    <span class="TimesData">7:00 PM – 8:00 PM</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Tue:</th>
                                <td class="Times">
                                    <span class="TimesData">7:00 PM – 8:00 PM</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Wed:</th>
                                <td class="Times">
                                    <span class="TimesData">7:00 PM – 8:00 PM</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Thu:</th>
                                <td class="Times">
                                    <span class="TimesData">7:00 PM – 8:00 PM</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Fri:</th>
                                <td class="Times">
                                    <span class="TimesData">7:00 PM – 8:00 PM</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Sat:</th>
                                <td class="Times">
                                    <span class="TimesData">Closed</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="Days">Sun:</th>
                                <td class="Times">
                                    <span class="TimesData">Closed</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `

    contentDiv.appendChild(pageContent);
}

export default contactPage;
