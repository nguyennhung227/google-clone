import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-24">
      <h2 className="text-4xl bold my-10">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-500 hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
