import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/Layouts/article'
import Paragraph from '../../components/paragraph'
import { Meta, ProjectImage, Title, WorkImag } from '../../components/project'

const Project = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <Paragraph>
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="">
              How I've attracted the first 500 paid users for my SaaS{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage src="/images/projects/inkdrop_01.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
}

export default Project
