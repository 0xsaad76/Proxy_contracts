// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Box {
    uint256 public value;

    function setValue(uint256 _value) public {
        value = _value;
    }
}

