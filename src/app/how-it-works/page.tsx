export default function HowItWorksPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold py-4">How it works?</h2>
      <h3 className="text-xl py-2 border-b-2 border-primary-color">Users should be able to</h3>
      <ul className="pl-6 py-2 list-disc">
        <li>Limiting the length of the text entered to the limits of popular social media</li>
        <li>Setting a custom character limit for typed text</li>
        <li>Ability to allow character limits to be exceeded</li>
        <li>Ability to check in the editor based on the background what fragment of text exceeds the character limit</li>
        <li>Counter of characters, words, unique words and paragraphs in the text</li>
      </ul>
      <h3 className="text-xl py-2 border-b-2 border-primary-color">Build process</h3>
      <ul className="pl-6 py-2 list-disc">
        <li>Semantic HTML5 markup</li>
        <li>Mobile-first workflow</li>
        <li>Next.js 14</li>
        <li>React Icons</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
