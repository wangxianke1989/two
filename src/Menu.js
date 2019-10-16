import React,{Component} from 'react'
import './Menu.css'

class Menu extends Component{
	render(){
		return(
			<div className='menu'>
				<div className='menu-container'>
					<div class="firstPage"><p>首页</p></div>
					<div class="hotSale"><p>畅销</p></div>
					<div class="star"><p>摘星</p></div>
					<div class="discount"><p>优惠</p></div>
					<div class="littleProgress"><p>小程序</p></div>
				</div>
			</div>

			)
	}
}

export default Menu;