//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Dwitter{
    struct User {
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;
    }
    struct Dweet {
        User author;
        string id;
        string content;
        uint timestamp;
        string[] images;
        address[] likes;
    }

    mapping(address => string) public usernames;
    mapping(string => User) public users;
    Dweet[] public dweets;

    function signup(string memory _username, string memory _name, string memory _bio, string memory _avatar) public {
        require(bytes(usernames[msg.sender]).length == 0, "User already exists");
        require(users[_username].wallet == address(0), "Username is taken, please try another one.");

        users[_username] = User({
            wallet: msg.sender,
            name: _name,
            username: _username,
            bio: _bio,
            avatar: _avatar
        });
        usernames[msg.sender] = _username;
    }

    function getUser(address _wallet) public view returns (User memory) {
        return users[usernames[_wallet]];
    }

    function postDweet(string memory _content, string memory _id, string[] memory _images) public {
        require(bytes(usernames[msg.sender]).length > 0, "You must sign up to post a dweet.");
        require(bytes(_content).length > 0, "I'm sure your thoughts are not empty. Dweet something out.");
        require(bytes(_content).length <= 140, "Dweet is too long. Please keep it under 140 characters.");
        User memory user = users[usernames[msg.sender]];

        Dweet memory dweet = Dweet({
            author: user, id: _id, content: _content, timestamp: block.timestamp, images: _images, likes: new address[](0)
        });
        dweets.push(dweet);
    }

    function likeDweet(string memory _id) public {
        require(bytes(usernames[msg.sender]).length > 0, "You must be signed up to like a dweet");
        require(bytes(_id).length > 0, "Dweet does not exist");
        bool add = true;
        for (uint i = 0; i < dweets.length; i++) {
            if ((keccak256(abi.encodePacked((dweets[i].id))) == keccak256(abi.encodePacked((_id))))) {
                for (uint j = 0; j < dweets[i].likes.length; j++) {
                    if (dweets[i].likes[j] == msg.sender) {
                        dweets[i].likes[j] = dweets[i].likes[dweets[i].likes.length - 1];
                        dweets[i].likes.pop();
                        add = false;
                    }
                }
                if (add) {
                    dweets[i].likes.push(msg.sender);
                }
                return;
            }
        }
    }

    function getDweets() public view returns (Dweet[] memory) {
        return dweets;
    }
}