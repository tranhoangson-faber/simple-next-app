// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>

            {/* Banner */}
            <section className={styles.banner}>
                <h1>Welcome to Our Simple IT Website</h1>
                <p>Your one-stop solution for web development services</p>
                <Link href='/about' className={styles.btn}>
                    Learn More
                </Link>
            </section>

            {/* Cards */}
            <section className={styles.cards}>
                <div className={styles.card}>
                    <h3>Our Services</h3>
                    <p>We offer a range of services including web design, development, and SEO optimization.</p>
                </div>
                <div className={styles.card}>
                    <h3>Our Mission</h3>
                    <p>To provide top-quality web solutions that help our clients achieve their business goals.</p>
                </div>
                <div className={styles.card}>
                    <h3>Get in Touch</h3>
                    <p>Contact us today to discuss your next project and see how we can help!</p>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Simple IT Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
