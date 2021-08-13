let video_details = [

    [
    "শামীম ওসমানের বাবা-মা'র কবরের ওপরে শ্মশানের মাটি! Shamim Osman",
    "somoy tv",
    "83K",
    "1 hour",
    "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview",
    ],


    [
    "শিক্ষণীয় হাসির শর্টফিল্ম কুদে কালা কুদে কালা -০৩ Thikana TV",
    "Thikana Tv.press",
    "131K",
    "3 days",
    "https://drive.google.com/file/d/1OdX05VtfRFyAr-1pDyqgiSUIyMkVOns0/preview",
    ],


    [
    "Abu Taha Muhammad Adnan Waz Status Video",
    "Abu Taw Haa Muhammad",
    "1.8 lakh",
    "5 months",
    "https://drive.google.com/file/d/1pWeQ--wEYUHdOvwhsnlrCW0RWj_hADDS/preview",
    ],


    [
    "মাহে রমজানের গান রহমের বৃষ্টি জাইমা নূর",
    "Jaima Noor",
    "3.4M",
    "1 years",
    "https://drive.google.com/file/d/1Z2XerGXVELE_IPD-9rRhZwXlCkkYGno3/preview",
    ],


    [
    "Pobitro Prem পবিত্র প্রেম Akib Ahmed Islamic Natok 2021",
    "akib islamic tv",
    "229K",
    "2 years",
    "https://drive.google.com/file/d/1bbdwLGSKpIHe_CL-HODbQy-MvgNpffHw/preview",
    ],


    [
    "জাইমার কন্ঠে বিবেক জাগ্রত করার গান কেমন মানুষ তুমি Jaima Noor",
    "Jaima Noor",
    "668K",
    "4 hours",
    "https://drive.google.com/file/d/1VL0NPlDgRjADZs0zWrLotFouNE9z5vpn/preview",
    ],


    [
    "ব্রাজিল vs আর্জেন্টিনা Bangla Islamic Natok 2021 II Akib Islamic Tv",
    "akib islamic tv",
    "39K",
    "4 months",
    "https://drive.google.com/file/d/1D_2402oD4lDQ8-B8SG8M_OgJ_bHYZPsS/preview",
    ],


    [
    "Seafood Halal or Haram Mizanur Rahman Azhari",
    "mizanur rahman azhari",
    "4M",
    "2 years",
    "https://drive.google.com/file/d/1YrIJfPperAtum5N3em5XnWPDcLSvaxke/preview",
    ],


    [
    "শহীদ কারা  Who are the martyrs in Islam মিজানুর রহমান আজহারি",
    "mizanur rahman azhari",
    "844K",
    "2 weeks",
    "https://drive.google.com/file/d/1Ck8Sn5zabbYj0GdmWZU4JmFxEGtNE8fl/preview",
    ],


    [
    "KRIPONNATA-2 কৃপণতা Bangla Islamic Natok 2021 Akib Ahmed",
    "akib islamic tv",
    "79.6K",
    "4 months",
    "https://drive.google.com/file/d/1o2odlDyDBm10-ZZbF6QNc5LguaFjFxSD/preview",
    ],


    [
    "সাইদি সাহেবের ১৯৮০ সালের আগুন ঝরা বক্তব্য। Delwar Hossain Saidi",
    "Madina tv",
    "89.6K",
    "3 months",
    "https://drive.google.com/file/d/1d8YWDOFrXyoUw6estGdvgztopb2AE0qt/preview",
    ],


    [
    "শ্রেষ্ঠ বক্তার শ্রেষ্ঠ বক্তব্য শুনুন জীবন বদলে যাবে Dr.shafiqul Islam masud",
    "Dr. Shafiqul Islam",
    "2.6M",
    "8 months",
    "https://drive.google.com/file/d/18OrsRLLGUiP3FP8-H7LTrplcm3arpLnk/preview",
    ],


    [
    "জাইমা নূরের কণ্ঠে নতুন গান Machranga Dekhecho ki মাছরাঙ্গ Muchki Hasir",
    "saimum shilpogosthi",
    "359K",
    "6 months",
    "https://drive.google.com/file/d/1FzC5_FmEGY_TfwdzxKKM2LLX_DDSvCB_/preview",
    ],


    [
    "গেম আসক্তি PUBG FREE FIRE Islamic Natok Akib Ahmed",
    "akib islamic tv",
    "173K",
    "22 hours",
    "https://drive.google.com/file/d/1cFMHkox0ZRKF10xVmoDiASuIJQ1yOjtI/preview",
    ],


    [
    "২০ থেকে ২৫ হাজারে সেরা ৫ টি স্মার্টফোন - Best Phones in 20k-25k",
    "Sohag360",
    "582K",
    "9 months",
    "https://drive.google.com/file/d/1ef9xNHsNPzrb3lhoBc5QG1fJrw4o9zQi/preview",
    ],


    [
    "শিশুদের কুরবানী ঈদের নতুন নাশীদ ইসমাঈলের কুরবানী Ismailer Kurbani Jaima",
    "Panvision tv",
    "3.7M",
    "7 days",
    "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview",
    ]


]



