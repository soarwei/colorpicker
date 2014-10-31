/** 
 * 获取今天、昨天、前天、本周、本季度、本月、上月的开始日期、结束日期 
 *
 */
Datetime = function(){
	this.init.apply(this, arguments);
}
Datetime.prototype = {

	//初始化
	init : function(options) {
		this.options = options || {};
        this.format = this.options.format || 'Y-m-d'; //Y-m-d
	}, 
	
	//格式化时间
	formatDate : function(date) {
		var myyear = date.getFullYear();     
		var mymonth = date.getMonth()+1;     
		var myweekday = date.getDate();      
			 
		if (mymonth < 10){     
			mymonth = "0" + mymonth;     
		}      
		if (myweekday < 10){     
			myweekday = "0" + myweekday;     
		} 
        return this.format.replace('Y', myyear)
                   .replace('m', mymonth)
                   .replace('d', myweekday)
        ;
	},
	
	//今天的日期
	getTodayDate : function() {
		var theDate = new Date();
		return this.formatDate(theDate);  
	}, 
	
	//昨天的日期
	getYesterdayDate : function() {
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 1);
		return this.formatDate(theDate);   
	}, 
	
	//前天的日期
	getBeforeYesterdayDate : function() {
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 2);
		return this.formatDate(theDate);   
	}, 
	
	//获得本周的开始日期     
	getWeekStartDate : function() {      
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - theDate.getDay() + 1);
		return this.formatDate(theDate);   
	},      
		
	//获得本周的结束日期     
	getWeekEndDate : function() {      
		return this.getTodayDate();
	},      
		
	//获得上周的开始日期     
	getLastWeekStartDate : function() {      
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - theDate.getDay() - 6);
		return this.formatDate(theDate);      
	},      
		
	//获得上周的结束日期     
	getLastWeekEndDate : function() {      
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - theDate.getDay());
		return this.formatDate(theDate);       
	},      
		
	//获得本月的开始日期     
	getMonthStartDate : function(){     
		var theDate = new Date();
		theDate.setDate(1);
		return this.formatDate(theDate);     
	},     
		
	//获得本月的结束日期     
	getMonthEndDate : function(){ 
		return this.getTodayDate();   
	},     
	  
	//获得上月开始时间  
	getLastMonthStartDate : function(){  
		var theDate = new Date();
		theDate.setDate(1);
		theDate.setMonth(theDate.getMonth() - 1);
		return this.formatDate(theDate);  
	},  
	  
	//获得上月结束时间  
	getLastMonthEndDate : function(){  
		var theDate = new Date();
		theDate.setDate(0);
		return this.formatDate(theDate);    
	},  
	
	//最近3天开始时间
	getLastThreeDaysStartDate: function(){
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 2);
		return this.formatDate(theDate);    
	},
		
	//最近3天结束时间
	getLastThreeDaysEndDate: function(){
		return this.getTodayDate();
	},
	
	//最近7天开始时间
	getLastSevenDaysStartDate: function(){
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 6);
		return this.formatDate(theDate);     
	},
		
	//最近7天结束时间
	getLastSevenDaysEndDate: function(){
		return this.getTodayDate();
	},
		
	//最近15天开始时间
	getLastFifteenDaysStartDate: function(){
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 14);
		return this.formatDate(theDate);     
	},
		
	//最近15天结束时间
	getLastFifteenDaysEndDate: function(){
		return this.getTodayDate();
	},
	
	//最近30天开始时间
	getLastThirtyDaysStartDate: function(){
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 29);
		return this.formatDate(theDate);   
	},
		
	//最近30天结束时间
	getLastThirtyDaysEndDate: function(){
		return this.getTodayDate();
	},
	
	//上周的第几天
	getDayOfLastWeekDate : function(){
		var theDate = new Date();
		theDate.setDate(theDate.getDate() - 7);
		return this.formatDate(theDate);
	},	
		
	//上月几号
	getDayOfLastMonthDate : function(){
		var theDate = new Date();
		theDate.setMonth(theDate.getMonth() - 1);
		return this.formatDate(theDate);
	},		
}



//使用示例
var options = {
    format: 'Y-m-d'
};

var datetime = new Datetime(options);
alert(datetime.getTodayDate());