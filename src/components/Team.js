import React from 'react';
import { Grid, Segment, Image, Button } from 'semantic-ui-react';
import TeamMember from './TeamMember';
import Marshall from '../img/Marshall.jpg';

const Team = () => (
  <Grid columns={2} className="padding">
    <Grid.Row>
      <Grid.Column>
        <TeamMember
          name="Andrew"
          bio="Info here"
          imgUrl="/assets/images/wireframe/media-paragraph.png"
          github="https://github.com/andventuree"
          linkedIn="https://www.linkedin.com/in/andreww-wong/"
        />
      </Grid.Column>
      <Grid.Column>
        <TeamMember
          name="Valerie"
          bio="Info here"
          imgUrl="/assets/images/wireframe/media-paragraph.png"
          github="https://github.com/valpil"
          linkedIn="https://www.linkedin.com/in/valerie-pilossof/"
        />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <TeamMember
          name="Frances"
          bio="Info here"
          imgUrl="/assets/images/wireframe/media-paragraph.png"
          github="https://github.com/francesyw"
          linkedIn="https://www.linkedin.com/in/francesyuanwang/"
        />
      </Grid.Column>
      <Grid.Column>
        <TeamMember
          name="Marshall"
          bio="Marshall is a fullstack JavaScript engineer living in New York
              City. He has prior work experience as a consultant for PwC and
              Grant Thornton. Marshall is graduate of Fullstack Academy of Code
              and the College of William and Mary. His interests include data
              modeling and analysis, capital markets and financial services
              (especially the 2008 financial crisis), and anything related to
              film or baseball."
          imgUrl={Marshall}
          github="https://github.com/dmzobel"
          linkedIn="https://www.linkedin.com/in/marshallzobel/"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Team;
