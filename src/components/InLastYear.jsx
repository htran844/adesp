import React from 'react'

export default function InLastYear() {
  return (
    <section className="full-width-content stripe-stats stripe-grid ae-big-numbers">
  <div className="big-numbers-container">
    <div className="title-head">
      <h4 className="title">In the last year</h4>
    </div>
    <div className="stripe-grid-container">
      <ul className="stats-list">
        <li className="stat-item">
          <strong className="stat-value">111,503</strong>
          <span className="stat-name">Accounts created</span>
        </li>
        <li className="stat-item">
          <strong className="stat-value">519,130</strong>
          <span className="stat-name">Post promoted automatically</span>
        </li>
        <li className="stat-item">
          <strong className="stat-value">10,666,022</strong>
          <span className="stat-name">Ads created</span>
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}
