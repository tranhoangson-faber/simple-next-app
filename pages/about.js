// pages/about.js
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
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

            {/* About Header */}
            <section className={styles.aboutHeader}>
                <h1>About Our IT Services</h1>
                <p>
                    We are a dedicated team of IT professionals, committed to providing innovative technology solutions
                    to help businesses thrive.
                </p>
            </section>

            {/* Mission */}
            <section className={styles.mission}>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower businesses through technology, enabling them to reach their full
                    potential.
                </p>
            </section>

            {/* Team */}
            <section className={styles.team}>
                <h2>Meet Our Team</h2>
                <div className={styles.teamCard}>
                    <h3>John Doe - CEO</h3>
                    <p>John is a visionary leader with over 15 years in the IT industry.</p>
                </div>
                <div className={styles.teamCard}>
                    <h3>Jane Smith - Lead Developer</h3>
                    <p>Jane specializes in software development, with a passion for building scalable applications.</p>
                </div>
                <div className={styles.teamCard}>
                    <h3>Alex Johnson - Cybersecurity Expert</h3>
                    <p>Alex ensures our clients data remains safe and secure.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Simple IT Services. All rights reserved.</p>
            </footer>
        </div>
    );
}