for (let index = 0; index < video_details.length; index++) {
    let element = document.querySelector(".content_part")

    element.innerHTML += `
    
    <div class='thumb_vid_wrapper'>
    <div class='thumb_wrapper'>
        <img class="thumbnail" src="thumbs_and_videos/Video-${index+1}/thumb.jpg">
    </div>

    <div class='title_wrapper'>
        <div class='left_channel'><img class='profile_pic' src='Channels/${video_details[index][1]}.jpg'></div>

        <div class='right_title'>
            <div class='right_top_title'> ${video_details[index][0]}</div>

            <div class='right_chnl_title'>
                <div class='chnl_name'>
                    <h6> ${video_details[index][1]}</h6>
                    <i class='fas fa-check-circle'></i>
                </div>

                <div class='right_time_title'><span>${video_details[index][2]} views</span> <span ><i style ="font-size: 4px !important; padding: 0px 5px;" class='point fas fa-circle'></i></span> <span>${video_details[index][3]} ago</span></div>
            </div>

        </div>
    </div>
</div>

    `
}

for (let i = 0; i < 9; i++) {
    let braille= document.querySelector(".braille")

    braille.innerHTML += `
        <div class="squre_braille"></div>
    `
}


let videoTag = document.querySelector("#videos")
let content_part = document.querySelector(".content_part")
let yt_home_logo = document.getElementById("youtube_home_logo")
let video_thumb = document.querySelectorAll(".thumb_vid_wrapper")
let left_menu_wrapper = document.querySelector(".left_menu_wrapper")
let tab_title = document.querySelector("#tab_title")
let play_part = document.querySelector(".play_part")
let main_part = document.querySelector(".main_part")
let header = document.querySelector("header")


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

video_thumb.forEach( (number,i) => {

    number.addEventListener('click', ()=> {
        tab_title.innerHTML = video_details[i][0]
        topFunction()
        left_menu_wrapper.style.display = "none"
        main_part.setAttribute("style","padding: 25px 40px;")
        content_part.classList.add("content_when_played")

        header.setAttribute("style","padding-left: 30px;")
        header.innerHTML +=`
        <div class="back_btn">
            <a href="index.html"><i class="fas fa-arrow-left"></i></a>
        </div>
        `
        play_part.innerHTML = `
    <div class="play_page_container">

        <div class="play_page_left">
    
            <div class="play_video_wrapper">
                <iframe id="videos" src="${video_details[i][4]}" allowfullscreen controls></iframe>
            </div>
    
            <div class="video_title">
                <div class="video_heading"><h3>${video_details[i][0]}</h3></div>
                <div class="video_options_wrapper">
    
                    <div class="right_time_title"><span>${video_details[i][2]} views</span> <span><i style ="font-size: 4px !important; padding: 0px 5px;" class='point fas fa-circle'></i></span> <span>${video_details[i][3]} ago</span></div>
                    <div class="video_react">
    
                        <div class="reactions">
                            <img id="like" src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/>
                            <img id="unlike" src="https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/>
                        </div>
    
                        <div class="share">
                            <i class="fas fa-share"></i>
                            <span class= "share_text">Share</span>
                        </div>
    
                        <div class="save">
                            <i class="fas fa-save"></i>
                            <span class= "save_text">Save</span>
                        </div>
    
                        <div class="vid_menu">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
    
    
                    </div>
    
                </div>
            </div>
    
            <div class="channel_details">
    
                <div class="vid_chnl_wrapper">
                    <div class='left_channel  video-play_chnl_logo'><img class='profile_pic' src='Channels/${video_details[i][1]}.jpg'></div>
                    
                    <div class="chnl_name_video_play_wrapper">
                        <div class='chnl_name chnl_name_video_play'>
                            <h6> ${video_details[i][1]}</h6>
                            <i class='fas fa-check-circle'></i>
                        </div>
    
                        <div class="subscribers_count">2.26 lakh subscribers</div>
                    </div>
    
                </div>
    
                
                <div class="subscribe_wrapper">
                    <img src= "https://helpdeskgeek.com/wp-content/pictures/2019/09/5-YouTube-Channels-Every-Serious-Tech-Fan-Should-Subscribe-To-Title-Image.jpg.optimal.jpg">
                </div>
    
            </div>
    
        </div>
      
    </div>  `


        let like = document.querySelector("#like")
        let unlike = document.querySelector("#unlike")

        let liked = false;
        let unliked = false;
        
        let like_link = "https://img.icons8.com/material-sharp/24/000000/thumb-up.png"
        let removed_like_link = "https://img.icons8.com/material-outlined/24/000000/thumb-up.png"
        
        let unlike_link = "https://img.icons8.com/material-sharp/24/000000/thumbs-down.png"
        let removed_unlike_link = "https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"


    
        like.addEventListener("click", function() {

            if (!liked) {
                liked = true
                unliked = false
                like.src = like_link;
                unlike.src = removed_unlike_link;
            } else if (liked) {
                liked = false
                unliked = true
                like.src = removed_like_link;
            }

        });
        

        unlike.addEventListener("click", function() {

            if (!unliked) {
                unliked = true
                liked = false
                unlike.src = unlike_link;
                like.src = removed_like_link;
            } else if (unliked) {
                unliked = false
                liked = true
                unlike.src = removed_unlike_link;
            }

        });
        


    })

})

let back_btn = document.querySelector(".back_btn")

yt_home_logo.addEventListener("click", function() {
    videoTag.src = "#"
    // tab_title.innerHTML = "YouTube"
});
