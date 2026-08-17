export default function Loading() {
  return <section className="route-loader" role="status" aria-live="polite" aria-label="Loading STEM Education India">
    <div className="loader-mark" aria-hidden="true">
      <span className="loader-core">STEM</span>
      <i/><i/><i/>
      <b/><b/><b/>
    </div>
    <div className="loader-copy">
      <p className="eyebrow">Preparing the learning space</p>
      <strong>Curiosity is getting ready.</strong>
      <span>Loading the next page…</span>
    </div>
    <div className="loader-progress" aria-hidden="true"><span/></div>
  </section>;
}
