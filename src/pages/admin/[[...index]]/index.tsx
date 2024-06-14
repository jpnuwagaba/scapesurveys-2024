
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import React from "react";

export default function index() {
  return (
    <>
      <div className="absolute w-full z-50">
        <NextStudio config={config} />
      </div>
    </>
  );
}
