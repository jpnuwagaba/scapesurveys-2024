import React, { FC } from "react";
import imageUrlBuilder from '@sanity/image-url';
import client from "../../sanity/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Props {
  name: string;
  logo: any; 
}

const Client: FC<Props> = ({ name, logo }) => {
  return (
    <div className="h-36 w-36 rounded-md p-4 flex flex-col justify-center items-center shadow-lg">
      <img src={urlFor(logo).url()} alt={name} className="" />
    </div>
  );
};

export default Client;

