import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/Layouts/article'
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in Michigan!
        </Box>
        <Box display={{ md: 'flex ' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              David Munro
            </Heading>
            <p>Digital Craftsman (Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ mde: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/david.jpeg"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            David is a freelance and full-stack developer based in Michigan with
            a passion for thoughtful UI design, collaboration, and teaching. He
            has a knack for all things launching products, from planning an
            designing all the way to solving real-life problems with code. When
            not online, he loves playing disc golf and spending time with his
            family.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1986</BioYear>
            Born in Michigan, United States.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Software internship at Harman International
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Started job as Test Engineer at Harman.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed Bachelors of Science in Computer Science from Wayne State
            University.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked as Android Developer at Harman.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Start job at Deepfield(Nokia) as software engineer.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Started job as full-stack engineer at Strata Oncology.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            My family, Disc golf, Building Apps and minimalism
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/djmunro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  djmunro
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/munrod86" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @munrod86
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
