import React from 'react'

export default function Quote() {
  return (
    <div className="section minimal-quotes section site-inner">
  <div className="wrap">
    <div className="content-sidebar-wrap">
      <main className="content" role="main" itemProp="mainContentOfPage">
        <article className="entry">
          <div className="entry-content" itemProp="text">
            <div className="title-head">
              <h4 className="title">What customers say about AdEspresso</h4>
            </div>
            <div className="quotes-container">
              {" "}
              <div className="block ">
                <div className="text">
                  We would definitely recommend Adespresso as an extremely easy
                  to use platform but to get full value from the company it is
                  important that you invest in the personal consultations with
                  the experts who can add real value.{" "}
                </div>
                {/*/.text*/}
                <div className="author">
                  <div className="profile">
                    <img
                      src="/quote-sugar-crumbs.jpg"
                      alt="John McFarland"
                      className="lazyloaded"
                      data-ll-status="loaded"
                    />
                    <noscript>
                      &lt;img
                      src="/quote-sugar-crumbs.jpg"
                      alt="John McFarland" /&gt;
                    </noscript>
                  </div>
                  {/*/.profile*/}
                  <div className="info">
                    <div className="name">John McFarland</div>
                    <div className="job">Sugar and Crumbs</div>
                  </div>
                  {/*/.info*/}
                </div>
                {/*/.author*/}
              </div>
              {/*/.block*/}
            </div>
          </div>{" "}
          {/*/.entry-content*/}
        </article>{" "}
        {/*/.entry*/}
      </main>{" "}
      {/*/.content*/}
    </div>{" "}
    {/*/.content-sidebar-wrap*/}
  </div>{" "}
  {/* /.wrap */}
</div>

  )
}
