/** Quality process flowchart: Sourcing → Sorting → Drying → Milling → Packaging. */
const steps = [
  { title: 'Sourcing', text: 'Direct from trusted farms in Saki, Oje Owode & Oke Ogun.' },
  { title: 'Sorting', text: 'Manual inspection, grading and removal of damaged units.' },
  { title: 'Drying', text: 'Raised-tray sun drying to safe, controlled moisture levels.' },
  { title: 'Milling', text: 'Clean milling & double sieving for a smooth, even texture.' },
  { title: 'Packaging', text: 'Sealed, labelled and batch-coded in a hygienic packing area.' },
];

export default function ProcessFlow() {
  return (
    <div className="process-flow" role="list" aria-label="Our quality process">
      {steps.map((step, index) => (
        <div key={step.title} style={{ display: 'contents' }} role="listitem">
          <div className="process-step">
            <span className="process-step__num">{index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
          {index < steps.length - 1 && (
            <span className="process-arrow" aria-hidden="true">
              ➜
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
