import React from 'react';
import { Grid } from 'semantic-ui-react';
import TeamMember from './TeamMember';
import Marshall from '../img/Marshall.jpg';
import Val from '../img/Val.jpg';
import Andrew from '../img/Andrew.png';

const Team = () => (
  <Grid columns={2} className="padding">
    <Grid.Row>
      <Grid.Column>
        <TeamMember
          name="Andrew"
          bio="Andrew is software engineer born and raised in Brooklyn, New York. Previously, he was a Transfer Pricing Tax Consultant at Ernst & Young providing tax advice to US headquartered banks and private equity clients. He’s attracted to technical challenges and enjoys immersing himself in learning about areas of interest such as software engineering, entrepreneurship, marketing, fitness, and horology."
          imgUrl={Andrew}
          github="https://github.com/andventuree"
          linkedIn="https://www.linkedin.com/in/andreww-wong/"
        />
      </Grid.Column>
      <Grid.Column>
        <TeamMember
          name="Val"
          bio="Val is a Software Engineer hailing from the Northeast. After graduating from University of Michigan with a degree in business, she spent time in Chicago and Detroit working as a Financial Analyst and Digital Strategy Associate. She’s now back in the Big Apple to pursue a career in development post her education at the Fullstack Academy of Code. In her free time, you can find her traveling, trying new brunch places, or watching Game of Thrones."
          imgUrl={Val}
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
