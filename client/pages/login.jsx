import { Fragment,useState } from 'react'
import axios from 'axios'
import GFooter from '../components/gate_footer'; 

const Login = () => {
	const [fld1, setFld1] = useState('')
	const [pwd, setPwd] = useState('')
	
	const handleSubmit = e => {
		e.preventDefault();
		// console.log(unme, eml, pwd);	
		axios.post('http://localhost:8000/api/signup', {
			unme,
			eml,
			pwd
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
	}
	
	return (
		<>
			<div>
				<div className="wtHdr" style={{color: '#fff'}}>
					<h2>It's not a safespace it's a kodospace</h2>
					<h6>The social network of the kodoverse now in beta</h6>
				</div>
				<div className="wtWpr">
					<form className="wtMem" onSubmit={handleSubmit}>
						<div>
							<input value={fld1} onChange={(e) => seFld1(e.target.value)} name="wl_1" type="text" placeholder="username, email, phone #" />					
						</div>
						<div>
							<input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="password" />					
						</div>
						<button className="btn1 w100 pad10" style={{padding: '10px'}}>Login</button>
					</form>
					<GFooter/>
				</div>
			</div>
		</>
	)
}

export default Login;