import { Link, Card, Row, Grid, Image, Text} from "@geist-ui/react";
import { Layout} from "components";

export default function WorkPage() {
	return (
		<Layout>
			<Grid.Container gap={2} justify='flex-start'>
				<Grid xs={24} md={12} style={{ flexDirection: 'column'}}>
					<Card hoverable>
						<Card.Content>
							<Image.Browser invert url='https://minmd.vercel.app'>
								<Image alt='image' src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" />
							</Image.Browser>
						</Card.Content>
						<Card.Footer>
							<Link color icon underline target="_blank" href="https://github.com/kndwin/jobs">Visit source code on Github</Link>
						</Card.Footer>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}
