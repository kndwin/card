import { Col, Button, Row, Display, Text } from '@geist-ui/react'
import { NextDotJs, Typescript, ThreeDotJs,
NodeDotJs, Express, Postgresql,
Amazonaws, Graphql, Solidity
} from '@icons-pack/react-simple-icons';
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { FaceModel } from 'components'
import { Layout } from 'components'
import { Twitter, Github } from '@geist-ui/react-icons'

export default function Home() {
	const [mounted,setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) {
		return null
	}
	return (
		<Layout>
			{ mounted &&
			<Display shadow 
				style={{ margin: '1em 0 0 0'}}
				caption={`wannabe full stack engineer`}>
				<Canvas style={{ height: '20em' }} 
					orthographic 
					camera={{zoom: 30}}
				>
					<ambientLight intensity={0.7} />
					<Suspense fallback={null}>
						<FaceModel />
					</Suspense>
				</Canvas>
			</Display>
			}

			<Row style={{ margin: '3em 0'}} justify='center'>
				<Col span={8}>
					<Row justify='center'>
						<Col><NextDotJs /></Col>
						<Col><Typescript  /></Col>
						<Col><ThreeDotJs /></Col>
						<Col><NodeDotJs /></Col>
						<Col><Express /></Col>
						<Col><Postgresql /></Col>
						<Col><Amazonaws /></Col>
						<Col><Graphql  /></Col>
						<Col><Solidity /></Col>
					</Row>
				</Col>
			</Row>

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
