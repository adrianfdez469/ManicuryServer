"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Client",
    embedded: false
  },
  {
    name: "WorkTypeCategory",
    embedded: false
  },
  {
    name: "WorkType",
    embedded: false
  },
  {
    name: "IngressOfWork",
    embedded: false
  },
  {
    name: "SpendOfWork",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
