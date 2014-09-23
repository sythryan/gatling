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
		total: "1",
		ok: "0",
		ko: "1"
	},
	minResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	maxResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	meanResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	percentiles2 : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
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
		count: 1,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "17",
		ok: "-",
		ko: "17"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "0",
		ko: "1"
	},
	minResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	maxResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	meanResponseTime : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	percentiles2 : {
		total: "20",
		ok: "-",
		ko: "20"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
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
		count: 1,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "17",
		ok: "-",
		ko: "17"
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
