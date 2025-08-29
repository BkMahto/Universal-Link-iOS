# Universal-Link-iOS

A Universal Link testing server for iOS applications. This project provides a local Express.js server that serves Apple App Site Association files and handles Universal Link redirects.

## Features

- ✅ Express.js server for Universal Link handling
- ✅ Apple App Site Association file serving
- ✅ HTTPS support via ngrok tunnel
- ✅ Local development with live reload

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- ngrok (for HTTPS tunneling)

## Installation & Setup

### 1. Install Dependencies
```bash
cd webCode
npm install
```

### 2. Start the Local Server
```bash
cd webCode
node index.js
```
The server will start on `http://localhost:3000`

### 3. Create HTTPS Tunnel with ngrok
In a new terminal window:
```bash
ngrok http 3000
```

## Available Endpoints

- **Apple App Site Association:** `/.well-known/apple-app-site-association`
- **Merchant Share API:** `/api/merchant/share`

## Testing Your Setup

### Local Testing
```bash
# Test Apple App Site Association file
curl http://localhost:3000/.well-known/apple-app-site-association

# Test merchant share endpoint
curl http://localhost:3000/api/merchant/share
```

### HTTPS Testing (via ngrok)
Once ngrok is running, you'll get a public HTTPS URL like:
`https://[random-id].ngrok-free.app`

Test the endpoints:
```bash
# Test Apple App Site Association file via HTTPS
curl https://[your-ngrok-url]/.well-known/apple-app-site-association

# Test merchant share endpoint via HTTPS
curl https://[your-ngrok-url]/api/merchant/share
```

## Project Structure

```
webCode/
├── index.js                    # Main Express server
├── apple-app-site-association  # Apple App Site Association file
├── package.json               # Dependencies and scripts
└── package-lock.json         # Locked dependency versions
```

## Configuration

The server is configured to:
- Run on port 3000
- Serve static files from the webCode directory
- Handle Universal Link redirects to the App Store

## ngrok Dashboard

Access the ngrok web interface at `http://localhost:4040` to:
- Monitor incoming requests
- View traffic statistics
- Manage tunnel settings

## Troubleshooting

### Port Already in Use
If port 3000 is occupied, modify the port in `index.js`:
```javascript
const port = 3001; // or any available port
```

### ngrok Not Working
- Ensure ngrok is installed: `brew install ngrok` (macOS)
- Check if ngrok is authenticated: `ngrok authtoken [your-token]`
- Verify the tunnel is active at `http://localhost:4040`

### Server Not Starting
- Check if all dependencies are installed: `npm install`
- Verify Node.js version: `node --version`
- Check for syntax errors in `index.js`

## License

MIT License - see LICENSE file for details