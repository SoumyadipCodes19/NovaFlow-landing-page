"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { 
  Cloud, 
  FileText, 
  Github, 
  Hash, 
  MessageCircle, 
  Zap, 
  Database,
  Mail
} from "lucide-react";
import Image from "next/image";

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent border border-accent/20">
            Seamless Connectivity
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Integrate with Your Favorite Tools
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            NovaFlow connects with the apps you use every day. Automate workflows across your entire stack without writing a single line of code.
          </p>
        </div>

        <div
          className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <Cloud className="h-6 w-6 text-muted-foreground" />
              </Circle>
              <Circle ref={div5Ref}>
                <Mail className="h-6 w-6 text-muted-foreground" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <FileText className="h-6 w-6 text-muted-foreground" />
              </Circle>
              <Circle ref={div4Ref} className="h-24 w-24 border-accent/50 bg-accent/10">
                 <Image src="/logo.png" alt="NovaFlow" width={50} height={50} className="object-contain" />
              </Circle>
              <Circle ref={div6Ref}>
                <Zap className="h-6 w-6 text-muted-foreground" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Github className="h-6 w-6 text-muted-foreground" />
              </Circle>
              <Circle ref={div7Ref}>
                <MessageCircle className="h-6 w-6 text-muted-foreground" />
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            reverse
          />
        </div>
      </div>
    </section>
  );
}
