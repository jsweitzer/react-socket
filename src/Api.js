import io from 'socket.io-client';

function subscribeToTimer(cb) {
  let socket = io('http://localhost:3002');
  socket.on('timer', (timestamp, dataPoints) => cb(null, timestamp, dataPoints)); 
  socket.emit('subscribeToTimer', 2000);
}
function subscribeToCharts(cb) {
  let socket = io('http://localhost:3002');
  socket.on('charts', (data) => cb(null, data));
  socket.emit('subscribeToCharts');
}
function subscribeToData(id, cb)  {
  let socket = io('http://localhost:3002');
  socket.on('data', (data) => cb(null, data));
  socket.emit('subscribeToData', 2000, id);
  return function(){
    socket.emit('getData', id);
  }
}
function disableChart(id, cb) {
  let socket = io('http://localhost:3002');
  socket.emit('disableChart', id);
}
function insertChart(type, cb) {
  let socket=io('http://localhost:3002');
  socket.emit('insertChart', type);
}
function updateChart(data, cb){
  let socket=io('http://localhost:3002');
  socket.emit('updateChart', data, cb);
}

export { subscribeToTimer,  subscribeToData, subscribeToCharts, disableChart, insertChart, updateChart };