import { Link, Card, Grid, Image } from "@geist-ui/react";
import { Layout } from "components";

export default function WorkPage() {
  const work = [
    {
      url: "https://dofie.kndwin.dev",
      source: "https://github.com/kndwin/book-client",
      img: "/work/dofie.gif",
    },
    {
      url: "https://resumesfor.dev",
      source: "https://github.com/kndwin/resumesfordev",
      img: "/work/resumesfordev.gif/",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6">
        {work.map(({ url, source, img }) => (
          <Card key={url} hoverable className="h-20 w-60 sm:h-60">
            <Card.Content>
              <a href={url} target="_blank" rel="noreferrer">
                <Image.Browser invert url={url}>
                  <Image
                    className="object-fill"
                    height={30}
                    alt="image"
                    src={img}
                  />
                </Image.Browser>
              </a>
            </Card.Content>
            <Card.Footer>
              <Link
                color
                icon
                underline
                target="_blank"
                rel="noreferrer"
                href={source}
              >
                Visit source code on Github
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
