import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const Home = () => (
  <Container text className="heading">
    <Header
      as="h1"
      content="Banana Hunt"
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em'
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
      Download Today! <Icon name="cloud download" />
    </Button>
  </Container>
);

export default Home;
