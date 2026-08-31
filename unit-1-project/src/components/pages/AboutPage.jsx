import React from "react";

const AboutPage = () => {
    return (
        <>
        <div className="about-page">

            <h1>About True Carry</h1>
            
                <h2>Why True Carry Exists</h2>
                    <p>
                        Ask most golfers how far they hit their 7-iron and you'll get a confident number.
                        Ask where that number came from and things get vague. It might be from one perfect 
                        shot years ago, or a downhill lie on a hot day, or something a playing partner said once.
                        Very few amateur golfers have ever actually measured their clubs, which means most of us are
                        choosing clubs on the course based on a number we've never tested. 
                        The tools that solve this properly are launch monitors, and the good ones run from a few thousand dollars
                        into the tens of thousands. The cheap consumer versions are inconsistent enough that you're often no better off.
                        Meanwhile, most driving ranges have exactly one piece of measuring equipment: flags at known yardages, sitting out there in the grass.
                        True Carry is built around the idea that those flags are enough.
                    </p>

                <h2>How It Works</h2>
                    <p>
                        You start by building your bag and entering what you think each club carries. That number is a starting point, not an answer. The app is going to test it.
                        At the range, you pick a club and pick a flag you're aiming at. Then you hit shots and tap where each one finished 
                        relative to that flag: way short, a little short, pin high, a little long, or way long. One tap per shot, so you can keep up 
                        while you work through a bucket. Each outcome maps to a yardage offset scaled to the distance you're hitting. Being ten yards short of a wedge shot is a 
                        much bigger miss than being ten yards short of a long iron, and the app accounts for that.
                        After five or more shots, True Carry averages those adjusted yardages into an estimated carry distance for that club, 
                        and shows it next to what you claimed. Sometimes they match. Often they don't, and the gap is the useful part.
                    </p>

                <h2>What This Is And Isn't</h2>
                    <p>
                        True Carry gives you an estimate, not a measurement. It's built on your own judgment of where the ball finished, 
                        so it's only as good as your honesty about it. Range balls also fly shorter than the balls you play on the course, 
                        so treat these numbers as a relative guide across your bag rather than exact course yardages.
                        What it does well is show you which clubs you've been wrong about, and where the gaps are between them. That's 
                        the information most amateur golfers are missing, and it costs nothing but attention while you're already at the range.
                    </p>

                <h2>About This Project</h2>
                    <p>
                        True Carry was built by David Halla as a portfolio project for LaunchCode. The current version is a 
                        React application using Vite, with React Router for navigation and browser localStorage for saving your 
                        bag and your shot history. I built True Carry because as a golfer, I wanted something that could reliably track my distances with my clubs.
                        Launch monitors are too expensive, upwards of $20,000. And I don't have access to a golf simulator which a lot of golfers can relate to. 
                        Whenever I'm stood on a par 3, I never know what club to take out because I generally don't how far my clubs go. I'm sick of guessing
                        how far my clubs go. It is costing me rounds that I should be scoring better on. If you are having trouble on how far your clubs really go, join the True Carry Family!
                    </p>

        </div>
        </>
    )
}

export default AboutPage;