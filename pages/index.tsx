import { Row, Link, Display, Text } from "@geist-ui/react";
import {
  NextDotJs,
  Typescript,
  ThreeDotJs,
  Chakraui,
  Tailwindcss,
  Sass,
  Linux,
  NodeDotJs,
  Express,
  Postgresql,
  Redis,
  Mysql,
  Amazonaws,
  Graphql,
  Solidity,
  Docker,
  Kubernetes,
  Git,
} from "@icons-pack/react-simple-icons";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FaceModel } from "components";
import { Layout } from "components";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Layout>
      <Row className="flex-col items-center justify-center h-full p-4 md:flex-row">
        <div
          className="flex flex-col items-center justify-center w-full h-full p-4 pt-8 md:pt-16"
        >
          <Text h3 b>
            👋 Hello! I'm Kevin
          </Text>
          <Text>
            💻 currently a junior dev at{" "}
            <Link color href="https://atelier.co">
              atelier.co
            </Link>
          </Text>
          <Text h3 className="mt-8">
            🔨 Tools I use
          </Text>
          <div className="flex mt-4">
            <Text className="" b>
              Frontend:
            </Text>
            <div className="flex pl-2 space-x-2">
              <NextDotJs />
              <Typescript />
              <ThreeDotJs />
              <Tailwindcss />
              <Sass />
              <Chakraui />
            </div>
          </div>
          <div className="flex mt-4">
            <Text className="" b>
              Backend:
            </Text>
            <div className="flex pl-2 space-x-2">
              <NodeDotJs />
              <Express />
              <Postgresql />
              <Redis />
              <Mysql />
              <Amazonaws />
            </div>
          </div>
          <div className="flex mt-4">
            <Text className="" b>
              Other:
            </Text>
            <div className="flex pl-2 space-x-2">
              <Graphql />
              <Solidity />
              <Docker />
              <Kubernetes />
              <Linux />
              <Git />
            </div>
          </div>
        </div>
        {mounted && (
          <Display shadow caption={"Move your mouse!"}>
            <Canvas
              style={{ height: "20em", width: "20em" }}
              orthographic
              camera={{ zoom: 30 }}
            >
              <ambientLight intensity={0.7} />
              <Suspense fallback={null}>
                <FaceModel />
              </Suspense>
            </Canvas>
          </Display>
        )}
      </Row>
    </Layout>
  );
}
