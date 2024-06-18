// pages/api/services.js

// import client from "../../sanity/sanity.client";
import client from "../../../sanity/sanity.client";

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
  const query = `*[_type == "service"]{
    _id,
    name,
    details,
    slug,
    "imageUrl": serviceImage.asset->url,
    "imageUrl2": serviceIcon.asset->url
  }`;

  const response = await client.fetch(query);
  res.status(200).json(response);
}
