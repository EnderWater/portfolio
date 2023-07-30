import ProjectDescription from "./ProjectDescription";

function ProjectDescriptionSection({portfolio_items}) {

    const descriptions = [
        "Church Talks is an app I built because I didn't want to spend 20 seconds searching " +
        "for an LDS conference talk to listen to. Originally, it was built with Python using BeautifulSoup, SQLite, " +
        "and KivyMD. After finishing this project, I couldn't get it onto my phone, so I switched to a different approach: " +
        "using Java and the Android SDK. Now, my original Python script scrapes LDS.org for its conference talk information" +
        " (title, author, year, and URL), builds an SQLite database, and populates that database with the scraped data. " +
        "Then, Java and the Android SDK are used to build the front and back end of the mobile app.",

        "Seal bot is a Discord bot built in Fall of 2022 because I wanted to see if I could build a Discord bot. " +
            "Clearly I could because now Seal Bot exists. The bot supports a few different commands: !commands, " +
            "!sealpicture, !sealmovie, and !sealfact. \"!commands\" displays all of the available commands. " +
            "\"!sealpicture\", \"!sealmovie\", and \"!sealfact\" all send a message to the Discord server of a random " +
            "picture, movie, and fact respectively. A queue is implemented to prevent any repetition of messages before all unique messages have been sent.",

        "Beams is a game I built while experimenting with the Python library Arcade. The goal of the game is to avoid the " +
        "\"beams\" for as long as possible. If you survive long enough, you win! The beams spawn from the right and fly to " +
        "the left. The difficulty ramps up as the time progresses by spawning more and more beams every 10 or so seconds. " +
        "The game is much more enjoyable than I first expected, and I would've loved to play it in an arcade when I was a kid.",

        "While searching for a job online, I came across several job listings that had \"React\" listed as a skill. To continue " +
        "developing my skills as a software engineer, I began researching what React was and how to use it. After writing a few " +
        "practice React programs (an online calculator mainly), construction began on this website. It is a project that will continue " +
        "to be worked on for the foreseeable future. ",
    ]

    const technologies_list = [
        ["Java", "Python", "Android SDK", "SQLite", "KivyMD"], //Church talks
        ["Python", "Discord API"],
        ["Python", "Arcade"],
        ["React"],
        ["React"],
    ]

    const media = [
        {video: null, picture: "./church_talks/church_talks_picture.jpg"},
        {video: null, picture:[null]},
        {video: "./beams/beams_video.mp4", picture:[null]},
        {video: null, picture:[null]},
    ]

    let project_description = []

    for (let i=0; i<portfolio_items.length; i++){
        project_description.push(<ProjectDescription text={descriptions[i]}
                                                     projectName={portfolio_items[i]}
                                                     technologies={technologies_list[i]}
                                                     media={media[i]}
        />)
    }

    return(<divi className="project-description">
        {project_description}
        </divi>)
}

export default ProjectDescriptionSection;
