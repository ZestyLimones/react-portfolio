import './Footer.css';

export default function Footer() {
  return (
    <ul className="contact-links">
      <li>
        <a
          href="https://www.linkedin.com/in/micheal-limones"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin-square"></i>LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ZestyLimones"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=1522278848"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-facebook"></i>Facebook
        </a>
      </li>
    </ul>
  );
}
