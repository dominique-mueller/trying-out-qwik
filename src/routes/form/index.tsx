import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h2>Form</h2>

      <form
        preventdefault:submit
        onSubmit$={(_event, element) => {
          const formValue = Object.fromEntries(new FormData(element as HTMLFormElement));
          console.log(formValue);
        }}
      >
        <div>
          <label for="firstName">First name</label>
          <input id="firstName" name="firstName" required />
        </div>

        <div>
          <label for="lastName">Last name</label>
          <input id="lastName" name="lastName" required />
        </div>

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Form',
};
