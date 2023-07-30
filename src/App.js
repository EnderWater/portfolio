import './App.css';
import ListItems from "./ListItems"
import ProjectDescriptionSection from "./ProjectDescriptionSection";

function App() {
    const portfolio_items = ["Church Talks",
        "Seal Bot",
        "Beams",
        "This Website",
    ]

    return (
        <html id="html">
            <head>
                <title>Connor's Portfolio</title>
            </head>

            <body>
                <div className="App">
                {/*<div className="">*/}
                {/*    <DropDownMenu portfolio_items={portfolio_items} />*/}
                {/*</div>*/}
                    <div className="links" style={{display: "flex",
                        width:"10vw",
                        height:"10vh",
                    }}>
                        <a href={"https://www.linkedin.com/in/connorfreeman/"} target={"_blank"} rel="noreferrer">
                            <img alt={"LinkedIn"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"}
                                 style={{width:"calc(50px + 5vmin)",
                                     height:"calc(50px + 5vmin)",
                                     paddingInlineEnd: "10px",
                                 }}/>
                        </a>
                        <a href={"https://github.com/EnderWater"} target={"_blank"} rel="noreferrer">
                            <img alt={"GitHub"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"}
                                 style={{width:"calc(50px + 5vmin)",
                                     height:"calc(50px + 5vmin)",
                                 }}/>
                        </a>
                    </div>
                    <header className="App-header">
                        <h1>Connor Freeman's Portfolio</h1>
                        <nav className="portfolio-list">
                            <ul>
                                <ListItems
                                    listOfItems={portfolio_items}
                                    classname={"portfolio-list-items"}
                                    href={true}
                                />
                            </ul>
                        </nav>
                    </header>
                        <ProjectDescriptionSection portfolio_items={portfolio_items} />
                    <footer className="footer" style={{textAlign: "center"}}>
                        <div className="contact-me">
                            <h3>
                                Got any questions or want to contact me? You can email me at <a
                                    href={"mailto:connor.ryan.freeman@gmail.com?subject = Question&body = Message"}>
                                    connor.ryan.freeman@gmail.com
                                </a>
                                ! I'd love to get in contact with you.
                            </h3>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}

export default App;
