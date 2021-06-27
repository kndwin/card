import { Link, Card, Row, Grid, Image, Text} from "@geist-ui/react";
import { Layout} from "components";

export default function WorkPage() {
	const work = [
		{ 
			url: 'https://min.kndwin.dev', 
			source: 'https://github.com/kndwin/min', 
			img:'/work/min.webp'
		}, {
			url: 'https://jobs.kndwin.dev', 
			source: 'https://github.com/kndwin/jobs-nextjs', 
			img:'/work/jobs.webp'
		}, {
			url: 'https://kndwin.dev', 
			source: 'https://github.com/kndwin/kndwindev', 
			img:'/work/kndwindev.webp'
		}
	]
	return (
		<Layout>
			<Grid.Container gap={2} justify='flex-start'>
				{ work.map(({ url, source, img}) => (
				<Grid key={url} xs={24} md={12} style={{ flexDirection: 'column'}}>
					<Card hoverable>
						<Card.Content>
							<Image.Browser invert url={url}>
								<Image alt='image' src={img} />
							</Image.Browser>
						</Card.Content>
						<Card.Footer>
							<Link color icon underline target="_blank" href={source}>Visit source code on Github</Link>
						</Card.Footer>
					</Card>
				</Grid>
				))}
			</Grid.Container>
		</Layout>
	)
}
