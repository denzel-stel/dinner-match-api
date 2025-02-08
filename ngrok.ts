import ngrok from "ngrok";


/**
 * Function to start Ngrok gateaway so the api can be accesses from a public url.
 * @returns {Promise<void>}
 */
const startNgrok = async () => {
    // first kill all processes
    await ngrok.disconnect();

    // const tunnels = await api.listTunnels();
    // console.log(tunnels)
    return await ngrok.connect({
        proto: 'http', // http|tcp|tls, defaults to http
        addr: 3000, // port or network address, defaults to 80
        authtoken: process.env.NGROK_AUTH_TOKEN, // your authtoken from ngrok.com
        hostname: process.env.NGROK_STATIC_DOMAIN, // reserved tunnel name https://alex.ngrok.io
        onStatusChange: status => {
            console.log(status);
        }, // 'closed' - connection is lost, 'connected' - reconnected
        onLogEvent: data => {
            console.log(data);
        }, // returns stdout messages from ngrok process
    });
}

export { startNgrok}