import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Layout } from 'components'
import { getAllPostIds, getPostData } from 'utils/posts'
import { Row, Text} from '@geist-ui/react'
import { Clock } from '@geist-ui/react-icons'
import { components } from 'components'

type PostData = {
  postData: {
    title: string
    date: string
    fileContents: string
  }
}

export default function Post({ postData } : PostData) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
				<Text h2>
					{postData.title}
				</Text>
				<ReactMarkdown
					plugins={[gfm]}
					components={components}
				>
					{postData.fileContents}
				</ReactMarkdown>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}
