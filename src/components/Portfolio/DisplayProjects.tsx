import React from "react";
import hangman from "../../images/hangman.gif";
import charmander from "../../images/charmander.png";
import portfolio from "../../images/portfolio.png";
import hackathon from "../../images/hackathon.png";
import valorantcoach from "../../images/valorantcoach.png";

const DisplayProjects: React.FC = () => {
  const projects: Array<Project> = [
    {
      image: hangman,
      link: `https://github.com/Ash-Eileen/terminal-app`,
      codeIcon: `devicon-ruby-plain colored`,
      name: ` Hangman Terminal App `,
      platformIcon: `devicon-github-plain`,
      description: <p>This is a command line app made using Ruby. I wanted to make something fun that could
      provide a bit of entertainment and thought about how much I loved playing Hangman with my Dad growing
      up so I decided to make my own version. Because I'm a huge cat lover I included a lot of ASCII cats 
      to try and make it a little bit more interesting. So far I haven't been able to find any way to break
      it but please feel free to clone the repo and give it a try yourself! You can play with friends or
      there's a single player mode.</p>,
    },
    {
      image: charmander,
      link: `https://codepen.io/Ash-Eileen/pen/MWaEbwW`,
      codeIcon: `devicon-css3-plain colored`,
      name: ` Pixel Charmander `,
      platformIcon: `fab fa-codepen`,
      description: <p>This little guy is CSS pixel art project. If you're anything like me you probably grew up
      playing a lot of pokemon as a kid. I wanted to keep playing around with CSS pixel art so I made Charmander. If 
      you go and visit my <a href="https://codepen.io/Ash-Eileen" target="_blank" rel="noreferrer"><strong><u>codepen
      </u></strong></a> you'll find that I've made all of the original starters as well as Pikachu, because who doesn't 
      love that little electric mouse, and a few others. Making CSS pixel art is something I find really relaxing so 
      I might add the second generation starters as well.</p>,
    },
    {
      image: portfolio,
      link: `https://github.com/Ash-Eileen/portfolio`,
      codeIcon: `devicon-sass-original colored`,
      name: ` Original Portfolio Website `,
      platformIcon: `devicon-github-plain portfolio-icon`,
      description: <p>This is my first portfolio website. You can view it <a href='https://ashleysmith.netlify.app/' target='_blank' 
      rel="noreferrer"><strong><u>here</u></strong></a>. This website was designed to showcase my skills and my projects. It also 
      served as a bit of an introduction to who I am. It was made using HTML and SCSS. I wanted to ensure the site was accessible 
      so all colours have been tested to ensure they're WCAG AAA compliant and I have also tried to ensure that semantic HTML tags 
      have been used to make sure the page is accessible to devices such as screen readers. I tested a few different themes for the 
      site but found this combination of dark blue with green and pink accents to be the most appealing to me. I was very proud to 
      be able to create something that I think looks pretty good with the limited knowledge I had at the time.</p>,
    },
    {
      image: hackathon,
      link: `https://github.com/JordonGoodsir/Hackathon`,
      codeIcon: `devicon-javascript-plain colored`,
      name: `API Hackathon`,
      platformIcon: `devicon-github-plain`,
      description: <p>This is a super fun project made in 2.5 days for a JavaScript Hackathon. The brief was to make a site
      using HTML, CSS and JavaScript and to use an API. I worked with a partner and it was a great experience to get used to
      some more pair programming and to use branching with Git for each feature and to get used to a forking workflow. I used
      HTML, SCSS, Bootstrap and JavaScript to make the site. There are 6 APIs included, 3 for buttons and the front page and 3 
      pages used APIs as well. This was a great opportunity to get used to making API calls and to get comfortable using 
      programs like Postman. I really enjoyed making this project and using it as a learning experience.</p>,
    },
    {
      image: valorantcoach,
      link: `https://github.com/Ash-Eileen/marketplace_project`,
      codeIcon: `devicon-rails-plain-wordmark colored`,
      name: `Two Sided Rails Marketplace - Valorant Coach`,
      platformIcon: `devicon-github-plain`,
      description: <p>This is a two-sided marketplace made using Ruby on Rails. The live site can be found <a 
      href='https://valo-coach.herokuapp.com/' target='_blank' rel="noreferrer"><strong><u>here</u></strong></a>. It was made 
      to build on and show my skills in using Ruby on Rails. The idea is that people could list their services as a coach the 
      game of Valorant and others could purchase coaching sessions with them. It utilises Ruby on Rails, HTML, SCSS, Bootstrap, 
      JavaScript for Strip integration, PostgreSQL, Heroku for deployment and Amazon S3. Making this site was a great way to 
      learn a lot more about Rails when I was still fairly new to it. I feel like this project made me really familiar with the 
      Rails documentation and a lot better versed in a lot of the functionality of the framework.</p>,
    },
    {
      image: "",
      link: ``,
      codeIcon: ``,
      name: `Express Hackathon`,
      platformIcon: ``,
      description: <p></p>,
    },
  ];
  return (
    <>
      {projects.map((project, i) => {
        return (
          <section key={i}>
            <img src={project.image} alt={project.name} />
            <h3>
              <a href={project.link}>
                <i className={project.codeIcon}></i>
                {project.name}
                <i className={project.platformIcon}></i>
              </a>
            </h3>
            <p>{project.description}</p>
          </section>
        );
      })}
    </>
  );
};

export default DisplayProjects;
