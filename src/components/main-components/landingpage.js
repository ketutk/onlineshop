import logo from "../../image/logo.png";
import main from "../../image/main.jpg";
import "../../css/landingpage.css";
import TypeIt from "typeit-react";
// import "../../css/main-img.css";
const LandingPage = () => {
  return (
    <div>
      <div id="main">
        <div id="bg-image" className="text-center" style={{ height: "100vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(${main})`, backgroundPosition: "center" }}></div>
        <nav className="navbar navbar-dark navbar-expand-md border-bottom border-bottom-dark fixed-top bg-black " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="# ">
              <img src={logo} alt="logo" style={{ maxWidth: "200px" }} />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse show" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <a className="nav-link" aria-current="page" href="# ">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2 dropdown">
                  <a className="nav-link dropdown-toggle" href="# " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </a>
                  <ul className="dropdown-menu text-center">
                    <li>
                      <a className="dropdown-item" href="# ">
                        Shirt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="# ">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="# ">
                        Shoes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link" aria-current="page" href="# ">
                    Galerry
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link" aria-current="page" href="# ">
                    About
                  </a>
                </li>
                <li className="nav-item px-1 d-lg-none d-flex justify-content-center pb-3" style={{ width: "100%" }}>
                  <button className="nav-link btn btn-dark px-5 py-1 d-flex" aria-current="page" href="# ">
                    Login / Daftar
                  </button>
                </li>
              </ul>
            </div>
            <div className="d-none d-md-block">
              <div className="d-inline">
                <a className="nav-link text-white d-inline pe-5" aria-current="page" href="test ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </div>
              <a className="nav-link text-white d-inline pe-5" aria-current="page" href="test ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div id="text-main" className="text-center text-white fw-bold fs-3">
          <p>
            I only wear clothes because I can't walk around with nothing on, but they started calling me a{" "}
            <TypeIt
              options={{
                strings: ["Fashionista"],
                speed: 300,
                waitUntilVisible: true,
                loop: true,
                loopDelay: 1000,
              }}
            ></TypeIt>
            .
          </p>
          <br />
          <p>- Kwon Ji Yong</p>
          <br />
          <a id="text-animate" className="btn btn-light outline fw-bold fs-2" href="#vision" style={{ boxShadow: "0 0rem 0.5rem #ffffff" }}>
            Discover My World
          </a>
        </div>
      </div>

      <div className="" id="hot">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit. Eos animi sapiente quasi voluptatem necessitatibus atque eligendi perspiciatis nam laboriosam fuga, adipisci vero enim est inventore ipsum omnis a in
          veritatis provident error magnam ratione facere amet alias! Doloribus, culpa atque reiciendis facilis vel exercitationem voluptate adipisci temporibus ducimus.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
