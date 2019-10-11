ChargeDC.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE(MSG('TITLE'));
		
		let wrapper = UUI.PANEL({
			
			style : {
				position : 'absolute',
				left : 0,
				top : 0,
				width : '100%',
				minHeight : '100%',
				backgroundImage : '/ChargeDC/R/background.jpg'
			},
			
			contentStyle : {
				padding : 20,
				fontSize : 16,
				color : '#979b9b'
			},
			
			c : [
			H1({
				style : {
					fontSize : 35,
					marginBottom : 5,
					color : '#fff'
				},
				c : MSG('TITLE')
			}),
			
			P({
				c : MSG('EXCHANGE_MESSAGE')
			}),
			
			P({
				style : {
					fontStyle : 'italic',
					padding : 10
				},
				c : MSG('NOT_EXISTS_EXCHANGE_MESSAGE')
			}),
			
			P({
				style : {
					marginTop : 20
				},
				c : MSG('DC_VENDING_MACHINE_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeDC/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : MSG('DC_VENDING_MACHINE_BUTTON'),
				on : {
					tap : () => {
						open('http://vendingmachine.dplay.company');
					}
				}
			}),
			
			P({
				style : {
					marginTop : 30
				},
				c : MSG('TESTNET_FAUCET_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeDC/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : MSG('DC_FAUCET_BUTTON'),
				on : {
					tap : () => {
						open('http://faucet.dplay.games');
					}
				}
			}),
			
			P({
				style : {
					marginTop : 30
				},
				c : MSG('UNISWAP_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeDC/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : MSG('UNISWAP_BUTTON'),
				on : {
					tap : () => {
						open('https://uniswap.exchange/swap/0x92c5387aCE61F5c505BF2c2D4c84120F0A813d4B');
					}
				}
			})]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});