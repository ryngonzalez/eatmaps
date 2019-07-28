import Link from "next/link";
import { NavBar } from "../components";

export default () => (
  <div>
    <NavBar />
    <Link href="/about">
      <a>Hello</a>
    </Link>
  </div>
);
