const menuBar = document.querySelectorAll(".nav-link");
const boxContent = document.querySelector("#box-content");
const dot = `<i class="fas fa-dot-circle"></i>&nbsp;&nbsp;`;
const angleRight = `<i class="fas fa-angle-right"></i>&nbsp;&nbsp;`;

const addBox = (name) => {
    let html = `
        <span>Example Check Activated!</span>
        <p> KKK ${name}</p>
    `;
    return html;
}
let blueBox = document.querySelector("#blue-box-content");
const scrollToBlueBox = () => {
    blueBox.scrollIntoView({behavior: "smooth", block: "end"});
}

const introduceMyselfHTML = document.querySelector("#blue-box-content").innerHTML;
//console.log(introduceMyselfHTML);

const skillsArray = [
    {name : "HTML", level : 70},
    {name : "CSS", level : 70},
    {name : "BOOTSTRAP", level : 60},
    {name : "JAVASCRIPT", level : 50},
    {name : "SCSS", level : 20},
    {name : "GIMP", level : 10},
    {name : "JAVA", level : 35},
    {name : "GIT REPOSITORY", level : 50},
    {name : "sleep", level : 5},
    {name : "youtube", level : 89},
];

//  For Ky Nang Tab
const showOneSkill = (skillName, number) => {
    let result = `
    <div class="progress-container">
        <span class="text-uppercase">${skillName}</span>
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${number}%;"></div>
            <span class="progress-value">${number}%</span>
        </div>
    </div>
    `;
    return result;
}

const showKyNangHTML = () => {
    let kyNangHTML = `<h2 class="text-uppercase text-center">Kĩ năng</h2><br>
    <div class="row"><div class="col-md-6">`;
    const half = skillsArray.length / 2;
    let count = 0;
    skillsArray.forEach(skill => {
        count++;
        kyNangHTML += showOneSkill(skill.name, skill.level);
        if (count == half) {
            kyNangHTML += `</div><div class="col-md-6">`;
        }
    });
    kyNangHTML += "</div></div>"
    //console.log(kyNangHTML);
    return kyNangHTML;
}
const kyNangHTML = showKyNangHTML();

// For Hoc Van & Kinh Nghiem Tab
const showHocVanKinhNghiem = (name, time, place, content) => {
    let result = `
    <div class="timeline">
    <div class="time-container right">
    <div class="content">
    <div class="row">
    <div class="col-md-4 text-center align-self-center">
    <p>${time}</p>
    <h2 class="text-uppercase">${name}</h2>
    </div>  
    <div class="col-md-8 border-ngancach">
    <h2 class="text-center">${place}</h2>
    ${content}
    </div>
    </div>
    </div>
    </div>
    </div> 
    `;
    return result;
}

// Hoc Van
const hocVanArray = [
    {hocVan: "Cử nhân đại học", namNhan: "2018-2022", place: "Trường Đại Học Sài Gòn", content: ""},
    {hocVan: "Chứng chỉ FrontEnd Dev", namNhan: "6-2021 (dự định)", place: "CyberSoft Academy", content: ""}
];

hocVanArray[0].content = `<p class="text-uppercase text-center">Công Nghệ Thông tin</p><br>
<p>${dot}Học về Front End Developer</p>
<p>${dot}UX,UI,XML,HTML5,CSS3(Bootstrap,SCSS)</p>
<p>${dot}Javascript(RestfulAPI, Axios, DOM), GIT</p>
<p>${dot}AngularJS</p>
<p>${dot}VueJS</p>
`;
hocVanArray[1].content = `<p class="text-uppercase text-center">Front End Developer</p><br>
<p>${dot}Học về Front End Developer</p>
<p>${dot}UX,UI,XML,HTML5,CSS3(Bootstrap,SCSS)</p>
<p>${dot}Javascript(RestfulAPI, Axios, DOM), GIT</p>
<p>${dot}AngularJS</p>
<p>${dot}VueJS</p>
`;

const showHocVanHTML = () => {
    let html = `<h2 class="text-uppercase text-center">Học vấn</h2>`;
    hocVanArray.forEach(hv => {
        html += showHocVanKinhNghiem(hv.hocVan, hv.namNhan, hv.place, hv.content);
    });
    console.log(html);
    return html;
}
const hocVanHTML = showHocVanHTML();


// Kinh Nghiem
const kinhNghiemArray = [
{kinhNghiem: "Stay at home", time: "8/2020 - Present", jobName: "Kiddo", content: ""},
{kinhNghiem: "Example", time: "6/2018 - 8/2019", jobName: "Example", content: ""}
];

kinhNghiemArray[0].content = `<br>
<p>${dot}Ăn ở nhà</p>
<p>${dot}Ngủ ở nhà</p>
<p>${dot}Chơi ở nhà</p>
<p>${dot}Nằm ở nhà</p>
`;
kinhNghiemArray[1].content = `<br>
<p>${dot}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eos blanditiis nam odio.</p>
<p>${dot}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit enim sit!</p>
<p>${dot}Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid?</p>
`;

const showKinhNghiemHTML = () => {
    let html = `<h2 class="text-uppercase text-center">Kinh nghiệm</h2>`;
    kinhNghiemArray.forEach(kn => {
        html += showHocVanKinhNghiem(kn.kinhNghiem, kn.time, kn.jobName, kn.content);
    });
    console.log(html);
    return html;
}
const kinhNghiemHTML = showKinhNghiemHTML();


// Lien He
const lienHeHTML = `<h2 class="text-uppercase text-center">Liên hệ</h2><br>
<div class="row">
    <div class="col-md-7">
        <h4 class="mb-3">Thông tin</h3>
        <div class="row">
            <div class="col-md-10 align-self-center">
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Tên">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Tiêu đề">
                    </div>
                    <div class="form-group">
                        <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Tin nhắn"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary btn-send-message" value="Gửi">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <h4 class="mb-2"><i class="fas fa-map"></i>&nbsp;&nbsp;Địa chỉ</h4>
        <p class="pb-2">${angleRight}Thành phố Hồ Chí Minh</p>
        <h4 class="mb-2"><i class="fas fa-phone"></i>&nbsp;&nbsp;Điện thoại</h4>
        <p class="pb-2">${angleRight}0815279271</p>
        <h4 class="mb-2"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Email</h4>
        <p class="pb-2">${angleRight}thuantien00@gmail.com</p>
    </div>
    
</div>
`;

//  Jquery
$(document).ready(function(){

    $(".nav-link:first").ready(function(){
        $(".nav-link:first").addClass("box-active");
    });

    // Switch between tabs
    $(".nav-link").click(function() {
        $(".nav-link").removeClass("box-active");
        $(this).addClass("box-active");
        $(".blue-box").empty();
        
        let name = $(this).text().trim();
        let htmlTemplate = addBox(name); // temporary
        
        if (name == "giới thiệu".toUpperCase()) {
            htmlTemplate = introduceMyselfHTML;
        }
        if (name == "kĩ năng".toUpperCase()) {
            htmlTemplate = kyNangHTML;
        }
        if (name == "học vấn".toUpperCase()) {
            htmlTemplate = hocVanHTML;
        }
        if (name == "kinh nghiệm".toUpperCase()) {
            htmlTemplate = kinhNghiemHTML;
        }
        if (name == "liên hệ".toUpperCase()) {
            htmlTemplate = lienHeHTML;
        }

        console.log(name);
        $(".blue-box").append(htmlTemplate);
        
        // Scroll down
        // $('html, body').animate({
        //     scrollTop: $("#blue-box-content").offset().top-100}, 1000
        // );
        scrollToBlueBox();
    });
});
