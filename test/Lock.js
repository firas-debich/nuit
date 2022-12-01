const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
const { ethers } = require("hardhat");




describe("Hello orld",  ()=> {
  let contract;
  it("sould get the hello world",async ()=> {
    const hw = await ethers.getContractFactory("HelloWorld");
    const hello = await hw.deploy();
    expect(await hello.helloWorld()).to.equal("Hello, Wolrd");
    contract = hello;
  })
  it("should get the sended message",async()=> {
   await contract.send_message("hello firas")
   expect(await contract.getAllMessages()).to.equal([])
  })

});
