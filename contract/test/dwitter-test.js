const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("Dwitter signup flow", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const [user1, user2] = await ethers.getSigners();
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    await dwitter.signup(
      "abhishek",
      "Abhishek",
      "Some random bio",
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    const user = await dwitter.users("abhishek");
    expect(user.username).to.equal("abhishek");
    expect(user.name).to.equal("Abhishek");
    expect(user.bio).to.equal("Some random bio");
    expect(user.avatar).to.equal(
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    console.log("Signup done");

    const userFromGetUser = await dwitter.getUser(user1.address);
    expect(userFromGetUser.username).to.equal("abhishek");
    expect(userFromGetUser.name).to.equal("Abhishek");
    expect(userFromGetUser.bio).to.equal("Some random bio");
    expect(userFromGetUser.avatar).to.equal(
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    console.log("Get user done");

    expect(await dwitter.usernames(user1.address)).to.equal("abhishek");

    await expect(dwitter.signup("", "", "", "")).to.be.revertedWith(
      "User already exists"
    );

    await expect(
      dwitter
        .connect(user2)
        .signup(
          "abhishek",
          "Abhishek",
          "Some random bio",
          "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
        )
    ).to.be.revertedWith("Username is taken, please try another one.");
  });

  it("Dwitter post flow", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const [user1] = await ethers.getSigners();
    const dwitter = await Dwitter.deploy();

    await dwitter.signup(
      "abhishek",
      "Abhishek",
      "Some random bio",
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    const user = await dwitter.users("abhishek");
    expect(user.username).to.equal("abhishek");
    expect(user.name).to.equal("Abhishek");
    expect(user.bio).to.equal("Some random bio");
    expect(user.avatar).to.equal(
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    await dwitter.postDweet("This is dweet content", "12345678", [
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png",
    ]);

    console.log("Post successful");

    const dweets = await dwitter.getDweets();
    expect(dweets[0].content).to.equal("This is dweet content");
    expect(dweets[0].author.wallet).to.equal(user1.address);
    expect(dweets[0].id).to.equal("12345678");
    expect(dweets[0].images[0]).to.equal(
      "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"
    );

    console.log("Get dweets done");

    await dwitter.likeDweet("12345678");
    const dweets1 = await dwitter.getDweets();
    expect(dweets1[0].likes[0]).to.equal(user1.address);

    console.log("Like tweet successful");

    await dwitter.likeDweet("12345678");
    const dweets2 = await dwitter.getDweets();
    expect(dweets2[0].likes.length).to.equal(0);

    console.log("Dislike tweet successful");
  });
});
