import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import bananaTeam from '../img/bananaTeam.png';
import demo00 from '../img/demo00.png';
import demo01 from '../img/demo01.png';
import demo03 from '../img/demo03.png';
import demo04 from '../img/demo04.png';
import demo05 from '../img/demo05.png';
import demo07 from '../img/demo07.png';

const About = () => (
  <div className="padding">
    <Segment className="about scroll" raised>
      <div className="flex">
        <Image src={bananaTeam} className="padding" />
        <h1 className="title">Banana Hunt</h1>
      </div>
      <p className="paragraph">
        <b>Banana Hunt</b> is an augmented reality scavenger hunt that can be
        played anywhere in the world!
      </p>
      <Image src={demo00} size="large" spaced />
      <Image src={demo01} size="large" spaced />
      <p className="paragraph">
        Users must capture all of the AR bananas as quickly as possible. The
        fastest times show up on the global leaderboard!
      </p>
      <Image src={demo03} size="large" spaced />
      <Image src={demo04} size="large" spaced />
      <p className="paragraph">
        Users also have the ability to create their own custom scavenger hunt
        maps! Just log in and start dropping bananas in the location of your
        choice.
      </p>
      <Image src={demo07} size="large" spaced />
      <Image src={demo05} size="large" spaced />
      <h1 className="title">Happy Hunting!!</h1>
    </Segment>
  </div>
);

export default About;
