import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const reposResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch('https://api.github.com/users/dominique-mueller/repos', {
      signal: abortController.signal,
    });
    return res.json();
  });

  return (
    <div>
      <h2>Data</h2>

      <Resource
        value={reposResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(repos) => (
          <ul>
            {repos.map((repo: any) => (
              <li>{repo.name}</li>
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
