export default function ContactInfo() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-neutral-800">Informació de contacte</h2>
      <p className="mb-2 text-neutral-600">Pots contactar-nos a través de:</p>
      <a href="mailto:info@mica.eco" className="text-primary transition-colors hover:text-primary-700">
        info@mica.eco
      </a>
    </div>
  )
}