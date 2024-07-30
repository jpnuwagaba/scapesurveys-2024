import React, { ReactElement } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Ensure these imports match your library structure
import { useRouter } from "next/router";

// Helper function to format breadcrumb items
const formatBreadcrumbItem = (item: string): string => {
  return item
    .replace(/-/g, " ") // Replace hyphens with spaces
    .split(" ") // Split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join back into a single string
};

export function Breadcrumbs(): ReactElement {
  const router = useRouter();
  const routes = router.asPath.split("/").filter((route) => route); // Split the path into segments

  let fullHref: string | undefined = undefined;
  const breadcrumbItems: ReactElement[] = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const href: any = fullHref ? `${fullHref}/${route}` : `/${route}`;
    fullHref = href;

    const formattedRoute = formatBreadcrumbItem(route); // Format the route

    if (i === routes.length - 1) {
      // Last item should be displayed as a page
      breadcrumbItems.push(
        <>
          <BreadcrumbSeparator />
          <BreadcrumbItem key={href}>
            <BreadcrumbPage>{formattedRoute}</BreadcrumbPage>
          </BreadcrumbItem>
        </>
      );
    } else {
      // All other items
      breadcrumbItems.push(
        <React.Fragment key={href}>
          {i > 0 && <BreadcrumbSeparator />}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={href}>{formattedRoute}</BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>
      );
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
