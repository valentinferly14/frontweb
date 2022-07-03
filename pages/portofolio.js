import Link from "next/link";
import Navbar from "../component/navbar";
import Head from "next/head";
import Footer from '../component/footer';
function Portofolio(props) {
    return (
    <>
    <Head>
      <title>Portofolio</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

        <section className="hero">
            <div className="container">
                <div className="text-wrapper w-full">
                    <h1 className="title">Portofolio</h1>
                    <p className="description">
                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                    </p>

                <div className="portfolio-wrapper">
                    <div className="portfolio-item">
                        <img src="/assets/image/genshin1.jpg" className="portfolio-image" />

                        <h4 className="portfolio-name">Genshin Hero</h4>
                        <div className="portfolio-category">Genshin Art</div>
                    </div>

                    <div className="portfolio-item">
                        <img src="/assets/image/genshin2.jpg" className="portfolio-image" />

                        <h4 className="portfolio-name">Genshin Impact Info</h4>
                        <div className="portfolio-category">Mihoyo</div>
                    </div>
                </div>
             </div>
            </div>
        </section>
        <Footer />
    </>
    );
}

export default Portofolio;
export async function getServerSideProps() {
    const response = await  fetch('https://perbackend.herokuapp.com/')
    const data = await response.json()
  
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }