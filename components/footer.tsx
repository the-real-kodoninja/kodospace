import Link from 'next/link';

const currentYear = new Date().getFullYear();
 
const MFooter = () => {
 	return (
 		<footer>
            <span>©{currentYear} kodoverse&nbsp;</span>
 			<Link href="/about">about</Link>
 			<Link href="/terms">terms</Link>
            <Link href="/help">help</Link>
            <Link href="/contact">contact</Link>
 		</footer>
 	);
 }
 
 export default MFooter;