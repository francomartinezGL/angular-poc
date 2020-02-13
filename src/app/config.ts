export const CONFIG = {
  apiUrl: '/api',
  wsURL: '/ws/websocket/websocket',
  metadataPath: '/metadata',
  dateFormat: 'MM-DD-YYYY',
  dateTimeFormat: 'MM-DD-YYYY [at] hh:mma',
  storagePrefix: 'teaminc',
  authErrorCode: 'TEAMINC_ERROR_0001',
  wsRetryTimeOut: 120000, // time in milliseconds equivalent to 2 minutes
  oAuth: {
    regular: {
      grantType: 'password',
      clientId: '',
      clientSecret: '',
      username: '',
      password: ''
    }
  },
  keepAlive: {
    timeout: 60, // time in seconds 1 min
    idleTime: 1800, // time in seconds 30 min
    interval: 300, // time in seconds 5 min
    tokenRequest: {
      grantType: 'token',
      clientId: '',
      clientSecret: '',
      token: ''
    }
  },
  uploadSettings: {
    allowedTypes: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml', 'application/pdf'],
    maxFileSize: 100000000
  },
  pagination: {
    allowedRanges: [{ range: 10 }, { range: 25 }, { range: 30 }, { range: 40 }, { range: 50 }, { range: 75 }, { range: 100 }],
    maxPaginationItems: 4,
    directionLinks: true,
    boundaryLinks: false,
    ellipses: true,
    rotate: true,
    size: '',
    largePage: 200
  },
  commonRegex: {
    alphanumeric: /^[a-z0-9\s]+$/i,
    lettersOnly: /^[A-Za-z\s]+$/,
    positiveNumbersOnly: /^(\d*\.)?\d+$/
  },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  defaultUserTimezone: 'CPT'
};
