var Events = {
	UpdateEvents:function(startMonth,startYear,endMonth,endYear,getAllEvents,pageCode,allEventPageId,instanceId) {
		var url = "index.cfm?action=GDEvents.gdevents.ActGetMonthsData&page=get_months_data" + "&startMonth=" + escape( startMonth )+ "&startYear=" + escape( startYear )+ "&endMonth=" + escape( endMonth )+ "&endYear=" + escape( endYear )+ "&getAllEvents=" + escape( getAllEvents )+ "&pageCode=" + escape( pageCode )+ "&allEventPageId=" + escape( allEventPageId )+ "&instanceId=" + escape( instanceId );
		new Ajax.Request( url, {asynchronous:true, evalScripts:false, onSuccess:Events.UpdateEvents_onSuccess, onFailure:errFunc});
	},
	UpdateEvents_onSuccess:function(t) {
		z = parseJSON( t.responseText );
		$("eventMonthsId").update( z );
	}
}