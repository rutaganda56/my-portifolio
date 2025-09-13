import Image from "next/image";
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-max">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-l font-bold">
                © 2025 | Rutaganda Jean Valentin
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Image
                src={"/qlementine-icons--location-16.svg"}
                alt={"location"}
                width={24}
                height={24}
              ></Image>
              <span> Kigali, Rwanda</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/ntore__r/"
                className="rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Image
                  src={"/skill-icons--instagram.svg"}
                  alt={"instagram"}
                  width={24}
                  height={24}
                ></Image>
              </a>
              <a
                href="https://www.linkedin.com/in/rutaganda-valentin-587682264/"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Image
                  src={"/devicon--linkedin.svg"}
                  alt={"linkedin"}
                  width={24}
                  height={24}
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
