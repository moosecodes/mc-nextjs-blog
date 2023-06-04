import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function ButtonsExample() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button href="https://www.linkedin.com/in/mustafaishaq/" target="_blank" variant="secondary">About Me</Button>
      <Button variant="outline-secondary">Download Resume</Button>
      <Button variant="outline-secondary">About this site</Button>
      <Button variant="outline-secondary">Blog</Button>
    </Stack>
  );
}

export default ButtonsExample;
