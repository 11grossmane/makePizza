import { Tedis } from "redis-typescript";

const client = new Tedis();

async function test() {
  await client.set("hi", "there");
  const val = await client.get("hi");

  console.log(val);
}

test();
