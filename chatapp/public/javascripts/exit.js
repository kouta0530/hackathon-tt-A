'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    console.log(userName);
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent',userName);

    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exitOtherEvent', function (data) {
    $('#thread').prepend('<p>'+data + 'が退出しました</p>');
});
