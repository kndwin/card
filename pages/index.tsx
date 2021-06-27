import { Grid, Col, Button, Row, Display, Text } from '@geist-ui/react'
import { NextDotJs, Typescript, ThreeDotJs,
Chakraui, Sass,
NodeDotJs, Express, Postgresql,
Redis, Mysql, 
Amazonaws, Graphql, Solidity,
Docker, Kubernetes, Git, Travisci
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
				caption={`wannabe devops`}>
				<Canvas style={{ height: '20em', width: '20em' }} 
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
				<Grid.Container justify='center' gap={2} style={{ width: '25em'}}>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={24}><Text style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Front-end</Text></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><NextDotJs  size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Typescript size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Chakraui   size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Sass			 size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={24}><Text style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Back-end</Text></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><NodeDotJs	 size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Express		 size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Postgresql size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Mysql			 size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Redis			 size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Graphql    size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={24}><Text style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Devops</Text></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Amazonaws  size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Docker     size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Kubernetes size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Git     size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Travisci     size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={24}><Text style={{ fontWeight: 'bold', fontSize: '1.5em'}}>Others</Text></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><Solidity   size={40}/></Grid>
					<Grid style={{ display: 'flex', justifyContent: 'center'}} xs={8} sm={4}><ThreeDotJs size={40}/></Grid>
				</Grid.Container>
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
