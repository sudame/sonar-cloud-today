import { exec as _exec } from "child_process";
import { cp, rm, mkdir } from "fs/promises";
import { promisify } from "util";

const PUBLIC = "public";

const exec = promisify(_exec);

async function build(): Promise<void> {
  await rm(PUBLIC, { recursive: true, force: true });
  await mkdir(PUBLIC);

  const promises = [
    exec("tsc"), //
    cp("src/index.html", `${PUBLIC}/index.html`),
  ];
  await Promise.all(promises);
}

void build();
