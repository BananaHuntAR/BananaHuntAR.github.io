import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Demo = () => (
  <div className="video">
    <div>
      <iframe
        src="https://www.youtube.com/embed/LcGKAu49MnA"
        frameBorder="0"
        title="banana-hunt-demo"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
    <p className="paragraph white">
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
