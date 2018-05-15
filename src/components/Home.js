import React from 'react';
import { Container, Header, Button, Icon, Image } from 'semantic-ui-react';
import logo from '../img/logo.png';

const Home = () => (
  <Container text className="heading">
    <Image src={logo} size="medium" style={{ alignSelf: 'center' }} />
    <Header
      as="h1"
      content="Banana Hunt"
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0
      }}
    />
    <Header
      as="h2"
      content="An augmented reality scavenger hunt!"
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em'
      }}
    />
    <Button primary size="huge">
      Download The App! <Icon name="cloud download" />
    </Button>
    <Button
      color="black"
      size="huge"
      onClick={() => window.open('https://github.com/ScavengAR', '_blank')}
    >
      <Icon name="github" />Source Code
    </Button>
  </Container>
);

export default Home;
