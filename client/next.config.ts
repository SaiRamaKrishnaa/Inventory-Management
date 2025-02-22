import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[{
      protocol:"https",
      hostname: "project-inventory-management-bucket.s3.ap-south-1.amazonaws.com",
      pathname:"/**"
    }]
  }
};

export default nextConfig;
