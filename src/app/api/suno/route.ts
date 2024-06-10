import urlJoin from 'url-join';

export const runtime = 'edge';

export const POST = async (req: Request) => {
  const baseUrl = process.env.SUNO_PROXY_URL ?? 'https://apikey.fastgpt.chat';

  const path = new URL(req.url).searchParams.get('path')!;

  const aipKey = req.headers.get('Authorization') ?? req.headers.get('authorization');
  const body = await req.text();

  console.log(urlJoin(baseUrl, path), body, aipKey);

  return fetch(urlJoin(baseUrl, path), {
    body,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': aipKey ?? '',
    },
    method: 'POST',
  });
};

export const GET = async (req: Request) => {
  const baseUrl = process.env.SUNO_PROXY_URL ?? 'https://apikey.fastgpt.chat';

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;
  const aipKey = req.headers.get('Authorization') ?? req.headers.get('authorization');

  console.log(urlJoin(baseUrl, path), aipKey);

  return fetch(urlJoin(baseUrl, path), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': aipKey ?? '',
    },
  });
};
