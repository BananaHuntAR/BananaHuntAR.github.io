import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Image,
  Confirm
} from 'semantic-ui-react';
import logo from '../img/logo.png';

export default class Home extends React.Component {
  state = { open: false };

  showMessage = () => this.setState({ open: true });
  closeMessage = () => this.setState({ open: false });

  render() {
    return (
      <Container text className="heading">
        <Image src={logo} size="medium" style={{ display: 'inline' }} />
        <Header as="h1" content="Banana Hunt" inverted className="title" />
        <Header
          as="h2"
          content="An augmented reality scavenger hunt for monkeys!"
          inverted
          className="subtitle"
        />
        <Button primary size="huge" onClick={this.showMessage}>
          Download The App! <Icon name="cloud download" />
        </Button>
        <Button
          color="black"
          size="huge"
          onClick={() => window.open('https://github.com/ScavengAR')}
        >
          <Icon name="github" /> Source Code
        </Button>
        <Confirm
          open={this.state.open}
          onConfirm={this.closeMessage}
          onCancel={this.closeMessage}
          header="Coming Soon!"
          content="We're sorry, Banana Hunt is not yet available for download."
        />
      </Container>
    );
  }
}

// const Home = () => (
//   <Container text className="heading">
//     <Image src={logo} size="medium" style={{ display: 'inline' }} />
//     <Header as="h1" content="Banana Hunt" inverted className="title" />
//     <Header
//       as="h2"
//       content="An augmented reality scavenger hunt for monkeys!"
//       inverted
//       className="subtitle"
//     />
//     <Button primary size="huge" onClick={this.showMessage}>
//       Download The App! <Icon name="cloud download" />
//     </Button>
//     <Button
//       color="black"
//       size="huge"
//       onClick={() => window.open('https://github.com/ScavengAR')}
//     >
//       <Icon name="github" /> Source Code
//     </Button>
//     <Confirm open={this.state.open} onConfirm={this.closeMessage} />
//   </Container>
// );
