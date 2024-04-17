import Link from 'next/link';

const currentYear = new Date().getFullYear();
 
const MFooter = () => {
 	return (
 		<div className="footer">
			<div>©{currentYear}</div>
			<div>Aviyon</div>
            <div>kodoverse&nbsp;</div>
 			<Link href="/about" style={{ color: '#ffffff7d' }}>about</Link>
 			<Link href="/terms" style={{ color: '#ffffff7d' }}>terms</Link>
            <Link href="/help" style={{ color: '#ffffff7d' }}>help</Link>
            <Link href="/contact" style={{ color: '#ffffff7d' }}>contact</Link>
 		</div>
 	);
 }
 
 export default MFooter;