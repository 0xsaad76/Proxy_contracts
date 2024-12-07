// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract BoxV2 {
    uint256 public value;
    string public sayHello;

    function setValue(uint256 _value) public {
        value = _value;
    }

    function initializeSayHello(string memory _gretting) public {
        sayHello = _gretting;
    }
}

