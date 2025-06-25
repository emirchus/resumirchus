import HeroVideoDialog from "@/app/(landing)/components/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/app/(landing)/components/wobble-card";
import { Check, Mail, Sparkle, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
  return (
    <main>
      <section className="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]">
        <div className="py-20 md:py-36">
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <div>
              <Link
                href="#"
                className="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150"
              >
                <div
                  aria-hidden
                  className="border-background bg-linear-to-b dark:inset-shadow-2xs to-foreground from-primary relative flex size-5 items-center justify-center rounded border shadow-md shadow-black/20 ring-1 ring-black/10"
                >
                  <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
                  <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
                  <Sparkle className="size-3 text-primary-foreground drop-shadow" />
                </div>
                <span className="font-medium">Introducing AI Summary</span>
              </Link>
              <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Build Your Resume 10x Faster with AI
              </h1>
              <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
                Craft a polished, professional resume in minutes using our
                cutting-edge, AI-powered resume builder. No more endless
                formatting or worrying about structure—just the perfect resume,
                every time.
              </p>

              <div className="flex items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/builder">
                    <span className="text-nowrap">Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="mt-12 md:mt-16">
                <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                  <HeroVideoDialog
                    className="block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/7eAo2EJbGSk?si=4rb-zSdDkVK9qxxb"
                    thumbnailDarkSrc="/preview.png"
                    thumbnailSrc="/preview-light.png"
                    thumbnailAlt="Resume Builder Preview"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="flex flex-col items-start justify-start container mx-auto border pb-32 border-dashed py-32"
      >
        <h1 className="mx-auto mt-8 max-w-7xl text-balance text-start text-4xl font-bold tracking-tight sm:text-5xl">
          Features That Set Us Apart
        </h1>
        <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
          Our resume builder isn’t just another tool—it’s your gateway to
          crafting the perfect resume with ease. No hidden fees, no paywalls,
          just simple, fast, and effective resume building for everyone.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-[#807562] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                AI-Powered Summaries
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Harness the power of AI to automatically generate professional
                summaries that highlight your skills and experience in the best
                possible way. No more worrying about word choices or formatting.
              </p>
            </div>
            <Image
              src="/summary-ai.png"
              width={500}
              height={204}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-5 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 min-h-[300px] bg-[#735728]"
            className="bg-[#735728]"
          >
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              A Sleek, Professional Design
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Your resume will stand out with our beautifully designed
              templates, optimized for both aesthetics and functionality,
              ensuring you look professional without the hassle.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-[#907562] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
            className="bg-[#907562]"
          >
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Completely Free, No Strings Attached
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                We believe in making this tool accessible to everyone. There are
                no hidden charges or paywalls—use it for as long as you want,
                without worrying about unexpected costs.
              </p>
            </div>
            <Image
              src="/preview.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </section>
      <section
        id="pricing"
        className="relative py-16 md:py-32 border-t-0 border-dashed border container mx-auto"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
              Start Building Your Perfect Resume Today
            </h2>
          </div>
          <div className="mt-8 md:mt-20">
            <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
              <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                <div className="pb-12 text-center md:pb-0 md:pr-12">
                  <h3 className="text-2xl font-semibold">Free</h3>
                  <p className="mt-2 text-lg">
                    Create a resume of any size without any hidden fees
                  </p>
                  <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                    <span className="text-4xl">$</span>0
                  </span>

                  <div className="flex justify-center">
                    <Button asChild size="lg">
                      <Link href="/builder">Get Started</Link>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mt-12 text-sm">
                    No cards, no registration—just a free service with unlimited
                    access.
                  </p>
                </div>
                <div className="relative">
                  <ul role="list" className="space-y-4">
                    {[
                      "AI-Powered Summary Creation",
                      "Sleek & Professional Design Templates",
                      "One-Click Export to PDF, PNG, or JPG",
                      "Unlimited Use—No Hidden Fees",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="size-3" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-6 text-sm">
                    Everything you need to create your perfect resume—free of
                    charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 container mx-auto border-t-0 border-dashed border"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                Frequently <br className="hidden lg:block" /> Asked{" "}
                <br className="hidden lg:block" />
                Questions
              </h2>
              <p>We’re here to answer all your questions—no matter what!</p>
            </div>

            <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
              <div className="pb-6">
                <h3 className="font-medium">How can I contact you?</h3>
                <p className="text-muted-foreground mt-4">
                  You can easily reach us by email or Twitter for any questions
                  or concerns.
                </p>

                <ol className="list-outside list-decimal space-y-2 pl-4">
                  <li className="text-muted-foreground mt-4 flex items-center gap-2">
                    <Mail className="size-3" />
                    <a
                      href="mailto:contact@resumirchus.emirchus.ar"
                      className="hover:underline"
                    >
                      contact@resumirchus.emirchus.ar
                    </a>
                  </li>
                  <li className="text-muted-foreground mt-4 flex items-center gap-2">
                    <Twitter className="size-3" />
                    <a
                      href="https://x.com/emirchus"
                      className="hover:underline"
                    >
                      Emirchus
                    </a>
                  </li>
                </ol>
              </div>
              <div className="py-6">
                <h3 className="font-medium">Is this truly free?</h3>
                <p className="text-muted-foreground mt-4">
                  Yes, absolutely! Our service is completely free with no
                  strings attached.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-medium">How can I export my resume?</h3>
                <p className="text-muted-foreground my-4">
                  You can export your resume in multiple formats: PDF, PNG, or
                  JPG—all for free!
                </p>
                <ul className="list-outside list-disc space-y-2 pl-4">
                  <li className="text-muted-foreground">
                    PDF Export is available for free.
                  </li>
                  <li className="text-muted-foreground">
                    PNG Export is available for free.
                  </li>
                  <li className="text-muted-foreground">
                    JPG Export is available for free.
                  </li>
                </ul>
              </div>
              <div className="py-6">
                <h3 className="font-medium">Will this ever become paid?</h3>
                <p className="text-muted-foreground mt-4">
                  No, we are committed to keeping this service free for
                  everyone, always.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-medium">Is my information secure?</h3>
                <p className="text-muted-foreground mt-4">
                  Yes, your information is completely safe. We don’t store your
                  data, and we never use third-party services to handle it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
