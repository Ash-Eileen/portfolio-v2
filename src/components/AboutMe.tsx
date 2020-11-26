import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <section id="history">
        <img id="profile" src="images/circle-cropped.png" alt="Headshot" />
        <div className="info">
          <h2>My History</h2>
        <p>Hi there! Welcome to my portfolio site! My name's Ashley. I'm currently a student
at Coder Academy working towards my Diploma of Information Technology on my way to becoming a
full stack web developer.</p>
        <br />
        <p>My first memories of a computer are sitting on my Mums lap "helping"
her play Myst. Ever since then I've hooked on games, computers and technology. As a confused teenager I wasn't sure
where I wanted to end up and went on to some really weird and interesting jobs ranging from selling video
games at EB Games to teaching at a Martial Arts dojo to doing QA in a life insurance company. All the while 
I was still hooked on computers and technology.</p>
        <br />
        <p>These days you'll find me sitting at my desk with a cat or two on my lap taking full advantage of
COVID-19 to take the time to study the thing I'm truly passionate about and make it into my career and future. 
In my spare time I'm probably playing video games, reading or maybe even trying my hand at some pixel art (yes, 
the cat  is probably still on my lap). You can see some of my work by going to my Codepen or clicking through to 
my portfolio page! </p>
      </div>
      </section>

      <section id="skills">
        <div className="skill-container">
          <h2>Skills</h2>
          <div id="skill-icons"> 
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-python-plain-wordmark"></i>
            <i className="devicon-ruby-plain-wordmark"></i>
            <i className="devicon-git-plain-wordmark"></i>
          </div>
      </div>
      </section>

      <section id="interests">
        <div className="info">
        <h2>Interests</h2>
        <p>Did I mention that I like video games? Did I <strong>also</strong> mention that I worked in a Martial
Arts dojo? </p>
        <br />
        <p>I'm a huge lover of games from JRPGs to MOBAs to MMOs. The one type of game you probably won't find me 
playing is an FPS. Why? I'm a terrible shot. I'm an equal opportunity gamer playing everything from console games 
to handheld to PC games.</p>
        <br />
        <p>As a kid I was never very good at sports, until I found <strong>my</strong> sport. Karate. Since I was
a teenager I trained in multiple styles of Martial Arts, earning my second dan blackbelt and also travelling 
internationally to compete in tournaments. I've trained in karate, kickboxing, jiu jitsu, taekwondo and MMA.</p>
        <br />
        <p>You might also catch me hanging out on the weekend with a cat snuggled up to me knitting or doing
crochet.</p>
      </div>
      </section> 
    </div>
  )
}

export default AboutMe
