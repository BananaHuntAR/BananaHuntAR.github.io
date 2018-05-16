import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import bananaTeam from '../img/bananaTeam.png';

const About = () => (
  <div className="padding">
    <Segment raised>
      <Image src={bananaTeam} />
      <h1>The Game</h1>
      <p className="paragraph">
        Banana Hunt is a virtual reality scavenger hunt where users must collect
        all of the VR bananas in as little time as possible. Final times are
        recorded and the top 10 times are displayed in the global leaderboard.
        Users can log in to view their past scores, and also have the ability to
        create their own custom scavenger hunt by dropping bananas in locations
        of their choosing!
      </p>
      <h1>The Project</h1>
      <p className="paragraph">
        This project was created by members of Fullstack Academy's 1802 cohort
      </p>
    </Segment>
  </div>
);

export default About;
