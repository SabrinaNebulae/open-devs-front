import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-theme-light/50">
      <div className="container">
        <div className="row gx-5 pb-10 pt-[52px]">
          {/* Col 1 */}
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <Link to="/">
              <img src="images/logo.svg" alt="logo" />
            </Link>
            <p className="mt-6">
              Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo
              tellus, sed condimentum volutpat.
            </p>
          </div>

          {/* Col 2 */}
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Socials</h6>
            <p>test@test.com</p>
            <ul className="social-icons mt-4 lg:mt-6 flex gap-3">
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  {/* Facebook Icon */}
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"
                      fill="#222222"
                    />
                  </svg>
                </a>
              </li>
              {/* Tu peux ajouter d'autres icônes ici */}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Category</Link>
              </li>
              <li>
                <Link to="#">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6>Location & Contact</h6>
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p>(704) 555-0127</p>
          </div>
        </div>
      </div>

      <div className="container max-w-[1440px]">
        <div className="footer-copyright mx-auto border-t border-border pb-10 pt-7 text-center">
          <p>
            Designed And Developed by{" "}
            <a href="#" target="_blank" rel="noreferrer">
              Themefisher
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
