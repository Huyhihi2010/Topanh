//Check Main

const YearEl = document.getElementById('YearEl');
const Btn_Image = document.getElementById('Btn-Image');
const Btn_Video = document.getElementById('Btn-Video');

//Check Menu

const MainImage = document.getElementById('MainImage');
const MainVideo = document.getElementById('MainVideo');

//Check Code
const Code_nav = document.getElementById('Code-nav');
const CheckPage_Input = document.getElementById('CheckPage-Input');
const Code_Btn = document.getElementById('Code-Btn');

//Check Help
const Help_nav = document.getElementById('Help-nav');
const Btn_help_nav = document.getElementById('Btn-help-nav');

var UnLockPage4 = false;

var helpOpen = false;

var SidePage = [
    document.getElementById('Side1'),
    document.getElementById('Side2'),
    document.getElementById('Side3'),
    document.getElementById('Side4'),
];

var Page = [
    document.getElementById('Page1'),
    document.getElementById('Page2'),
    document.getElementById('Page3'),
    document.getElementById('Page4'),
];

var SidePageV = [
    document.getElementById('Side1V'),
    document.getElementById('Side2V'),
    document.getElementById('Side3V'),
    document.getElementById('Side4V'),
];

var PageV = [
    document.getElementById('PageV1'),
];

for(var i = 0; i < SidePage.length; i++) {
    SidePage[i].style.border = '0px';
}

for(var i = 0; i < SidePageV.length; i++) {
    SidePageV[i].style.border = '0px';
}

var AdminName = 'Đặng Gia Huy';

var SelectionPage = [
    true,
    false,
    false,
    false,
];

var SelectionPageV = [
    true,
    false,
    false,
    false,
];

Btn_Image.addEventListener('click', () => {
    MainImage.style.display = 'block';
    MainVideo.style.display = 'none';
})

Btn_Video.addEventListener('click', () => {
    MainImage.style.display = 'none';
    MainVideo.style.display = 'block';
})

SidePage[0].addEventListener('click', () => {
    SelectionPage[0] = true;
    SelectionPage[1] = false;
    SelectionPage[2] = false;
    SelectionPage[3] = false;
})

SidePage[1].addEventListener('click', () => {
    SelectionPage[0] = false;
    SelectionPage[1] = true;
    SelectionPage[2] = false;
    SelectionPage[3] = false;
})

SidePage[2].addEventListener('click', () => {
    SelectionPage[0] = false;
    SelectionPage[1] = false;
    SelectionPage[2] = true;
    SelectionPage[3] = false;
})

SidePage[3].addEventListener('click', () => {
    if(UnLockPage4) {
        SelectionPage[0] = false;
        SelectionPage[1] = false;
        SelectionPage[2] = false;
        SelectionPage[3] = true;
    } else {
        Code_nav.style.display = 'block';
    }
})

SidePageV[0].addEventListener('click', () => {
    SelectionPageV[0] = true;
    SelectionPageV[1] = false;
    SelectionPageV[2] = false;
    SelectionPageV[3] = false;
})

SidePageV[1].addEventListener('click', () => {
    SelectionPageV[0] = false;
    SelectionPageV[1] = true;
    SelectionPageV[2] = false;
    SelectionPageV[3] = false;
})

SidePageV[2].addEventListener('click', () => {
    SelectionPageV[0] = false;
    SelectionPageV[1] = false;
    SelectionPageV[2] = true;
    SelectionPageV[3] = false;
})

SidePageV[3].addEventListener('click', () => {
    SelectionPageV[0] = false;
    SelectionPageV[1] = false;
    SelectionPageV[2] = false;
    SelectionPageV[3] = true;
})

Btn_help_nav.addEventListener('click', () => {
    if(helpOpen) {
        helpOpen = false;
    } else {
        helpOpen = true;
    }
    if(helpOpen) {
        Help_nav.style.display = 'block';
    } else {
        Help_nav.style.display = 'none';
    }
})

Code_Btn.addEventListener('click', () => {
    if(CheckPage_Input.value != '') {
        if(CheckPage_Input.value == '7a2IsBest') {
            UnLockPage4 = true;
            CheckPage_Input.value = 'Đã Xác Nhận';
            setTimeout(() => {
                Code_nav.style.display = 'none';
            }, 5000)
        } else {
            alert(`Mã |${CheckPage_Input.value}| Không Tồn Tại hoặc lỗi chính tả`);
            alert(`Hãy hỏi |${AdminName}| Để Nhận Mã`);
        }
    } else {
        CheckPage_Input.value = 'Nhập Mã!';
    }
})

function everySecond() {
    requestAnimationFrame(everySecond);
    //Page 1
    if(SelectionPage[0]) {
        Page[0].style.display = 'block';
        SidePage[0].style.backgroundColor = 'black';
        SidePage[0].style.color = 'white';
    } else {
        Page[0].style.display = 'none';
        SidePage[0].style.backgroundColor = 'white';
        SidePage[0].style.color = 'black';
    }
    //Page 2
    if(SelectionPage[1]) {
        Page[1].style.display = 'block';
        SidePage[1].style.backgroundColor = 'black';
        SidePage[1].style.color = 'white';
    } else {
        Page[1].style.display = 'none';
        SidePage[1].style.backgroundColor = 'white';
        SidePage[1].style.color = 'black';
    }
    //Page 3
    if(SelectionPage[2]) {
        Page[2].style.display = 'block';
        SidePage[2].style.backgroundColor = 'black';
        SidePage[2].style.color = 'white';
    } else {
        Page[2].style.display = 'none';
        SidePage[2].style.backgroundColor = 'white';
        SidePage[2].style.color = 'black';
    }
    //Page 4
    if(SelectionPage[3]) {
        Page[3].style.display = 'block';
        SidePage[3].style.backgroundColor = 'black';
        SidePage[3].style.color = 'white';
    } else {
        Page[3].style.display = 'none';
        SidePage[3].style.backgroundColor = 'white';
        SidePage[3].style.color = 'black';
    }

    //PageV 1
    if(SelectionPageV[0]) {
        PageV[0].style.display = 'block';
        SidePageV[0].style.backgroundColor = 'black';
        SidePageV[0].style.color = 'white';
    } else {
        PageV[0].style.display = 'none';
        SidePageV[0].style.backgroundColor = 'white';
        SidePageV[0].style.color = 'black';
    }
    //PageV 2
    if(SelectionPageV[1]) {
        // PageV[0].style.display = 'block';
        SidePageV[1].style.backgroundColor = 'black';
        SidePageV[1].style.color = 'white';
    } else {
        // PageV[0].style.display = 'none';
        SidePageV[1].style.backgroundColor = 'white';
        SidePageV[1].style.color = 'black';
    }
    //PageV 3
    if(SelectionPageV[2]) {
        // PageV[0].style.display = 'block';
        SidePageV[2].style.backgroundColor = 'black';
        SidePageV[2].style.color = 'white';
    } else {
        // PageV[0].style.display = 'none';
        SidePageV[2].style.backgroundColor = 'white';
        SidePageV[2].style.color = 'black';
    }
    //PageV 4
    if(SelectionPageV[3]) {
        // PageV[0].style.display = 'block';
        SidePageV[3].style.backgroundColor = 'black';
        SidePageV[3].style.color = 'white';
    } else {
        // PageV[0].style.display = 'none';
        SidePageV[3].style.backgroundColor = 'white';
        SidePageV[3].style.color = 'black';
    }
}

everySecond();
