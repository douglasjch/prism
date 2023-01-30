import Link from "next/link";
import { 
  SiFacebook,
  SiInstagram,
  SiReddit,
  SiTiktok,
  SiTwitter,
} from "react-icons/si";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Heading } from "../components/Heading";

import "../styles/globals.css";

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h2" size="3xl" className="mt-12 mb-7 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="pl-1 mb-1 list-decimal last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="pl-1 mb-1 list-disc last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="p-4 text-sm rounded mb-7 bg-slate-100 last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={(props) => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      {/* top social banner */}
        <div className="px-5 pb-0 bg-green-100 ">
          <p className="flex justify-center pt-4 pb-4" >                 
            <Link href="https://www.facebook.com/" className="mx-2 duration-300 ease-in-out hover:scale-125"><SiFacebook /></Link>
            <Link href="https://www.twitter.com/" className="mx-2 duration-300 ease-in-out hover:scale-125"><SiTwitter /></Link>
            <Link href="https://www.instagram.com/" className="mx-2 duration-300 ease-in-out hover:scale-125"><SiInstagram /></Link>
            <Link href="https://www.reddit.com/" className="mx-2 duration-300 ease-in-out hover:scale-125"><SiReddit /></Link>
            <Link href="https://www.tiktok.com/" className="mx-2 duration-300 ease-in-out hover:scale-125"><SiTiktok /></Link>
            <Link href="https://herbs-and-oils.swell.store/" className="font-bold text-black underline mx-7 hover:bg-green-200">Shop Our Store!</Link>
          </p>
        </div>
        
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
