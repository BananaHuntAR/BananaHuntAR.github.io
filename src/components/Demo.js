import React from 'react';
import { Embed, Button, Icon } from 'semantic-ui-react';

const Demo = () => (
  <div className="video">
    <Embed id="LcGKAu49MnA" source="youtube" className="youtube-video" />
    <p className="paragraph">
      Trouble viewing the video?{' '}
      <Button
        color="youtube"
        onClick={() =>
          window.open('https://www.youtube.com/watch?v=LcGKAu49MnA')
        }
      >
        <Icon name="youtube" /> Watch Here
      </Button>
    </p>
  </div>
);

export default Demo;
