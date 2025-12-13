// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  experimental: {
    // Keep this off unless you're ready to wire the babel plugin.
    reactCompiler: false,
    // Helps reduce bundle size for these libs (auto-imports per module)
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    // Prefer smaller, modern formats
    formats: ["image/avif", "image/webp"],
  },
  productionBrowserSourceMaps: false,
  // Optional: strip console.* in production except warn/error
  compiler: isProd
    ? { removeConsole: { exclude: ["error", "warn"] } }
    : undefined,

  // Strong caching for framework assets
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // If you serve public images under /images
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
