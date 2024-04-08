import Link from 'next/link';
 
const GFooter = () => {
 	return (
 		<nav className="GFooter">
 			<Link href="/login">login</Link>
 			<Link href="/signup">signup</Link>
            <Link href="/forgot">forgot</Link>
 		</nav>
 	);
 }
 
 export default GFooter;