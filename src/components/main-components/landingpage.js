import logo from "../../image/logo.png";
import main from "../../image/main.jpg";
// import "../../css/main-img.css";
const LandingPage = () => {
  return (
    <div>
      <div id="main">
        <div id="bg-image" className="text-center" style={{ height: "100vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(${main})`, backgroundPosition: "center" }}></div>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark border-bottom border-bottom-dark fixed-top bg-black" data-bs-theme="dark">
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
                  <ul className="dropdown-menu">
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
        <div className="text-center text-white fw-bold fs-3" style={{ zIndex: "2", position: "absolute", top: "50%", left: "50%", width: "50%", height: "30%", marginTop: "-15%", marginLeft: "-25%" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus quasi! Facilis iure quas maiores placeat accusantium, velit, consequatur reprehenderit explicabo mollitia ipsa itaque consequuntur rem animi voluptatibus
            modi est.
          </p>
        </div>
      </div>
      <div id="hot">
        <div className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo, sunt cupiditate necessitatibus ab facilis, sit eveniet tenetur alias id sint itaque quos magnam eos delectus deleniti. Ipsum, delectus error?
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
