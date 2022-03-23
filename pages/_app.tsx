import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layouts/main'
import '@fontsource/m-plus-rounded-1c'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
