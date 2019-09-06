
export default {
  apiUrl: 'http://localhost:7004/api',
  secret: '[xenex]',
  version: '190204-01',
  socket: {
    url: (window.location.host.substr(-8) === 'xenex.io') ? 'https://socket-ptt.apps.xenex.io' : (
      window.location.hostname === 'localhost' ? 'http://10.0.2.113:8999' : 'http://' + window.location.host + ':8999'
    ),
    // url: 'https://socket.ptt.apps.xenex.io',
    // url: 'http://10.0.2.110:8999',
    user: 'xenex-app',
    pass: 'xenex!4555',
  },
}
