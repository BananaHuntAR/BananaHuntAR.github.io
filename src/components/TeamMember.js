import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';

const TeamMember = ({ name, imgUrl, bio, github, linkedIn }) => (
  <Segment raised className="team-member">
    <Image src={imgUrl} className="headshot" rounded />
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <Button
        circular
        color="black"
        icon="github"
        onClick={() => window.open(github)}
      />
      <Button
        circular
        color="linkedin"
        icon="linkedin"
        onClick={() => window.open(linkedIn)}
      />
    </div>
  </Segment>
);

export default TeamMember;
