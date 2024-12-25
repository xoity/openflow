import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing',
      },
    ];
  },
};

export default config;

