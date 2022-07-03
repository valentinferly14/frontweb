
function Footer(props){
    return(
    <>
<footer>
  <div className="footer-content">
    <h3>{props.datafoot.title}</h3>
    <p>{props.datafoot.subtitle}</p>
    <ul className="socials">
      <li><a href="#"><i className="fa fa-facebook" /></a></li>
      <li><a href="#"><i className="fa fa-twitter" /></a></li>
      <li><a href="#"><i className="fa fa-google" /></a></li>
      <li><a href="#"><i className="fa fa-youtube" /></a></li>
      <li><a href="#"><i className="fa fa-linkedin-square" /></a></li>
    </ul>
  </div>
  <div className="footer-bottom">
    <p>copyright © <a href="">ValFehY 2022</a></p>
  </div>
</footer>
    </>

    )
}

export default Footer;