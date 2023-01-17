import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';

export const onGet: RequestHandler<any> = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return [
    {
      title: 'First post',
    },
    {
      title: 'Second post',
    },
    {
      title: 'Third post',
    },
  ];
};

export default component$(() => {
  const posts = useEndpoint<Array<{ title: string }>>();

  return (
    <div>
      <h2>Data</h2>

      <Resource
        value={posts}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(posts) => (
          <ul>
            {posts.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Fetching',
};
