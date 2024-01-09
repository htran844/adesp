import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Header() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [overState, setOverState] = useState("hidden");

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowDimensions.width < 480) {
      setHeight(360);
    } else if (windowDimensions.width < 657){
      setHeight(120);
    } else{
      setHeight(60);
    }
    if (windowDimensions.width >= 768) {
      setMenuOpen(true);
      setOverState("visible")
    }
    if (windowDimensions.width < 768) {
      setMenuOpen(false);
      if (!menuOpen) {
        setOverState("hidden")
      }
    }
  }, [windowDimensions]);
  
  return (
    <div>
      <header
        className="site-header"
        itemScope=""
        itemType="http://schema.org/WPHeader"
      >
        <div className="wrap">
          <div className="title-area">
            <p className="site-title" itemProp="headline">
              <a className="logo" href="/">
                AdEspresso
              </a>
            </p>
            <p className="site-description" itemProp="description">
              Facebook Advertising Optimization Tool
            </p>
          </div>
          <div className="widget-area header-widget-area">
            <section
              id="nav_menu-2"
              className="widget-odd widget-last widget-first widget-1 widget widget_nav_menu"
            >
              <div className="widget-wrap">
                <nav
                  className="nav-header"
                  itemScope=""
                  itemType="http://schema.org/SiteNavigationElement"
                >
                  <div
                    id="responsive-menu-icon"
                    onClick={() => {
                      setMenuOpen((pre) => {
                        if (!pre && windowDimensions.width < 768) {
                          setOverState("visible")
                        } 
                        if (pre && windowDimensions.width < 768) {
                          setOverState("hidden")
                        }
                        return !pre
                      });
                    }}
                  >
                    <GiHamburgerMenu fontSize={24} />
                  </div>
                  <ul
                    id="menu-main"
                    className={`menu genesis-nav-menu responsive-menu menu-animation`}
                    style={{ maxHeight: menuOpen ? height : 0, overflow: overState}}
                  >
                    <li
                      id="menu-item-58290"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-58290"
                    >
                      <a href="#_" itemProp="url">
                        <span itemProp="name">How it works</span>
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-58291"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58291"
                        >
                          <a
                            href="/agency/"
                            itemProp="url"
                          >
                            <span itemProp="name">For Agencies</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58293"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58293"
                        >
                          <a
                            href="/e-commerce/"
                            itemProp="url"
                          >
                            <span itemProp="name">For e-Commerce</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58292"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58292"
                        >
                          <a
                            href="/small-medium-business/"
                            itemProp="url"
                          >
                            <span itemProp="name">
                              For Small Medium Businesses
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-19"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
                        >
                          <a href="/tour/" itemProp="url">
                            <span itemProp="name">For Every Advertiser</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-58294"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-58294"
                    >
                      <a href="#_" itemProp="url">
                        <span itemProp="name">Features</span>
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-58298"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58298"
                        >
                          <a
                            href="/tour/create/"
                            itemProp="url"
                          >
                            <span itemProp="name">Create</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58295"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58295"
                        >
                          <a
                            href="/tour/manage/"
                            itemProp="url"
                          >
                            <span itemProp="name">Manage</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58299"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58299"
                        >
                          <a
                            href="/tour/analyze/"
                            itemProp="url"
                          >
                            <span itemProp="name">Analyze</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58297"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58297"
                        >
                          <a
                            href="/tour/collaborate/"
                            itemProp="url"
                          >
                            <span itemProp="name">Collaborate</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58296"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58296"
                        >
                          <a
                            href="/tour/learn/"
                            itemProp="url"
                          >
                            <span itemProp="name">Learn</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-58300"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58300"
                        >
                          <a href="/tour/" itemProp="url">
                            <span itemProp="name">All Features</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-58301"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-58301"
                    >
                      <a href="#_" itemProp="url">
                        <span itemProp="name">Academy</span>
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"
                        >
                          <a href="/blog/" itemProp="url">
                            <span itemProp="name">Blog</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-154"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-154"
                        >
                          <a
                            href="/guides/"
                            itemProp="url"
                          >
                            <span itemProp="name">Guides</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-155"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"
                        >
                          <a
                            href="/webinars/"
                            itemProp="url"
                          >
                            <span itemProp="name">Webinars</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-153"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"
                        >
                          <a
                            href="/ebooks/"
                            itemProp="url"
                          >
                            <span itemProp="name">eBooks</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-60924"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60924"
                        >
                          <a
                            href="/ads-examples/"
                            itemProp="url"
                          >
                            <span itemProp="name">Facebook Ad Examples</span>
                          </a>
                        </li>
                        <li
                          id="menu-item-70107"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70107"
                        >
                          <a
                            href="/case-studies/"
                            itemProp="url"
                          >
                            <span itemProp="name">Case Studies</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-69394"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69394"
                    >
                      <a
                        href="/tour/marketing-services/"
                        itemProp="url"
                      >
                        <span itemProp="name">Services</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-129"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-129"
                    >
                      <a href="/pricing/" itemProp="url">
                        <span itemProp="name">Pricing</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-128"
                      className="menu-signup-button menu-item menu-item-type-post_type menu-item-object-page menu-item-128"
                    >
                      <a href="/join/" itemProp="url">
                        <span itemProp="name">Signup</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-291"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-291"
                    >
                      <a href="#" itemProp="url">
                        <span itemProp="name">Login</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </header>
      <div className="bumper" />
      <div className="site-inner" style={{ display: "none" }}>
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article
                className="post-59989 page type-page status-publish entry"
                itemScope=""
                itemType="http://schema.org/CreativeWork"
              >
                <header className="entry-header" />
                <div className="entry-content" itemProp="text"></div>{" "}
                {/*/.entry-content */}
              </article>{" "}
              {/*/.entry*/}
            </main>{" "}
            {/*/.content*/}
          </div>{" "}
          {/*/.content-sidebar-wrap*/}
        </div>{" "}
        {/* /.wrap */}
      </div>
    </div>
  );
}

export default Header;
