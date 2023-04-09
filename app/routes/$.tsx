import { LoaderArgs, json } from "@remix-run/cloudflare";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";

export const loader = ({ request }: LoaderArgs) => {
  const orignalUrl = request.headers.get("x-original-url");

  const headers = Array.from(request.headers.keys());
  return json({ requestUrl: request.url, orignalUrl, headers });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const { requestUrl, orignalUrl } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Remix Website: 2</h1>
      <p>Request URL: {requestUrl}</p>
      <p>Orignal URL: {orignalUrl}</p>
    </div>
  );
}
