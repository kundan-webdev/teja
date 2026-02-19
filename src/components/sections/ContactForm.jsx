export default function ContactForm() {
  return (
    <form className="max-w-xl mx-auto space-y-4">
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Email" />
      <textarea className="textarea" placeholder="Message" />
      <button className="btn btn-primary">Send</button>
    </form>
  );
}
