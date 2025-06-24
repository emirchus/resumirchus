import { Footer, Header } from "@/app/(landing)/components/global";
import HeroVideoDialog from "@/app/(landing)/components/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/app/(landing)/components/wobble-card";
import { Check, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <Header />
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
                  Build your Resume 10x Faster
                </h1>
                <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
                  Create a professional resume in minutes with our AI-powered
                  resume builder.
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
                      videoSrc="https://www.youtube.com/embed/ek2lL8cH09w?si=4rb-zSdDkVK9qxxb"
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
            Features
          </h1>
          <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
            Our resume builder is free to use and there are no hidden fees.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-[#807562] min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  AI powers your summary
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Our AI-powered resume builder uses advanced algorithms to
                  generate a professional resume in seconds.
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
                Best Design
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Our resume builder uses the best design templates to create a
                professional resume.
              </p>
              <Image
                src="/resume.png"
                width={500}
                height={204}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-[150%] object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-3 bg-[#907562] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
              className="bg-[#907562]"
            >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  No Paywall, No Hidden Fees
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Our resume builder is free to use and there are no hidden
                  fees.
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
                Start building your resume today
              </h2>
            </div>
            <div className="mt-8 md:mt-20">
              <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                  <div className="pb-12 text-center md:pb-0 md:pr-12">
                    <h3 className="text-2xl font-semibold">Free</h3>
                    <p className="mt-2 text-lg">For your resume of any size</p>
                    <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                      <span className="text-4xl">$</span>0
                    </span>

                    <div className="flex justify-center">
                      <Button asChild size="lg">
                        <Link href="/builder">Get started</Link>
                      </Button>
                    </div>

                    <p className="text-muted-foreground mt-12 text-sm">
                      Includes : no cards, no registration. FREE
                    </p>
                  </div>
                  <div className="relative">
                    <ul role="list" className="space-y-4">
                      {[
                        "AI Summary",
                        "Design Easy to use",
                        "All in one",
                        "Export to PDF, PNG or JPG",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="size-3" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground mt-6 text-sm">
                      We offer this for free, it&apos;s a free service for
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
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
                <p>We are here to help you with any questions you may have.</p>
              </div>

              <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                <div className="pb-6">
                  <h3 className="font-medium">How can I contact you?</h3>
                  <p className="text-muted-foreground mt-4">
                    You can contact us via email or twitter for any questions or
                    concerns you may have.
                  </p>

                  <ol className="list-outside list-decimal space-y-2 pl-4">
                    <li className="text-muted-foreground mt-4">
                      Email:{" "}
                      <a href="mailto:contact@gippity.com">
                        contact@resumirchus.emirchus.ar
                      </a>
                    </li>
                    <li className="text-muted-foreground mt-4">
                      <a href="https://x.com/emirchus">Emirchus</a>
                    </li>
                  </ol>
                </div>
                <div className="py-6">
                  <h3 className="font-medium">It&apos;s free?</h3>
                  <p className="text-muted-foreground mt-4">
                    Yes, it&apos;s free. We offer this for free, it&apos;s a
                    free service for everyone.
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="font-medium">How can I export my resume?</h3>
                  <p className="text-muted-foreground my-4">
                    You can export your resume to PDF, PNG or JPG.
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
                  <h3 className="font-medium">
                    Will it be paid in the future?
                  </h3>
                  <p className="text-muted-foreground mt-4">
                    No, we will not charge you for anything.
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="font-medium">My information is safe?</h3>
                  <p className="text-muted-foreground mt-4">
                    Yes, your information is safe. We do not store any of your
                    information. We do not use any third party services to store
                    your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
