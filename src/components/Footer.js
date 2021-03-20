import React from 'react';

const Footer = () => {

    const learnItems = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "AirPods", "HomePod", "iPod touch", "Accessories", "Gift Cards"];
    const servicesItems = ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud", "Apple One", "Apply Pay", "Apple Books", "App Store"];
    const accountItems = ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"];
    const storeItems = ["Find a store", "Shop Online", "Genius Bar", "Today at Apple", "Apple Summer Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"];
    const businessItems = ["Apple and Business", "Shop for Business"];
    const educationItems = ["Apple and Education", "Shop for University"];
    const healthcareItems = ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"];
    const valuesItems = ["Accessibility", "Environment", "Privacy", "Supplier Responsibility"];
    const aboutItems = ["Newsroom", "Apple Leadership", "Job Opportunities", "Warranty", "Investors", "Events", "European Job Creation", "Contact Apple"];

    return (
        <div style={{backgroundColor: "#f5f5f7"}}>
            <div className="container mx-auto py-2 px-5">
                <div className="py-3">
                    <p className="text-xs">1. iPhone 12 mini pricing is before the application of a trade-in credit. Monthly pricing requires a 24-month instalment loan with 0% APR from Barclays Partner Finance, which is a trading name of Clydesdale Financial Services Limited, a member of the Barclays Group. Subject to application and status. Full terms apply.</p>
                    <div className="h-3" />
                    <p className="text-xs">Representative example: £699 purchase. Total amount of credit £699 paid over 24 months as 23 monthly payments of £29.12 and a final payment of £29.24 at 0% p.a. Total cost of credit £0.</p>
                    <div className="h-3" />
                    <p className="text-xs">Trade-in values will vary based on the condition, year and configuration of your trade-in device. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Store Gift Card. Not all devices are eligible for credit. More details are available from Apple’s trade‑in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Payments are based on the received device matching the description you provided when your estimate was made. Apple reserves the right to refuse or limit the quantity of any device for any reason. Value of your current device may be applied towards purchase of a new Apple device. Offer may not be available in all stores. Some stores may have additional requirements.</p>
                    <div className="h-3" />
                    <p className="text-xs">2. iPhone 12 Pro pricing is before the application of a trade‑in credit. Monthly pricing requires a 24-month instalment loan with 0% APR from Barclays Partner Finance, which is a trading name of Clydesdale Financial Services Limited, a member of the Barclays Group. Subject to application and status. Full terms apply.</p>
                    <div className="h-3" />
                    <p className="text-xs">Representative example: £999 purchase. Total amount of credit £999 paid over 24 months as 23 monthly payments of £41.62 and a final payment of £41.74 at 0% p.a. Total cost of credit £0.</p>
                    <div className="h-3" />
                    <p className="text-xs">Trade‑in values will vary based on the condition, year and configuration of your trade‑in device. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Store Gift Card. Not all devices are eligible for credit. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply. Payments are based on the received device matching the description you provided when your estimate was made. Apple reserves the right to refuse or limit the quantity of any device for any reason. Value of your current device may be applied towards purchase of a new Apple device. Offer may not be available in all stores. Some stores may have additional requirements.</p>
                    <div className="h-3" />
                    <p className="text-xs">3. £9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.</p>
                    <div className="h-3" />
                    <p className="text-xs">4. The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</p>
                    <div className="h-3" />
                    <p className="text-xs">Apple TV+ is £4.99/month after free trial. One subscription per Family Sharing group. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
                </div>
                <div className="py-1">
                    <hr className="border-gray" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">Shop and Learn</p>
                            <ul>
                                {learnItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">Services</p>
                            <ul>
                                {servicesItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">Account</p>
                            <ul>
                                {accountItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">Apple Store</p>
                            <ul>
                                {storeItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">For Business</p>
                            <ul>
                                {businessItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">For Education</p>
                            <ul>
                                {educationItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">For Healthcare</p>
                            <ul>
                                {healthcareItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">Apple Values</p>
                            <ul>
                                {valuesItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="py-2">
                            <p className="text-xs font-bold py-2">About Apple</p>
                            <ul>
                                {aboutItems.map((element) => {
                                    return(
                                        <li className="py-1 hidden md:block" key={element}>
                                            <a href="/">
                                                <p className="text-xs">{element}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <p className="text-xs">More ways to shop: <a href="/" className="text-blue">find an Apple Store</a> or <a href="/" className="text-blue">other retailer</a> near you. Or call 0800 048 0408.</p>
                </div>
                <div className="py-1">
                    <hr className="border-gray" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <div className="text-left">
                        <p className="text-xs">Copyright © 2021 Apple Inc. All rights reserved.</p>
                    </div>
                    <div className="text-left md:text-right pt-3 md:pt-0">
                        <p className="text-xs">United Kingdom</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;