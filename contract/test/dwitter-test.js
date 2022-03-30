const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("test dwitter signup flow", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const [user1, user2] = await ethers.getSigners();
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    await dwitter.signup("abhi", "Abhishek", "Some bio", "someUrl");
    console.log("signing up user for abhi...");

    const user = await dwitter.users("abhi");
    expect(user.name).to.equal("Abhishek");
    expect(user.bio).to.equal("Some bio");
    expect(user.avatar).to.equal("someUrl");
    console.log("test signup is successful");

    const userFromAddress = await dwitter.getUser(user1.address);
    expect(userFromAddress.username).to.equal("abhi");
    expect(userFromAddress.name).to.equal("Abhishek");
    expect(userFromAddress.bio).to.equal("Some bio");
    expect(userFromAddress.avatar).to.equal("someUrl");
    console.log("get user from address is successful");

    expect(await dwitter.usernames(user1.address)).to.equal("abhi");

    await expect(dwitter.signup("", "", "", "")).to.be.revertedWith(
      "User already exists"
    );
    console.log("Test user already exists error");

    await expect(
      dwitter
        .connect(user2)
        .signup("abhi", "Abhish", "Some other bio", "someAvatar")
    ).to.be.revertedWith("Username is taken, please try another one.");
    console.log("Test username is taken error");
  });
});
