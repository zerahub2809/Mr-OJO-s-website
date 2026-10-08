import { MONTHS, seasonalRows } from '../../data/seasonal.js';

/**
 * Seasonal availability calendar (PRD §5.B public-facing element).
 * Renders month-by-month availability per product with a legend.
 */
export default function SeasonalCalendar() {
  return (
    <div>
      <div className="calendar-wrap">
        <table className="season-calendar">
          <caption className="visually-hidden">
            Seasonal availability calendar by product and month
          </caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              {MONTHS.map((month) => (
                <th key={month} scope="col">
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seasonalRows.map((row) => (
              <tr key={row.product}>
                <th scope="row" title={row.note}>
                  {row.product}
                </th>
                {row.months.map((level, index) => (
                  <td key={`${row.product}-${MONTHS[index]}`}>
                    <span
                      className={`dot dot--${level}`}
                      title={`${MONTHS[index]}: ${
                        level === 'peak'
                          ? 'Peak quality & supply'
                          : level === 'good'
                            ? 'Steady supply'
                            : 'Limited supply'
                      }`}
                    />
                    <span className="visually-hidden">
                      {level === 'peak'
                        ? 'Peak'
                        : level === 'good'
                          ? 'Steady'
                          : 'Limited'}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="calendar-legend">
        <span>
          <span className="dot dot--peak" /> Peak quality &amp; widest supply
        </span>
        <span>
          <span className="dot dot--good" /> Steady supply
        </span>
        <span>
          <span className="dot dot--off" /> Limited — book ahead
        </span>
      </div>
    </div>
  );
}
