import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-muted">© 2023 Company, Inc</span>
        </div>
        <aside>
          <h2>Social Media</h2>
          <article>
            <a
              href="https://www.youtube.com/channel/UCykx3JiPxklgeJPfu5qgAqw"
              target={'blank'}
            >
              <AiFillYoutube />
            </a>
            <a href="https://www.instagram.com/anilyadav9812/" target={'blank'}>
              <AiFillInstagram />
            </a>
            <a href="https://github.com/geekyanil" target={'blank'}>
              <AiFillGithub />
            </a>
          </article>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
