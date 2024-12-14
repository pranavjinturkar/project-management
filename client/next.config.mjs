/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "pm-bucket-s3-images.s3.ap-south-1.amazonaws.com",
            port: "",
            pathname: "/**",
         }
      ]
   }
};

export default nextConfig;
