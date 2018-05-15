import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import Marshall from '../img/Marshall.jpg';

const Team = () => (
  <Grid columns={2} className="padding">
    <Grid.Row>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
            className="headshot"
          />
          <h2>Andrew</h2>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
            className="headshot"
          />
          <h2>Valerie</h2>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
            className="headshot"
          />
          <h2>Frances</h2>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image src={Marshall} size="small" rounded className="headshot" />
          <div>
            <h2>Marshall</h2>
            <p>Marshall is a software engineer</p>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Team;
