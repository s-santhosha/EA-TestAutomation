const testData = require("../testdata/url-config.js");
const request = require("supertest");
let chai = require("chai");
let expect = chai.expect;

describe("Music Festival API Testing", () => {
  it("Should verify name of the festival", (done) => {
    request(testData.url)
      .get("/festivals")
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (res.statusCode === 200) {
          //Assertion-1 - Validate 200 success
          expect(res.statusCode).to.be.equal(200);

          //Assertion-2 - Validate response contains array or empty string
          expect(res.body).to.be.an(
            "array",
            "Response returned empty string instead of an array"
          );

          let response = JSON.parse(res.text);

          for (let i = 0; i < response.length; i++) {
            let musicList = response[i];

            let bandsList = response[i].bands;

            //Assertion-3  - Validate response contains name object key
            expect(musicList).to.include.keys("name").that.is.a("object");

            bandsList.forEach((element) => {
              //Assertion-4 - Validate response within bands array of objects to contain name key and associated string value
              expect(element).to.have.property("name").that.is.a("string");

              //Assertion-5 - Validate response within bands array of objects to contain recordLabel key and associated string value
              expect(element)
                .to.have.property("recordLabel")
                .that.is.a("string");
            });
          }
        } else if (res.statusCode === 429) {
          //Assertion-6 - Validate too many request throttling with 429 status code
          expect.fail(
            res.statusCode,
            200,
            "response code returned 429 due to too many request throttling"
          );
        }

        if (err) throw err;

        done();
      });
  });
});
