import React from 'react';
import MyStory from './MyStory';
import Skills from './Skills';
import Interests from './Interests';

const AboutMe: React.FC = () => {
	return (
		<div>
			<MyStory />
			<Skills />
			<Interests />
		</div>
	);
};

export default AboutMe;
