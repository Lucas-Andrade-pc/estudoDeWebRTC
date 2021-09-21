import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
//import {ADD_STREAM, MY_STREAM, ADD_REMOTE_STREAM} from ' ./types';

export const API_URI = 'htt://192.168.0.108:5000';

export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

socket.on('connection', () => console.log('Connected client'));

const peerServer = new Peer(undefined, {
  host: '192.168.0.108',
  secure: false,
  port: 5000,
  path: '/mypeer',
});

peerServer.on('error', console.log);

export const joinRoom = stream => async dispatch => {};

function connectToNewUser() {}
