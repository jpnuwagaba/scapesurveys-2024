// portableTextComponents.tsx
import React from "react";
import { PortableTextReactComponents } from "@portabletext/react";

const PortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-5 mt-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-900 mb-2 mt-5">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-bold text-gray-900 mb-2 mt-5">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-bold text-gray-900 mb-2 mt-5">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-200 rounded px-1">{children}</code>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    strike: ({ children }) => <span className="line-through">{children}</span>,
    link: ({ value, children }) => {
      const { href } = value;
      return (
        <a
          href={href}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

export default PortableTextComponents;
