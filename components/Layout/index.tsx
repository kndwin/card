import { Twitter, Github, FileText, Linkedin } from "@geist-ui/react-icons";
import { Button, Text, Link, Page, Tooltip } from "@geist-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement, useEffect, useState } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement | null {
  const router = useRouter();
  const route = router.route;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const links = [
    { title: "kndwin", link: "/" },
    { title: "blog", link: "/blog" },
    { title: "work", link: "/work" },
  ];
  const socials = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kndwindev/",
      icon: <Linkedin />,
      type: "success",
      ghost: true,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/kndwin",
      icon: <Twitter />,
      type: "success",
    },
    {
      title: "Github",
      link: "https://github.com/kndwin",
      icon: <Github />,
      type: "secondary",
    },
    {
      title: "Resume",
      link: "/KevinNguyen.pdf",
      icon: <FileText />,
      type: "secondary",
      ghost: true,
    },
  ];
  return (
    <div className="container flex flex-col items-center w-full h-full min-h-screen mx-auto">
      <header className="flex justify-center mt-2 mb-8">
        <div className="flex justify-center w-full pt-12">
          {links.map(({ title, link }) => (
            <Text
              className="mx-4"
              type={route == link ? "success" : "default"}
              key={title}
              h4
            >
              <Link href={link}>{title}</Link>
            </Text>
          ))}
        </div>
      </header>
      <main className="flex-1 h-full pt-2">{children}</main>
      <footer className="flex justify-center w-full py-8">
        {socials.map(({ title, link, icon, type, ghost = false }: any) => (
          <Tooltip key={link} text={title} type="dark">
            <a className="mx-2 my-4" href={link}>
              <Button scale={0.7} auto type={type} icon={icon} ghost={ghost} />
            </a>
          </Tooltip>
        ))}
      </footer>
    </div>
  );
}
