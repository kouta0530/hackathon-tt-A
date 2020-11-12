'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    if(!message){
        alert("メッセージを入力してください")
        return false;
    }

    // 投稿内容を送信
    const data = {
        userName, message
    }
    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    const {userName, message} = data
    $('#thread').prepend('<p>' + userName + 'さん : ' + message + '</p>');
});
