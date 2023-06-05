import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function HomeStack() {
  return (
    <Container>

      <div className="d-flex justify-content-center mx-2 my-4">
        <Image src="https://placehold.co/75" className="mx-auto" rounded />
        <Image src="https://placehold.co/75" className="mx-auto" rounded />
        <Image src="https://placehold.co/75" className="mx-auto" rounded />
      </div>

      <Stack gap={2} className="col-md-5 mx-auto">
        <Button size="lg" href="https://www.linkedin.com/in/mustafaishaq/" target="_blank" variant="secondary">LinkedIn Profile</Button>
        <Button size="lg" href="https://www.github.com/moosecodes/" target="_blank" variant="secondary">Github Profile</Button>
        <Button size="lg" href="https://drive.google.com/file/d/1BEk6qDZ5Ul7Tj_MEEE4bJbsLg5e0rzMH/view" target="_blank" variant="outline-secondary">Resume</Button>
        <Button size="lg" href="/about" variant="outline-secondary">About</Button>
        <Button size="lg" href="/blog" variant="outline-secondary" disabled>Blog</Button>
      </Stack>
    </Container>
  );
}

export default HomeStack;
