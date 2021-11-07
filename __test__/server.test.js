"use strict";

const { app } = require("../src/server"); // destructing assignment
const supertest = require("supertest");
const mockRequest = supertest(app);
const { db } = require("../src/models/index");

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe("Server Test", () => {
  // Check if server is alive

  test("/", async () => {
    const response = await mockRequest.get("/");
    expect(response.text).toBe("<h1>Server is Up & Running!</h1>");
  });

  // Users test

  it("can create a user", async () => {
    const response = await mockRequest.post("/signup").send({
      username: "bayan",
      password: "123456",
    });
    expect(response.status).toBe(200);
  });

  it("Invaild signin", async () => {
    const response = await mockRequest
      .post("/signin")
      .auth({ username: "bayan", password: "123456" });
    expect(response.status).toBe(403);
  });

  it("Vaild signin", async () => {
    const request = await mockRequest.post("/signup").send({
      username: "bayan",
      password: "123456",
    });
    const response = await mockRequest.post("/signin").auth("bayan", "123456");
    expect(response.status).toEqual(200);
  });
});
