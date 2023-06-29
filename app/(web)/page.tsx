import Link from "next/link"

import {siteConfig} from "@/config/site"
import {buttonVariants} from "@/components/ui/button"
import Image from "next/image";

export default function IndexPage() {
  return (
    <section className="container grid grid-cols-1 grid-rows-1 gap-4 pt-20 lg:pt-24 lg:grid-cols-2">
      <div className="container grid items-center gap-6 order-2 lg:order-1">
        <div className="flex max-w-[980px] flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-normal md:text-4xl">
            <strong>Fit Nougat</strong> For Your Health with Nouggy!
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Siapa yang suka manis-manis? Kapan lagi nih makan makanan manis tapi tetap sehat? Yuk, bergabung dengan
            Nouggy sekarang juga!
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
            })}
          >
            Informasi lebih lanjut
          </Link>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center lg:order-1">
        <Image src={"/img/hero.png"} alt={'test'} width={512} height={512} className={'max-w-full h-auto'} />
      </div>
    </section>
  );
}

