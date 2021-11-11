import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="contact-links">
        <li className="link">
          <a
            href="https://www.linkedin.com/in/micheal-limones"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://github.com/ZestyLimones"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://www.facebook.com/profile.php?id=1522278848"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
