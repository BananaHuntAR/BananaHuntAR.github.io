import React from 'react';
import { Container, Header, Button, Icon, Image } from 'semantic-ui-react';
import logo from '../img/logo.png';

const Home = () => (
  <Container text className="heading">
    <Image src={logo} size="medium" style={{ display: 'inline' }} />
    <Header as="h1" content="Banana Hunt" inverted className="title" />
    <Header
      as="h2"
      content="An augmented reality scavenger hunt for monkeys!"
      inverted
      className="subtitle"
    />
    <Button primary size="huge">
      Download The App! <Icon name="cloud download" />
    </Button>
    <Button
      color="black"
      size="huge"
      onClick={() => window.open('https://github.com/ScavengAR')}
    >
      <Icon name="github" /> Source Code
    </Button>
  </Container>
);

export default Home;
