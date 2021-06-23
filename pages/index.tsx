import { Button, Row, Display, Text } from '@geist-ui/react'
import { NextDotJs, Typescript, ThreeDotJs } from '@icons-pack/react-simple-icons';
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
			<Row style={{ display: 'flex', justifyContent: 'center'}}>
				<Text h4>
					kndwin
				</Text>
			</Row>
			{ mounted &&
			<Display shadow 
				style={{ margin: '1em 0 0 0'}}
				caption={`🔨 wannabe full stack engineer`}>
				<Canvas style={{ height: '20em' }} orthographic camera={{zoom: 30}}>
					<ambientLight intensity={1} />
					<Suspense fallback={null}>
						<FaceModel />
					</Suspense>
				</Canvas>
			</Display>
			}
			<Row style={{ display: 'flex', justifyContent: 'center', margin: '2em 0'}}>
				<NextDotJs />
				<Typescript style={{ margin: '0 1em'}} />
				<ThreeDotJs />
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
