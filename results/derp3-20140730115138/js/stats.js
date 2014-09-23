var stats = {
	type: "GROUP",
contents: {
		
				"request-11-f11e8d55a16ce73fd22512921519d65e": {
		type: "REQUEST",
		name: "request_11",
path: "request_11",
pathFormatted: "request-11-f11e8d55a16ce73fd22512921519d65e",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "50",
		ok: "50",
		ko: "-"
	},
	meanResponseTime : {
		total: "24",
		ok: "24",
		ko: "-"
	},
	standardDeviation : {
		total: "12",
		ok: "12",
		ko: "-"
	},
	percentiles1 : {
		total: "50",
		ok: "50",
		ko: "-"
	},
	percentiles2 : {
		total: "50",
		ok: "50",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "12",
		ok: "12",
		ko: "-"
	}
}


	}
		,		
				"request-12-61da2ef9faf1fd1ec13c527163d20ee8": {
		type: "REQUEST",
		name: "request_12",
path: "request_12",
pathFormatted: "request-12-61da2ef9faf1fd1ec13c527163d20ee8",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "330",
		ok: "330",
		ko: "-"
	},
	maxResponseTime : {
		total: "460",
		ok: "460",
		ko: "-"
	},
	meanResponseTime : {
		total: "401",
		ok: "401",
		ko: "-"
	},
	standardDeviation : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	percentiles1 : {
		total: "460",
		ok: "460",
		ko: "-"
	},
	percentiles2 : {
		total: "460",
		ok: "460",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "12",
		ok: "12",
		ko: "-"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "20",
		ok: "20",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "460",
		ok: "460",
		ko: "-"
	},
	meanResponseTime : {
		total: "213",
		ok: "213",
		ko: "-"
	},
	standardDeviation : {
		total: "190",
		ok: "190",
		ko: "-"
	},
	percentiles1 : {
		total: "450",
		ok: "450",
		ko: "-"
	},
	percentiles2 : {
		total: "460",
		ok: "460",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 20,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "24",
		ok: "24",
		ko: "-"
	}
}



}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
