import Icon from '../ui/Icon.jsx';

const items = [
  { icon: 'leaf', title: '100% Pure Produce', text: 'No additives, no bleach, no preservatives' },
  { icon: 'shield', title: 'GHP Hygiene', text: 'Clean handling from farm to packaging' },
  { icon: 'search', title: 'Quality Graded', text: 'Sorted and inspected at every stage' },
  { icon: 'truck', title: 'Nationwide Delivery', text: 'Saki · Ibadan · Lagos · Abuja & beyond' },
];

/** Trust strip directly under the hero. */
export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-strip__grid">
        {items.map((item) => (
          <div className="trust-item" key={item.title}>
            <span className="trust-item__icon">
              <Icon name={item.icon} size={22} />
            </span>
            <span>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
