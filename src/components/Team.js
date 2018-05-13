import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

const Team = () => (
  <Grid columns={2} divided className="team-grid">
    <Grid.Row>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
          />
          <p>Andrew</p>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
          />
          <p>Valerie</p>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment className="team-member">
          <Image
            src="/assets/images/wireframe/media-paragraph.png"
            size="small"
            rounded
          />
          <p>Frances</p>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised className="team-member">
          <Image src="../../img/Marshall.jpg" size="small" rounded />
          <div>
            <p>Marshall</p>
            <p>Marshall is a software engineer</p>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Team;
