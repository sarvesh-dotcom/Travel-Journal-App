export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <small>© {currentYear} Sarvesh Khanal. All rights reserved.</small>
            </footer>
    )
}