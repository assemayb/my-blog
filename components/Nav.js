import { Flex, NavLink } from "theme-ui";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex">
        <Flex as="nav">
          <Link href="/">
            <NavLink p={4}>Home</NavLink>
          </Link>

          <Link href="/projects">
            <NavLink p={4}>My Projects</NavLink>
          </Link>

          <Link href="about-me">
            <NavLink p={4}>About Me</NavLink>
          </Link>
        </Flex>
      </div>
      <style jsx>
        {`
          .flex {
            font-size: 30px;
          }
        `}
      </style>
    </>
  );
}
