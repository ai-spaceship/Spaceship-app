import { Contract } from 'ethers';
import { objType } from 'for-promise/utils/lib.mjs';
import { tinyCrypto } from '@src/util/web3';

const udPolygonAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'previousAdmin', type: 'address' },
      { indexed: false, internalType: 'address', name: 'newAdmin', type: 'address' },
    ],
    name: 'AdminChanged',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' }],
    name: 'Initialized',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'string', name: 'keyIndex', type: 'string' },
      { indexed: false, internalType: 'string', name: 'key', type: 'string' },
    ],
    name: 'NewKey',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'string', name: 'uri', type: 'string' },
    ],
    name: 'NewURI',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'string', name: 'prefix', type: 'string' }],
    name: 'NewURIPrefix',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'addr', type: 'address' }],
    name: 'RemoveReverse',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ResetRecords',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'string', name: 'keyIndex', type: 'string' },
      { indexed: true, internalType: 'string', name: 'valueIndex', type: 'string' },
      { indexed: false, internalType: 'string', name: 'key', type: 'string' },
      { indexed: false, internalType: 'string', name: 'value', type: 'string' },
    ],
    name: 'Set',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'addr', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'SetReverse',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },

  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BATCH_LIMIT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'NAME',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'key', type: 'string' }],
    name: 'addKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
    name: 'addProxyReader',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'bytes', name: 'depositData', type: 'bytes' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'depositToPolygon',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        internalType: 'struct IForwarder.ForwardRequest',
        name: 'req',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'signature', type: 'bytes' },
    ],
    name: 'execute',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'exists',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'key', type: 'string' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'get',
    outputs: [{ internalType: 'string', name: 'value', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'keyHash', type: 'uint256' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'getByHash',
    outputs: [
      { internalType: 'string', name: 'key', type: 'string' },
      { internalType: 'string', name: 'value', type: 'string' },
    ],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256', name: 'keyHash', type: 'uint256' }],
    name: 'getKey',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256[]', name: 'hashes', type: 'uint256[]' }],
    name: 'getKeys',
    outputs: [{ internalType: 'string[]', name: 'values', type: 'string[]' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'getMany',
    outputs: [{ internalType: 'string[]', name: 'values', type: 'string[]' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'uint256[]', name: 'keyHashes', type: 'uint256[]' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'getManyByHash',
    outputs: [
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'mintingManager', type: 'address' },
      { internalType: 'address', name: 'cnsRegistry', type: 'address' },
      { internalType: 'address', name: 'rootChainManager', type: 'address' },
      { internalType: 'address', name: 'childChainManager', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'isApprovedOrOwner',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'address', name: 'forwarder', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'string', name: 'uri', type: 'string' },
    ],
    name: 'mintTLD',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'string[]', name: 'labels', type: 'string[]' },
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
      { internalType: 'bool', name: 'withReverse', type: 'bool' },
    ],
    name: 'mintWithRecords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'bytes[]', name: 'data', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ internalType: 'bytes[]', name: 'results', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string[]', name: 'labels', type: 'string[]' }],
    name: 'namehash',
    outputs: [{ internalType: 'uint256', name: 'hash', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'nonceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'reconfigure',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [],
    name: 'removeReverse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'reset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'resolverOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
    name: 'reverseNameOf',
    outputs: [{ internalType: 'string', name: 'reverseUri', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
    name: 'reverseOf',
    outputs: [{ internalType: 'uint256', name: 'reverse', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'root',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'string', name: 'key', type: 'string' },
      { internalType: 'string', name: 'value', type: 'string' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'set',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'uint256', name: 'keyHash', type: 'uint256' },
      { internalType: 'string', name: 'value', type: 'string' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'setByHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'setMany',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'uint256[]', name: 'keyHashes', type: 'uint256[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'setManyByHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'string[]', name: 'labels', type: 'string[]' }],
    name: 'setReverse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'prefix', type: 'string' }],
    name: 'setTokenURIPrefix',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'string[]', name: 'labels', type: 'string[]' },
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
      { internalType: 'bool', name: 'withReverse', type: 'bool' },
    ],
    name: 'unlockWithRecords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [{ internalType: 'uint256[]', name: 'tokenIds', type: 'uint256[]' }],
    name: 'upgradeAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },

  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        internalType: 'struct IForwarder.ForwardRequest',
        name: 'req',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'signature', type: 'bytes' },
    ],
    name: 'verify',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [
      { internalType: 'bytes', name: 'inputData', type: 'bytes' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'string[]', name: 'keys', type: 'string[]' },
      { internalType: 'string[]', name: 'values', type: 'string[]' },
    ],
    name: 'withdrawFromPolygon',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

let udManager = null;
export default function getUdManager() {
  if (
    !udManager &&
    objType(tinyCrypto.userProviders, 'object') &&
    tinyCrypto.userProviders.polygon
  ) {
    udManager = new Contract(
      '0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f',
      udPolygonAbi,
      tinyCrypto.userProviders.polygon,
    );
  }

  return udManager || {};
}
