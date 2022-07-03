import Link from "next/link";
import Navbar from "../component/navbar";
import Head from "next/head";
import Footer from '../component/footer';

function Tentang(props) {
    return (
    <>
    <Head>
      <title>Tentang</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

        <section className="hero">
            <div className="container">
                <div className="text-wrapper profile">
                    <h1 className="title">Tentangku</h1>
                    <p className="description">
                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form.
                    </p>
            <img src="/assets/image/profile.svg" className="profile-image" />
                </div>
            </div>
        </section>
        <Footer datafoot={props.data.data[0].footer}/>
    </>
    );
}

export default Tentang;
export async function getServerSideProps() {
    const response = await  fetch('https://perbackend.herokuapp.com/')
    const data = await response.json()
  
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }