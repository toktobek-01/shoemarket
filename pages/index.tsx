import Link from "next/link";
import Button from "../components/button";

export default function App() {
  return (
    <div>
      <Button label="button" />
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}
