"use client";

import Link from "next/link";
import { AlertTriangle, Loader2 } from "lucide-react";

export default function Maintaince() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background">
      {/* Animated background blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Content */}
      <div className="z-10 flex items-center justify-center h-screen">
        {/* Main Content */}
        <main className="flex flex-col items-center max-w-3xl text-center">
          <Loader2 className="w-16 h-16 mx-auto mb-8 text-muted-foreground animate-spin" />

          <p className="text-lg mb-6 text-muted-foreground">
            We are adding new Features to the site
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            This site is under <span className="text-primary">Maintenance</span>{" "}
          </h1>

          <p className="text-lg mb-2 text-muted-foreground">
            For urgent concerns you may contact us directly
          </p>

          <Link
            href="mailto:parthkapoor488@gmail.com"
            className="text-lg text-primary hover:underline"
          >
            parthkapoor488@gmail.com
          </Link>
        </main>
      </div>

      <style jsx>{`
        .blob {
          position: absolute;
          filter: blur(40px);
          opacity: 0.4;
          animation: float 10s infinite ease-in-out;
          border-radius: 50%;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: #e879f9;
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: #818cf8;
          bottom: -50px;
          left: -50px;
          animation-delay: -2s;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: #fb7185;
          top: 50%;
          right: 30%;
          animation-delay: -4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}
