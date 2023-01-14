const request = require("supertest");
const app = require('../app');

describe("Test the Users path", () => {
  test("It should response the GET method for USER 200", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the Users path", () => {
  test("It should response the GET method for USER 200", async () => {
    const response = await request(app).get("/users/johnpapa");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the Users path", () => {
  test("It should response the GET method for USER 404", async () => {
    const response = await request(app).get("/users/johnpapa100");
    expect(response.statusCode).toBe(404);
  });
});

describe("Test the Repo path", () => {
  test("It should response the GET method for Repo 200", async () => {
    const response = await request(app).get("/users/johnpapa/repos");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the Repo path", () => {
  test("It should response the GET methodc for Repo 404", async () => {
    const response = await request(app).get("/users/johnpapa100/repos");
    expect(response.statusCode).toBe(404);
  });
});