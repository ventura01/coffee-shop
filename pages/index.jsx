import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { MdShoppingCart } from "react-icons/md";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        
        Hello World!
        <MdShoppingCart />
      </div>
    </Layout>
  );
}
