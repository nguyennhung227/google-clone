import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function WebSearchPage({ searchParams }: Props) {
  const startIndex = searchParams.start || "1";
  const term = searchParams.searchTerm;
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${term}&start=${startIndex}
`);
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for: "{term}"</h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{results && <WebSearchResults results={data} />}</div>;
}
