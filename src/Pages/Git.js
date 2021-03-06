import React from 'react'

function Git() {
    return (
        <div>
            <div className="head">What is Git</div>
            <div className="content">
                <div className="sub-head">Git Basics
                    <div className="text">
                    Git is a free and open source version control system, 
                originally created by Linus Torvalds in 2005. Unlike older centralized version control systems 
                such as SVN and CVS, Git is distributed: every developer has the full history of their code repository locally. 
                This makes the initial clone of the repository slower,but subsequent operations such as commit, blame, diff, 
                merge, and log dramatically faster.

                Git also has excellent support for branching, merging, and rewriting repository history, which has lead to 
                many innovative and powerful workflows and tools. Pull requests are one such popular tool that allow teams 
                to collaborate on Git branches and efficiently review each others code. Git is the most widely used version 
                control system in the world today and is considered the modern standard for software development.
                    </div>
                </div>    
            </div>          
        </div>
    )
}

export default Git
