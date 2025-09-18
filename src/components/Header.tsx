import headerStyles from "./styles/header.module.css";
import imgLogo from "../img/logo.png";

const Header = () => {
  return (
    <div className={headerStyles.headerContainer}>
      <img src={imgLogo} alt="Thoughts logo" id={headerStyles.imgLogo} />
      <ul className={headerStyles.headerList}>
        <li>Home</li>
        <li>Meus Pensamentos</li>
        <li>Perfil</li>
        <li>Sair</li>
      </ul>
    </div>
  );
};

export default Header;
