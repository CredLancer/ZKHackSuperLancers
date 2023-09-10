/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Credential,
  CredentialInterface,
} from "../../contracts/Credential";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SoulboundTokenCannotBeApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "SoulboundTokenCannotBeTransferred",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "URI_SETTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082019091526007815266697066733a2f2f60c81b60208201526200003b81620000a7565b5062000049600033620000b9565b620000757f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c33620000b9565b620000a17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000b9565b620002ce565b6002620000b5828262000202565b5050565b60008281526003602090815260408083206001600160a01b038516845290915290205460ff16620000b55760008281526003602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001193390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200018857607f821691505b602082108103620001a957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001fd57600081815260208120601f850160051c81016020861015620001d85750805b601f850160051c820191505b81811015620001f957828155600101620001e4565b5050505b505050565b81516001600160401b038111156200021e576200021e6200015d565b62000236816200022f845462000173565b84620001af565b602080601f8311600181146200026e5760008415620002555750858301515b600019600386901b1c1916600185901b178555620001f9565b600085815260208120601f198616915b828110156200029f578886015182559484019460019091019084016200027e565b5085821015620002be5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6121dc80620002de6000396000f3fe608060405234801561001057600080fd5b50600436106101505760003560e01c80634e1273f4116100cd578063a22cb46511610081578063d547741f11610066578063d547741f14610317578063e985e9c51461032a578063f242432a1461036657600080fd5b8063a22cb465146102dd578063d5391393146102f057600080fd5b80637f345710116100b25780637f3457101461027557806391d148541461029c578063a217fddf146102d557600080fd5b80634e1273f414610242578063731133e91461026257600080fd5b80631f7fdffa116101245780632eb2c2d6116101095780632eb2c2d6146102095780632f2ff15d1461021c57806336568abe1461022f57600080fd5b80631f7fdffa146101d3578063248a9ca3146101e657600080fd5b8062fdd58e1461015557806301ffc9a71461017b57806302fe53051461019e5780630e89341c146101b3575b600080fd5b6101686101633660046117a5565b610379565b6040519081526020015b60405180910390f35b61018e6101893660046117e5565b610425565b6040519015158152602001610172565b6101b16101ac3660046118a3565b610430565b005b6101c66101c13660046118f4565b610467565b604051610172919061195d565b6101b16101e1366004611a25565b6104fb565b6101686101f43660046118f4565b60009081526003602052604090206001015490565b6101b1610217366004611abe565b610538565b6101b161022a366004611b68565b6105d3565b6101b161023d366004611b68565b6105fd565b610255610250366004611b94565b610685565b6040516101729190611c9a565b6101b1610270366004611cad565b6107c3565b6101687f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c81565b61018e6102aa366004611b68565b60009182526003602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610168600081565b6101b16102eb366004611d02565b6107f9565b6101687f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101b1610325366004611b68565b610812565b61018e610338366004611d3e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101b1610374366004611d68565b610837565b60006001600160a01b0383166103fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b600061041f826108d2565b7f7804d923f43a17d325d77e781528e0793b2edd9890ab45fc64efd7b4b427744c61045a81610910565b6104638261091d565b5050565b60606002805461047690611dcd565b80601f01602080910402602001604051908101604052809291908181526020018280546104a290611dcd565b80156104ef5780601f106104c4576101008083540402835291602001916104ef565b820191906000526020600020905b8154815290600101906020018083116104d257829003601f168201915b50505050509050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661052581610910565b61053185858585610929565b5050505050565b6001600160a01b03851633148061055457506105548533610338565b6105c65760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016103f3565b6105318585858585610afe565b6000828152600360205260409020600101546105ee81610910565b6105f88383610d6a565b505050565b6001600160a01b038116331461067b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016103f3565b6104638282610e0c565b606081518351146106fe5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016103f3565b6000835167ffffffffffffffff81111561071a5761071a611802565b604051908082528060200260200182016040528015610743578160200160208202803683370190505b50905060005b84518110156107bb5761078e85828151811061076757610767611e07565b602002602001015185838151811061078157610781611e07565b6020026020010151610379565b8282815181106107a0576107a0611e07565b60209081029190910101526107b481611e33565b9050610749565b509392505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66107ed81610910565b61053185858585610e8f565b604051630701eeb960e01b815260040160405180910390fd5b60008281526003602052604090206001015461082d81610910565b6105f88383610e0c565b6001600160a01b03851633148061085357506108538533610338565b6108c55760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016103f3565b6105318585858585610fb2565b60006001600160e01b031982167f7965db0b00000000000000000000000000000000000000000000000000000000148061041f575061041f8261116b565b61091a8133611206565b50565b60026104638282611e92565b6001600160a01b0384166109895760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016103f3565b81518351146109eb5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016103f3565b336109fb8160008787878761127b565b60005b8451811015610a9657838181518110610a1957610a19611e07565b6020026020010151600080878481518110610a3657610a36611e07565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610a7e9190611f52565b90915550819050610a8e81611e33565b9150506109fe565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610ae7929190611f65565b60405180910390a4610531816000878787876112a3565b8151835114610b605760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016103f3565b6001600160a01b038416610bc45760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016103f3565b33610bd381878787878761127b565b60005b8451811015610cfc576000858281518110610bf357610bf3611e07565b602002602001015190506000858381518110610c1157610c11611e07565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610ca45760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016103f3565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610ce1908490611f52565b9250508190555050505080610cf590611e33565b9050610bd6565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610d4c929190611f65565b60405180910390a4610d628187878787876112a3565b505050505050565b60008281526003602090815260408083206001600160a01b038516845290915290205460ff166104635760008281526003602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610dc83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526003602090815260408083206001600160a01b038516845290915290205460ff16156104635760008281526003602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038416610eef5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016103f3565b336000610efb85611448565b90506000610f0885611448565b9050610f198360008985858961127b565b6000868152602081815260408083206001600160a01b038b16845290915281208054879290610f49908490611f52565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610fa983600089898989611493565b50505050505050565b6001600160a01b0384166110165760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016103f3565b33600061102285611448565b9050600061102f85611448565b905061103f83898985858961127b565b6000868152602081815260408083206001600160a01b038c168452909152902054858110156110c35760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016103f3565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290611100908490611f52565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611160848a8a8a8a8a611493565b505050505050505050565b60006001600160e01b031982167fd9b67a260000000000000000000000000000000000000000000000000000000014806111ce57506001600160e01b031982167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061041f57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b031983161461041f565b60008281526003602090815260408083206001600160a01b038516845290915290205460ff16610463576112398161158f565b6112448360206115a1565b604051602001611255929190611f93565b60408051601f198184030181529082905262461bcd60e51b82526103f39160040161195d565b6001600160a01b03851615610d6257604051630701eeb960e01b815260040160405180910390fd5b6001600160a01b0384163b15610d625760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906112e79089908990889088908890600401612014565b6020604051808303816000875af1925050508015611322575060408051601f3d908101601f1916820190925261131f91810190612072565b60015b6113d75761132e61208f565b806308c379a00361136757506113426120ab565b8061134d5750611369565b8060405162461bcd60e51b81526004016103f3919061195d565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016103f3565b6001600160e01b0319811663bc197c8160e01b14610fa95760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016103f3565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061148257611482611e07565b602090810291909101015292915050565b6001600160a01b0384163b15610d625760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906114d79089908990889088908890600401612135565b6020604051808303816000875af1925050508015611512575060408051601f3d908101601f1916820190925261150f91810190612072565b60015b61151e5761132e61208f565b6001600160e01b0319811663f23a6e6160e01b14610fa95760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016103f3565b606061041f6001600160a01b03831660145b606060006115b0836002612178565b6115bb906002611f52565b67ffffffffffffffff8111156115d3576115d3611802565b6040519080825280601f01601f1916602001820160405280156115fd576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061163457611634611e07565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061167f5761167f611e07565b60200101906001600160f81b031916908160001a90535060006116a3846002612178565b6116ae906001611f52565b90505b6001811115611733577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106116ef576116ef611e07565b1a60f81b82828151811061170557611705611e07565b60200101906001600160f81b031916908160001a90535060049490941c9361172c8161218f565b90506116b1565b5083156117825760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103f3565b9392505050565b80356001600160a01b03811681146117a057600080fd5b919050565b600080604083850312156117b857600080fd5b6117c183611789565b946020939093013593505050565b6001600160e01b03198116811461091a57600080fd5b6000602082840312156117f757600080fd5b8135611782816117cf565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff8111828210171561183e5761183e611802565b6040525050565b600067ffffffffffffffff83111561185f5761185f611802565b604051611876601f8501601f191660200182611818565b80915083815284848401111561188b57600080fd5b83836020830137600060208583010152509392505050565b6000602082840312156118b557600080fd5b813567ffffffffffffffff8111156118cc57600080fd5b8201601f810184136118dd57600080fd5b6118ec84823560208401611845565b949350505050565b60006020828403121561190657600080fd5b5035919050565b60005b83811015611928578181015183820152602001611910565b50506000910152565b6000815180845261194981602086016020860161190d565b601f01601f19169290920160200192915050565b6020815260006117826020830184611931565b600067ffffffffffffffff82111561198a5761198a611802565b5060051b60200190565b600082601f8301126119a557600080fd5b813560206119b282611970565b6040516119bf8282611818565b83815260059390931b85018201928281019150868411156119df57600080fd5b8286015b848110156119fa57803583529183019183016119e3565b509695505050505050565b600082601f830112611a1657600080fd5b61178283833560208501611845565b60008060008060808587031215611a3b57600080fd5b611a4485611789565b9350602085013567ffffffffffffffff80821115611a6157600080fd5b611a6d88838901611994565b94506040870135915080821115611a8357600080fd5b611a8f88838901611994565b93506060870135915080821115611aa557600080fd5b50611ab287828801611a05565b91505092959194509250565b600080600080600060a08688031215611ad657600080fd5b611adf86611789565b9450611aed60208701611789565b9350604086013567ffffffffffffffff80821115611b0a57600080fd5b611b1689838a01611994565b94506060880135915080821115611b2c57600080fd5b611b3889838a01611994565b93506080880135915080821115611b4e57600080fd5b50611b5b88828901611a05565b9150509295509295909350565b60008060408385031215611b7b57600080fd5b82359150611b8b60208401611789565b90509250929050565b60008060408385031215611ba757600080fd5b823567ffffffffffffffff80821115611bbf57600080fd5b818501915085601f830112611bd357600080fd5b81356020611be082611970565b604051611bed8282611818565b83815260059390931b8501820192828101915089841115611c0d57600080fd5b948201945b83861015611c3257611c2386611789565b82529482019490820190611c12565b96505086013592505080821115611c4857600080fd5b50611c5585828601611994565b9150509250929050565b600081518084526020808501945080840160005b83811015611c8f57815187529582019590820190600101611c73565b509495945050505050565b6020815260006117826020830184611c5f565b60008060008060808587031215611cc357600080fd5b611ccc85611789565b93506020850135925060408501359150606085013567ffffffffffffffff811115611cf657600080fd5b611ab287828801611a05565b60008060408385031215611d1557600080fd5b611d1e83611789565b915060208301358015158114611d3357600080fd5b809150509250929050565b60008060408385031215611d5157600080fd5b611d5a83611789565b9150611b8b60208401611789565b600080600080600060a08688031215611d8057600080fd5b611d8986611789565b9450611d9760208701611789565b93506040860135925060608601359150608086013567ffffffffffffffff811115611dc157600080fd5b611b5b88828901611a05565b600181811c90821680611de157607f821691505b602082108103611e0157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611e4557611e45611e1d565b5060010190565b601f8211156105f857600081815260208120601f850160051c81016020861015611e735750805b601f850160051c820191505b81811015610d6257828155600101611e7f565b815167ffffffffffffffff811115611eac57611eac611802565b611ec081611eba8454611dcd565b84611e4c565b602080601f831160018114611ef55760008415611edd5750858301515b600019600386901b1c1916600185901b178555610d62565b600085815260208120601f198616915b82811015611f2457888601518255948401946001909101908401611f05565b5085821015611f425787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561041f5761041f611e1d565b604081526000611f786040830185611c5f565b8281036020840152611f8a8185611c5f565b95945050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fcb81601785016020880161190d565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161200881602884016020880161190d565b01602801949350505050565b60006001600160a01b03808816835280871660208401525060a0604083015261204060a0830186611c5f565b82810360608401526120528186611c5f565b905082810360808401526120668185611931565b98975050505050505050565b60006020828403121561208457600080fd5b8151611782816117cf565b600060033d11156120a85760046000803e5060005160e01c5b90565b600060443d10156120b95790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156120e957505050505090565b82850191508151818111156121015750505050505090565b843d870101602082850101111561211b5750505050505090565b61212a60208286010187611818565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261216d60a0830184611931565b979650505050505050565b808202811582820484141761041f5761041f611e1d565b60008161219e5761219e611e1d565b50600019019056fea26469706673582212204d3526e3d863519103e57a217330d55210f116e4b429576c8f8d5925e06dd95464736f6c63430008110033";

type CredentialConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CredentialConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Credential__factory extends ContractFactory {
  constructor(...args: CredentialConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Credential> {
    return super.deploy(overrides || {}) as Promise<Credential>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Credential {
    return super.attach(address) as Credential;
  }
  override connect(signer: Signer): Credential__factory {
    return super.connect(signer) as Credential__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CredentialInterface {
    return new utils.Interface(_abi) as CredentialInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Credential {
    return new Contract(address, _abi, signerOrProvider) as Credential;
  }
}