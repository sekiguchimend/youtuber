import { createClient } from "microcms-js-sdk";

export const client=createClient({
serviceDomain: "blog-next-myapp",
apiKey: process.env.API_KEY,
});