import urlJoin from 'url-join';

export const runtime = 'edge';

export const POST = async (req: Request) => {
  const baseUrl = process.env.MIDJOURNEY_PROXY_URL ?? 'https://apikey.fastgpt.chat';

  const path = new URL(req.url).searchParams.get('path')!;

  // const raw = JSON.stringify({
  //   "prompt": req.text() + " --v 6.0",
  //   "state": "",
  //   "notifyHook": "",
  //   "botType": "MID_JOURNEY",
  //   "base64Array": []
  // });

  const aipKey = req.headers.get('mj-api-secret') ?? req.headers.get('Mj-Api-Secret');
  const body = await req.text();

  console.log(urlJoin(baseUrl, path), body, aipKey);

  return fetch(urlJoin(baseUrl, path), {
    body,
    headers: {
      'Content-Type': 'application/json',
      'Mj-Api-Secret': aipKey ?? '',
    },
    method: 'POST',
  });
};

export const GET = async (req: Request) => {
  const baseUrl = process.env.MIDJOURNEY_PROXY_URL ?? 'https://apikey.fastgpt.chat';

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;
  const aipKey = req.headers.get('mj-api-secret') ?? req.headers.get('Mj-Api-Secret');

  console.log(urlJoin(baseUrl, path), aipKey);

  return fetch(urlJoin(baseUrl, path), {
    headers: {
      'Content-Type': 'application/json',
      'Mj-Api-Secret': aipKey ?? '',
    },
  });
};
