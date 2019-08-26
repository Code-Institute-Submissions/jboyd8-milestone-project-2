# Milestone Project 2
## Description
---
This is my second milestone project on the Full Stack Developer course by Code Institute. The aim is to create a responsive mobile first appraoch dashboard, which contains several dynamic charts, to visualise various dimensiions of a chosen dataset.

I chose to use a dataset based on global shark attacks as this is something that I find interesting. This is purely a front-end project so no manipulation of the data has taken place on the back-end. This is purely a visualisation of data that is already in the file.

[Dashboard Website](https://jboyd8.github.io/milestone-project-2/)

## UX
---
I chose a very specific color theme for the dahboard based ont he topic involved. As it was based upon Shark Attack data I wanted to use nature colors which is how I decided upon blues and greens. I used an off white color for the font
for a bit of contrast. I felt tried to keep an element of repetition throughout the web pahe to provide the best user experience possible. This allows a user to learn how the website works quickly. In addition to this, I also provided some instructions on the site so that the user knows exactly how it works. As this was a dashboard project, I wanted to create a one page site. I feel as though this is the best way to show case the data at hand.

In terms of the font, I chose Cabin bcecause I felt it still looked very professional whilst still being sleek. I felt the need for it to still look professional on a dashboard was very important.

By utilising crossfilter.js and dc.js, I ensured the user could have some control over the data they wanted to see. On initial load up, all the data presented is unfiltered, and with the inclusin of some dropdown bars, and the clickable charts, users have the ability to filter information how they see fit.

I included a button in the footer to enable a user to go straight up to the top of the page rather than scrolling back up to enhance user experience. I also added a button in the footer to allow all charts to be reset for the same reason.

I have shared my wireframes below, however, the final site looks quite different. As I was developing the site, it became apparent that there was a better way for the data to be visualized, as well as allowing the data to be responsive on all devices, which was at the forefront of my design process. I initially wanted to go with a really simple design that just plainly showed the charts. However, upon development, I saw ways in which I can improve 

### User Stories
* I want to be able to view the number of Shark Attacks by country (top ten)
* I want to be able to view the number of Shark Attacks by Year
* I want to be able to filter by state for the Shark Attacks.
* I want to be able to filter data.

### Wireframes
####Desktop
![](images/wireframes/desktop.png)


## Features
---
#### Current Features
The current features of this dashboard include multiple interactive charts. By clicking on any value in any of the charts, all other charts
will filter accordingly.

#### Future Features
Future features will depends on the data available. I would like to add a chart to show attacks by species. The data in the species column of this
dataset was not complete.



## Technologies/Support Used
---
Below is a list of technolgies I used to build my dahsboard.
* HTML - HTML5 provided the structure of my website. I tried to use semantic elements where possible to ensure the best structure.
* CSS - Used to style my page.
* [Bootstrap]() - Used primarily for the grid system. I find this a really good way to position my elements where I want them.
* [VSCode]() - This is my text editor. It has a built in terminal so I could do everything I needed to from one environment.
* [Git]() - Git was used for version control. Allowing me to create backups whenever significant changes were made to my code.
* [GitHub]() - This is where my repository is held externally. I will aslo use GitHub pages to deploy my website.
* [Javascript/Jquery]() - 
* [d3.js]()
* [crossfilter.js]()
* [dc.js]()
* [Google Fonts]() - Used to import specific fonts I wanted to use on my website.


## Testing
---




## Bugs
---



## Deployment
---
My website was created using VSCode. VSCode is a text editor with a built in terminal. I chose to use a text editor/IDE outside of AWS Cloud9 to gain experience working outside of a browser. Once I had created my file strcuture and first HTML page, i initiated a local repository using GIT which was downloaded onto my machine previously. I then created an external repository in GitHub and linked the local and external repositories. This allowed me to version control throughout the lifespan of the development.

* I created a new environment in VS Code
* In the bash terminal, entered 'git init'
* Created all my folders and files.
* Entered 'git add .' into the bash terminal
* Entered 'git commit' into the bash terminal and created my initial commit
* I then linked my local git repository to a GitHub repository.
* I then followed the below steps to deploy the site to GitHub pages.

To deploy the website to GitHub pages, I followed the below steps:
* Selected the milestone-project-1 from my GitHub dashboard.
* Selected 'Settings' from the menu bar.
* From the GitHub pages section, I chose 'master branch' from the dropdown menu.
* Once selected, the page refreshed and a link was displayed in the GitHub pages section to my wesbite.
* [Website Link](https://jboyd8.github.io/milestone-project-2/)

### To run this project locally

* Follow this link to the [GitHub Repositiry](https://github.com/jboyd8/milestone-project-2)
* Click on the 'Clone or Download' button.
* Copy the URL provided.
* Open a bash terminal, move to your desired directory.
* Type 'git clone' and paste in the URL.


## Credits
---


#### Copied Code
