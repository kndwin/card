import clsx from "clsx";
import { Link, Text, Card, Tag, Tooltip } from "@geist-ui/react";
import {
  Apollographql,
  Nextdotjs,
  Typescript,
  Threedotjs,
  Chakraui,
  Tailwindcss,
  Sass,
  Linux,
  Nodedotjs,
  Express,
  Postgresql,
  Prisma,
  Amazonaws,
  Graphql,
  Solidity,
  Docker,
  Kubernetes,
  Git,
} from "@icons-pack/react-simple-icons";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FaceModel, Layout } from "components";
import { useLocation } from "hooks";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Intro />
        <PastWork />
        <Tools />
      </div>
    </Layout>
  );
}

const Intro = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { city, error } = useLocation();

  return (
    <>
      <Text
        h1
        className={clsx(
          "flex flex-col items-center mb-8 text-4xl",
          "sm:text-6xl sm:flex-row"
        )}
      >
        <span className="w-16 h-16 mb-8 mr-4 sm:mb-0">
          {mounted && (
            <Canvas
              className="w-full h-full"
              orthographic
              camera={{ zoom: 15 }}
            >
              <ambientLight intensity={0.7} />
              <Suspense fallback={null}>
                <FaceModel />
              </Suspense>
            </Canvas>
          )}
        </span>
        hey!
      </Text>
      <Card type="lite">
        <Text>
          <span className="text-lg font-bold">
            {city && `You're from ${city}?`}
            <br />
            {city === "Sydney"
              ? "No way! I'm from Sydney too!"
              : "Welcome to my site!"}
          </span>
          <br />
          <span className="text-lg font-bold">
						{"I'm a software engineer"}
            {city === "Sydney" ? "." : " based in Sydney."}
          </span>
        </Text>
      </Card>
    </>
  );
};

const PastWork = () => {
  const pastWork = [
    {
      link: "https://mirvac.com",
      role: "solution engineer",
      company: "mirvac",
      current: true,
    },
    {
      link: "https://atelier.co",
      role: "fullstack engineer",
      company: "atelier",
    },
    {
      link: "https://appian.com",
      role: "solution engineer",
      company: "appian",
    },
  ];
  return (
    <>
      <Text
        h1
        className={clsx(
          "flex flex-col items-center mt-16 mb-8 text-4xl",
          "sm:text-6xl sm:flex-row mx-auto"
        )}
      >
        💼 work
      </Text>
      <Card type="lite">
        {pastWork.map(({ link, role, company, current }) => (
          <div key={link} className="mb-4">
            <p className="my-0 text-2xl font-bold">
              {current ? "currently " : "previously "}
              <Link color href={link}>
                @{company}
              </Link>
            </p>
            <Text className="m-0 text-2xl leading-6">{role}</Text>
          </div>
        ))}
      </Card>
    </>
  );
};

const Tools = () => {
  const tools = [
    {
      name: "Apollo GraphQL",
      icon: <Apollographql />,
    },
    {
      name: "Next.js",
      icon: <Nextdotjs />,
    },
    {
      name: "TypeScript",
      icon: <Typescript />,
    },
    {
      name: "Three.js",
      icon: <Threedotjs />,
    },
    {
      name: "Chakra UI",
      icon: <Chakraui />,
    },
    {
      name: "Tailwind CSS",
      icon: <Tailwindcss />,
    },
    {
      name: "Sass",
      icon: <Sass />,
    },
    {
      name: "Linux",
      icon: <Linux />,
    },
    {
      name: "Node.js",
      icon: <Nodedotjs />,
    },
    {
      name: "Express",
      icon: <Express />,
    },
    {
      name: "PostgreSQL",
      icon: <Postgresql />,
    },
    {
      name: "Prisma",
      icon: <Prisma />,
    },
    {
      name: "Amazon AWS",
      icon: <Amazonaws />,
    },
    {
      name: "GraphQL",
      icon: <Graphql />,
    },
    {
      name: "Solidity",
      icon: <Solidity />,
    },
    {
      name: "Docker",
      icon: <Docker />,
    },
    {
      name: "Kubernetes",
      icon: <Kubernetes />,
    },
    {
      name: "Git",
      icon: <Git />,
    },
  ];

  return (
    <>
      <Text
        h1
        className={clsx(
          "flex flex-col items-center mt-16 mb-8 text-4xl",
          "sm:text-6xl sm:flex-row"
        )}
      >
        🔨 tools
      </Text>
      <Card type="lite">
        <div className="grid gap-6 grid-cols-6">
          {tools.map(({ name, icon }) => (
            <Tooltip
              key={name}
              enterDelay={0}
              leaveDelay={0}
              type="dark"
              text={name}
            >
              {icon}
            </Tooltip>
          ))}
        </div>
      </Card>
    </>
  );
};
