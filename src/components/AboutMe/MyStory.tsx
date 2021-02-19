import React from 'react';

const MyStory: React.FC = () => {
	return (
		<section>
			<h1>Nice to meet you.</h1>

			<img id="profile" src="images/circle-cropped.png" alt="Headshot" />
			<div className="info">
				<h2>My History</h2>
				<p>
          Hi there! Welcome to my portfolio site! My name's Ashley. I'm
          currently a student at Coder Academy working towards my Diploma of
          Information Technology on my way to becoming a full stack web
          developer.
				</p>
				<br />
				<p>
          My first memories of a computer are sitting on my Mums lap "helping"
          her play Myst. Ever since then I've hooked on games, computers and
          technology. As a confused teenager I wasn't sure where I wanted to end
          up and went on to some really weird and interesting jobs ranging from
          selling video games at EB Games to teaching at a Martial Arts dojo to
          doing QA in a life insurance company. All the while I was still hooked
          on computers and technology.
				</p>
				<br />
				<p>
          These days you'll find me sitting at my desk with a cat or two on my
          lap taking full advantage of COVID-19 to take the time to study the
          thing I'm truly passionate about and make it into my career and
          future. In my spare time I'm probably playing video games, reading or
          maybe even trying my hand at some pixel art (yes, the cat is probably
          still on my lap). You can see some of my work by going to my Codepen
          or clicking through to my portfolio page!
				</p>
			</div>
		</section>
	);
};

export default MyStory;
