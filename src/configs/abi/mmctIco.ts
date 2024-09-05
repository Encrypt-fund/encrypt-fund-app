export const mmctIcoAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AlreadyInitialize",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InsufficientSaleQuantity",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "InvalidRange",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitialize",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.Status",
				"name": "currentStatus",
				"type": "uint8"
			}
		],
		"name": "SaleNotLive",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType",
				"type": "uint8"
			}
		],
		"name": "SaleTypeAlreadyCreated",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "volume",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ramaPriceInUSD",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType",
				"type": "uint8"
			}
		],
		"name": "BuyToken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType_",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "referrer_",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType_",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "saleRateInUsd_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenAmount_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ramaPriceInUSD_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startAt_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endAt_",
				"type": "uint256"
			}
		],
		"name": "createSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "mmctToken_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referralContract_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "stakingContract_",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isInitialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimumBuyInUsd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mmctToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ramaPriceInUSD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "referralContract",
		"outputs": [
			{
				"internalType": "contract IReferralMMCT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saletType_",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "startIndex_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex_",
				"type": "uint256"
			}
		],
		"name": "saleType2Contributors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "result",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType_",
				"type": "uint8"
			}
		],
		"name": "saleType2IcoDetail",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "saleRateInUsd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tokenAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "saleQuantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endAt",
						"type": "uint256"
					},
					{
						"internalType": "enum IICOMMCT.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct IICOMMCT.ICO",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakeContract",
		"outputs": [
			{
				"internalType": "contract IStakeMMCT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saletType_",
				"type": "uint8"
			}
		],
		"name": "totalContributor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saletType_",
				"type": "uint8"
			}
		],
		"name": "totalContributorLengthForUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			}
		],
		"name": "transferMMCTTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "to_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			}
		],
		"name": "transferRAMA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "currentRamaPrice_",
				"type": "uint256"
			}
		],
		"name": "updateRamaPriceInUSD",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType_",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "startAt_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endAt_",
				"type": "uint256"
			}
		],
		"name": "updateSaleTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saleType_",
				"type": "uint8"
			}
		],
		"name": "user2SaleType2Contributor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ramaPriceInUSD",
						"type": "uint256"
					}
				],
				"internalType": "struct IICOMMCT.Contributor",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_",
				"type": "address"
			},
			{
				"internalType": "enum IICOMMCT.SaleType",
				"name": "saletType_",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "startIndex_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex_",
				"type": "uint256"
			}
		],
		"name": "user2SaleType2ContributorList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ramaPriceInUSD",
						"type": "uint256"
					}
				],
				"internalType": "struct IICOMMCT.Contributor[]",
				"name": "result",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
] as const