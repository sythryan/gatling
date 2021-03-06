var stats = {
	type: "GROUP",
contents: {
		
				"request-1-46da482b5ba7614b7124accf72d8b1ce": {
		type: "REQUEST",
		name: "request_1",
path: "request_1",
pathFormatted: "request-1-46da482b5ba7614b7124accf72d8b1ce",
stats: {
	numberOfRequests : {
		total: "675",
		ok: "675",
		ko: "0"
	},
	minResponseTime : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	maxResponseTime : {
		total: "1310",
		ok: "1310",
		ko: "-"
	},
	meanResponseTime : {
		total: "411",
		ok: "411",
		ko: "-"
	},
	standardDeviation : {
		total: "328",
		ok: "328",
		ko: "-"
	},
	percentiles1 : {
		total: "1210",
		ok: "1210",
		ko: "-"
	},
	percentiles2 : {
		total: "1290",
		ok: "1290",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 573,
		percentage: 84
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 66,
		percentage: 9
	},
	group3 : {
		name: "t > 1200 ms",
		count: 36,
		percentage: 5
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "339",
		ok: "339",
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
		total: "675",
		ok: "675",
		ko: "0"
	},
	minResponseTime : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	maxResponseTime : {
		total: "1310",
		ok: "1310",
		ko: "-"
	},
	meanResponseTime : {
		total: "411",
		ok: "411",
		ko: "-"
	},
	standardDeviation : {
		total: "328",
		ok: "328",
		ko: "-"
	},
	percentiles1 : {
		total: "1210",
		ok: "1210",
		ko: "-"
	},
	percentiles2 : {
		total: "1290",
		ok: "1290",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 573,
		percentage: 84
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 66,
		percentage: 9
	},
	group3 : {
		name: "t > 1200 ms",
		count: 36,
		percentage: 5
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "339",
		ok: "339",
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
