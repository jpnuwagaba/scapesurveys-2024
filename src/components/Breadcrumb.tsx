import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import titles from "../utils/titles";
import titles from "@/lib/titles";
import client from "../../sanity/sanity.client";

const Breadcrumb = () => {
  const router = useRouter();
  const pathArray = router.asPath.split("/").filter((path) => path);
  const [dynamicTitles, setDynamicTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchDynamicTitles = async () => {
      const newDynamicTitles: { [key: string]: string } = {};

      for (const path of pathArray) {
        if (!titles[`/${path}`] && !dynamicTitles[`/${path}`]) {
          const result = await client.fetch(
            `*[_type == "service" && slug.current == $slug]{name}[0]`,
            { slug: path }
          );
          if (result?.name) {
            newDynamicTitles[`/${path}`] = result.name;
          }
        }
      }

      setDynamicTitles((prevTitles) => ({ ...prevTitles, ...newDynamicTitles }));
    };

    fetchDynamicTitles();
  }, [pathArray]);

  const getTitle = (path: string) => {
    const fullPath = "/" + pathArray.slice(0, pathArray.indexOf(path) + 1).join("/");
    return dynamicTitles[fullPath] || titles[fullPath] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-white text-sm">
        <li className="flex items-center">
          <Link className="text-blue-600 hover:underline" href="/">
            {titles["/"]}
          </Link>
          {pathArray.length > 0 && <span className="mx-2">/</span>}
        </li>
        {pathArray.map((path, idx) => {
          const href = "/" + pathArray.slice(0, idx + 1).join("/");
          return (
            <li key={href} className="flex items-center">
              <Link className="text-blue-600 hover:underline" href={href}>
                {getTitle(path)}
              </Link>
              {idx < pathArray.length - 1 && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
