
import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import com.excilys.ebi.gatling.jdbc.Predef._
import com.excilys.ebi.gatling.http.Headers.Names._
import akka.util.duration._
import bootstrap._
import assertions._

class RecordedSimulation extends Simulation {

	val httpConf = httpConfig
			.baseURL("http://dev.banno.com")
			.acceptHeader("application/json, text/plain, */*")
			.acceptEncodingHeader("gzip, deflate")
			.acceptLanguageHeader("en-US,en;q=0.5")
			.connection("keep-alive")
			.userAgentHeader("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:32.0) Gecko/20100101 Firefox/32.0")


	val headers_1 = Map(
			"Accept" -> """text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"""
	)

	val headers_3 = Map(
			"Accept" -> """text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 17:53:38 GMT""",
			"If-None-Match" -> """"16e401488f0c40d0""""
	)

	val headers_4 = Map(
			"Accept" -> """text/css,*/*;q=0.1""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 17:53:38 GMT""",
			"If-None-Match" -> """"f40ec1488f0c40d0""""
	)

	val headers_5 = Map(
			"Accept" -> """*/*""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 17:53:43 GMT""",
			"If-None-Match" -> """"e95651488f0c5458""""
	)

	val headers_6 = Map(
			"Accept" -> """*/*""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 21:13:36 GMT"""
	)

	val headers_7 = Map(
			"Accept" -> """image/png,image/*;q=0.8,*/*;q=0.5"""
	)

	val headers_8 = Map(
			"X-XSRF-TOKEN" -> """3da6523362d6bd827b1deba9a7b7a18c28b4f687|1f33eb10-4284-11e4-9893-0a0027000001|1414001595457"""
	)

	val headers_10 = Map(
			"Accept" -> """image/png,image/*;q=0.8,*/*;q=0.5""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 17:53:38 GMT""",
			"If-None-Match" -> """"b12401488f0c40d0""""
	)

	val headers_11 = Map(
			"Cache-Control" -> """no-cache""",
			"Content-Type" -> """application/json;charset=utf-8""",
			"Pragma" -> """no-cache""",
			"X-XSRF-TOKEN" -> """3da6523362d6bd827b1deba9a7b7a18c28b4f687|1f33eb10-4284-11e4-9893-0a0027000001|1414001595457"""
	)

	val headers_13 = Map(
			"Accept" -> """text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8""",
			"If-Modified-Since" -> """Fri, 19 Sep 2014 17:53:38 GMT""",
			"If-None-Match" -> """"35ff01488f0c40d0""""
	)

	val headers_16 = Map(
			"Content-Type" -> """application/json;charset=utf-8""",
			"X-XSRF-TOKEN" -> """3da6523362d6bd827b1deba9a7b7a18c28b4f687|1f33eb10-4284-11e4-9893-0a0027000001|1414001595457"""
	)


	val scn = scenario("Scenario Name")
		// .exec(http("request_1")
		// 			.get("/a/sentry/user/institutions")
		// 			.headers(headers_1)
		// 	)
		// .pause(185 milliseconds)
		// .exec(http("request_2")
		// 			.get("/a/sentry/favicon.ico")
		// 			.headers(headers_1)
		// 	)
		// .pause(26 milliseconds)
		// .exec(http("request_3")
		// 			.get("/a/sentry/img/android-touch-icon.png")
		// 			.headers(headers_3)
		// 	)
		// .pause(85 milliseconds)
		// .exec(http("request_4")
		// 			.get("/a/sentry/css/style.css")
		// 			.headers(headers_4)
		// 	)
		// .pause(101 milliseconds)
		// .exec(http("request_5")
		// 			.get("/a/sentry/js/application.min.js")
		// 			.headers(headers_5)
		// 	)
		// .exec(http("request_6")
		// 			.get("http://use.typekit.net/mjf5fvj.js")
		// 			.headers(headers_6)
		// 	)
		// .pause(203 milliseconds)
		// .exec(http("request_7")
		// 			.get("http://p.typekit.net/p.gif")
		// 			.headers(headers_7)
		// 			.queryParam("""f""", """10441.10442.10443.10444.17451.17454""")
		// 			.queryParam("""s""", """1""")
		// 			.queryParam("""ht""", """tk""")
		// 			.queryParam("""a""", """567402""")
		// 			.queryParam("""_""", """1411409595784""")
		// 			.queryParam("""k""", """mjf5fvj""")
		// 			.queryParam("""h""", """dev.banno.com""")
		// 	)
		// .pause(216 milliseconds)
		// .exec(http("request_8")
		// 			.get("/a/sentry/login")
		// 			.headers(headers_8)
		// 			.check(status.is(401))
		// 	)
		// .pause(87 milliseconds)
		// .exec(http("request_9")
		// 			.get("/a/sentry/login")
		// 			.headers(headers_8)
		// 			.check(status.is(401))
		// 	)
		// .pause(21 milliseconds)
		// .exec(http("request_10")
		// 			.get("/a/sentry/img/banno-logo.svg")
		// 			.headers(headers_10)
		// 	)
		.exec(http("request_11")
					.get("/a/sentry/login")
					// .headers(headers_11)
					// 	.fileBody("RecordedSimulation_request_11.txt")
			)
		// .pause(488 milliseconds)
		// .exec(http("request_12")
		// 			.get("/a/sentry/login")
		// 			.headers(headers_8)
		// 	)
		// .pause(289 milliseconds)
		// .exec(http("request_13")
		// 			.get("/a/sentry/fonts/fontawesome-webfont.woff")
		// 			.headers(headers_13)
		// 			.queryParam("""v""", """4.2.0""")
		// 	)
		// .pause(161 milliseconds)
		// .exec(http("request_14")
		// 			.get("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/profile-image")
		// 			.headers(headers_7)
		// 			.check(status.is(500))
		// 	)
		// .pause(32 milliseconds)
		// .exec(http("request_15")
		// 			.get("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/institutions")
		// 			.headers(headers_8)
		// 	)
		// .pause(4)
		// .exec(http("request_16")
		// 			.put("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/selected-institutions")
		// 			.headers(headers_16)
		// 				.fileBody("RecordedSimulation_request_16.txt")
		// 	)
		// .pause(120 milliseconds)
		// .exec(http("request_17")
		// 			.get("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/applications")
		// 			.headers(headers_8)
		// 	)
		// .pause(39 milliseconds)
		// .exec(http("request_18")
		// 			.get("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/profile-image")
		// 			.headers(headers_7)
		// 			.check(status.is(500))
		// 	)
		// .pause(54 milliseconds)
		// .exec(http("request_19")
		// 			.get("/a/sentry/users/ae6b19e8-a54c-1033-85d6-0929388bbf09/applications")
		// 			.headers(headers_8)
		// 	)

	setUp(scn.users(1).protocolConfig(httpConf))
}