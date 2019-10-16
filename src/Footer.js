import React,{Component} from 'react'
import './Footer.css'

class Footer extends Component{
	render(){
		return(
			<div>
				<hr/>
				<div className='footer'>
					<p>关于我们</p>
					<p>联系我们</p>
					<p>商务合作</p>
					<p>意见反馈</p>
				</div>
			</div>
			)
	}
}
export default Footer