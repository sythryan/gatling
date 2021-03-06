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
		total: "5000",
		ok: "5000",
		ko: "0"
	},
	minResponseTime : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	maxResponseTime : {
		total: "60360",
		ok: "60360",
		ko: "-"
	},
	meanResponseTime : {
		total: "3932",
		ok: "3932",
		ko: "-"
	},
	standardDeviation : {
		total: "2749",
		ok: "2749",
		ko: "-"
	},
	percentiles1 : {
		total: "7700",
		ok: "7700",
		ko: "-"
	},
	percentiles2 : {
		total: "11260",
		ok: "11260",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 882,
		percentage: 17
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 179,
		percentage: 3
	},
	group3 : {
		name: "t > 1200 ms",
		count: 3939,
		percentage: 78
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "78",
		ok: "78",
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
		total: "5000",
		ok: "5000",
		ko: "0"
	},
	minResponseTime : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	maxResponseTime : {
		total: "60360",
		ok: "60360",
		ko: "-"
	},
	meanResponseTime : {
		total: "3932",
		ok: "3932",
		ko: "-"
	},
	standardDeviation : {
		total: "2749",
		ok: "2749",
		ko: "-"
	},
	percentiles1 : {
		total: "7700",
		ok: "7700",
		ko: "-"
	},
	percentiles2 : {
		total: "11260",
		ok: "11260",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 882,
		percentage: 17
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 179,
		percentage: 3
	},
	group3 : {
		name: "t > 1200 ms",
		count: 3939,
		percentage: 78
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "78",
		ok: "78",
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
