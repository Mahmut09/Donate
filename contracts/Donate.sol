// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Donate {
	address payable public owner;
	address[] public donators;
    uint[] public donateValue;

	constructor () {             
		owner = payable(msg.sender); 
	}

	function donate() public payable {
		require(msg.value >= .001 ether);
		donators.push(msg.sender);
        donateValue.push(msg.value);
	}

	function transferToOwner() external {
		require(msg.sender == owner);
		owner.transfer(address(this).balance);
	}

	function getDonators() public view returns (address[] memory) {
        return donators;
	}
}