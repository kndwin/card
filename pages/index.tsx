import { Snippet, Button, Row, Display, Text } from '@geist-ui/react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { FaceModel } from 'components'
import { Layout } from 'components'
import { Twitter, Github } from '@geist-ui/react-icons'

export default function Home() {
	return (
		<Layout>
			<Display shadow 
				caption={`🔨 wannabe full stack engineer`}>
				<Canvas style={{ height: '20em' }} orthographic camera={{zoom: 30}}>
					<ambientLight intensity={1} />
					<Suspense fallback={null}>
						<FaceModel />
					</Suspense>
				</Canvas>
			</Display>
			<Row style={{ display: 'flex', justifyContent: 'center'}}>
				<a href="https://github.com/kndwin">
					<Button icon={<Github/>} 
						auto size="small" 
						style={{ margin: '0 0.5em'}}
						ghost type="secondary" 
					>
						Github
					</Button>
				</a>
				<a href="https://twitter.com/kndwindev">
					<Button icon={<Twitter color='twitter'/>} 
						auto size="small" 
						ghost type="success" 
						style={{ margin: '0 0.5em'}}
					>
						Twitter
					</Button>
				</a>
			</Row>
		</Layout>
	)
}
