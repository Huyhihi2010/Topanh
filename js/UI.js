const Receive_nav = document.getElementById('Receive-nav');
const Notify_nav = document.getElementById('Notify-nav');

var sock = {
    notify: function(type, title, text) {
        var Notify = document.createElement('div');
        Notify.id = type;
        setTimeout(() => {
            Notify.remove();
        }, 6000);
        Notify.innerHTML = `<div><div id="title-s" class="Titles"><span>${title}</span></div><hr><div><span class="textNoti">${text}</span></div></div>`;
        return Notify_nav.appendChild(Notify);
    },
    receive: function(type, text) {
        var Receive = document.createElement('div');
        Receive.id = 'ReceiveV';
        if(type = 'm') {
            setTimeout(() => {
                Receive.remove();
            }, 10500)
        }
        Receive.innerHTML = `<span class="${type}">${text}</span>`;
        return Receive_nav.appendChild(Receive);
    },
}

sock.notify('notifyM', 'Top ảnh', 'chào mừng đến với webside!, web được làm trong 1 tháng và tạo bởi "Đặng Gia Huy"');
