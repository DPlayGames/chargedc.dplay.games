ChargeDC.MAIN = METHOD({

	run : () => {
		
		MSG.loadCSV('/ChargeDC/R/text.csv', () => {
			
			ChargeDC.MATCH_VIEW({
				uri : '',
				target : ChargeDC.Home
			});
		});
	}
});
