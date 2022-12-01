// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Messagerie {
    
    event NewMessage(address sender , string message, string name);

    struct Message {
        string message;
        address sender;
    }

    
    Message[] messages;
    mapping(address => string)  addressToName;

    function sendMessage(string memory _message,string memory _name) public {
        Message memory newMessage = Message(_message, msg.sender);
        messages.push(newMessage);
        addressToName[msg.sender] = _name;
        emit NewMessage(msg.sender, _message, _name);
    }

    function getName(address sender) public view returns (string memory) {
        return addressToName[sender];
    }


    function getMessages() public view returns (Message[] memory) {
        return messages;
    }


 }