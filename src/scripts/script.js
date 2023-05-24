
    var step=-3;
    var counter_btn=0;
    var counter_input=0;
    var counter_img=0;
    var choice=[0];
    var ans=[0,0,0,0,0,0,0];
    var c_head="#000000";
    var c_body="#000000";
    var c_leg="#000000";
    var c_text="#000000";
    var c_textbg="#000000";
    var info_text="";
    var QRinfo=[0,0,0,0,0,0,0,0,0,0];
    var _vh = window.innerHeight * 0.01;
    var _vw = window.innerWidth * 0.01;
    
    function btn_click(btn_num) {
      choose(btn_num);
    }

    function form_submit(){
      return false;
    }

    function input_input(input_num){
      switch(input_num){
        case 1:
          input_input1();
          break;
        case 2:
          input_input2();
          break;
        case 3:
          input_input3();
          break;
      }
    }

    function choose(n){
      choice[step]=n;
      switch (step){
        case -3:situ_m3();break;
        case -2:situ_m2();break;
        case -1:situ_m1();break;
        case 0: situ_0();break;
        case 1: situ_1(n);break;
        case 1.5: situ_1d5();break;
        case 2: situ_2(n);break;
        case 2.5: situ_2d5();break;
        case 3: situ_3(n);break;
        case 3.5: situ_3d5();break;
        case 4: situ_4(n);break;
        case 4.5: situ_4d5();break;
        case 5: situ_5(n);break;
        case 5.5: situ_5d5();break;
        case 6: situ_6(n);break;
        case 6.5: situ_6d5();break;
        case 7: situ_7(n);break;
        case 7.5: situ_7d5();break;
        case 8: situ_8(n);break;
        case 9: situ_9(n);break;
        case 10: situ_10(n);break;
        case 11: situ_11(n);break;
        case 12: situ_12(n);break;
      }
      step = step + 1;
    }

    function situ_m3(){
      set_inner("scene","「是貢丸誒欸！」小男孩說道...");
      set_posi("scene","22 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
      del_img();
      create_img("src/img/貢丸.PNG");
      set_size("img1","40 * var(--vh)","40 * var(--vh)");
      set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
    }

    function situ_m2(){
      set_inner("scene","「啊～」");
      set_posi("scene","22 * var(--vh)","calc((50 * var(--vw)) - (2 * var(--vh)))");
      del_img();
      create_img("src/img/夾貢丸.PNG");
      set_size("img1","42 * var(--vh)","40 * var(--vh)");
      set_posi("img1","32 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
    }

    function situ_m1(){
      set_inner("scene","這時身為貢丸的你會...");
      set_posi("scene","22 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      del_img();
      create_img("src/img/貢丸飛.PNG");
      set_size("img1","42 * var(--vh)","40 * var(--vh)");
      set_posi("img1","32 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
    }

    function situ_0(){
      create_btn();
      //document.body.style.backgroundImage = "url('src/1.png')";
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("scene","");
      set_inner("btn1","滾向小巷");
      set_inner("btn2","滾向大路");
      del_img();
    }

    function situ_1(n){
      switch(n){
        case 1:
          //document.body.style.backgroundImage = "url('src/2-1.png')";
          set_inner("scene","「這裡是哪裡，好暗啊！」<br>在陰暗的巷子中...");
          create_img("src/img/小巷.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          //set_inner("btn1","被小狗叼走");
          //set_inner("btn2","滾進水溝");
          ans[2]=5;
          break;
        case 2:
          //document.body.style.backgroundImage = "url('src/2-2.png')";
          set_inner("scene","「啊呀，這個世界好大呀！」<br>在這車水馬龍的路上，我該...");
          create_img("src/img/大路.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          //set_inner("btn1","跟隨人群");
          //set_inner("btn2","到處冒險");
          ans[2]=2;
          break;
      }
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_1d5(){
      create_btn();
      switch(choice[1]){
        case 1:
          set_inner("btn1","被小狗叼走");
          set_inner("btn2","滾進水溝");
          break;
        case 2:
          set_inner("btn1","跟隨人群");
          set_inner("btn2","到處冒險");
          break;
      }
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_2(n){
      switch(choice[1]){
        case 1: 
          situ_2_1(n);
          break;
        case 2:
          situ_2_2(n);
          break;
      }
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_2_1(n){
      switch(n){
        case 1:
          //document.body.style.backgroundImage = "url('src/3-1.png')";
          set_inner("scene","「這就是人類最好的朋友嗎？」<br>我覺得它是...");
          create_img("src/img/黑狗.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[1]=3;
          break;
        case 2:
          //document.body.style.backgroundImage = "url('src/3-2.png')";
          set_inner("scene","「哈囉！你是老鼠嗎？你要跟著我...」");
          create_img("src/img/勞贖.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[1]=5;
          break;
      }
    }

    function situ_2_2(n){
      switch(n){
        case 1:
          //document.body.style.backgroundImage = "url('src/3-3.png')";
          set_inner("scene","「他們來來去去的，不知道要去哪，那我跟著他們好了...」<br>他們是...");
          create_img("src/img/人群.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[1]=2;
          break;
        case 2:
          //document.body.style.backgroundImage = "url('src/3-4.png')";
          set_inner("scene","「我想去到對面，但是這些<br>跑得好快有四個輪子的怪物是什麼，我該...」");
          create_img("src/img/過馬路.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[1]=4;
          break;
      }
    }

    function situ_2d5(){
      create_btn();
      switch(choice[1]){
        case 1: 
          situ_2d5_1();
          break;
        case 2:
          situ_2d5_2();
          break;
      }
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_2d5_1(){
      switch(choice[2]){
        case 1:
          set_inner("btn1","流浪狗");
          set_inner("btn2","有主人");
          break;
        case 2:
          set_inner("btn1","沿著水流");
          set_inner("btn2","看著水流");
          break;
      }
    }

    function situ_2d5_2(){
      switch(choice[2]){
        case 1:
          set_inner("btn1","光鮮亮麗");
          set_inner("btn2","平穩實際");
          break;
        case 2:
          set_inner("btn1","直接穿越");
          set_inner("btn2","等待號誌");
          break;
      }
    }

    function situ_3(n){
      switch(choice[1]){
        case 1:
          situ_3_1(n);
          break;
        case 2:
          situ_3_2(n);
          break;
      }
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_3_1(n){
      switch(choice[2]){
        case 1:
          create_img("src/img/主人.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          switch(n){
            case 1:
              set_inner("scene","「不知道你未來的主人會是怎樣的人呢！」");
              ans[4]=4;
              break;
            case 2:
              set_inner("scene","「你的主人會是怎樣的人呢？」");
              ans[4]=2;
              break;
          }
          break;
        case 2:
          set_inner("scene","「哇～水流裡好像有星星般，微弱的閃爍著...」<br>水流是…");
          create_img("src/img/星星.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          switch(n){
            case 1:
              ans[4]=5;
              break;
            case 2:
              ans[4]=3;
              break;
          }
          break;
      }
    }

    function situ_3_2(n){
      switch(choice[2]){
        case 1:
          set_inner("scene","我為什麼會想跟著他們呢...");
          create_img("src/img/人群.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          switch(n){
            case 1:
              ans[4]=3;
              break;
            case 2:
              ans[4]=2;
              break;
          }
          break;
        case 2:
          set_inner("scene","「這個世界也太熱鬧了吧！咦，我走這裡好了...」");
          create_img("src/img/大路.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          switch(n){
            case 1:
              ans[4]=5;
              break;
            case 2:
              ans[4]=1;
              break;
          }
          break;
      }
    }

    function situ_3d5(){
      create_btn();
      switch(choice[1]){
        case 1:
          situ_3d5_1();
          break;
        case 2:
          situ_3d5_2();
          break;
      }
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_3d5_1(n){
      switch(choice[2]){
        case 1:
          set_inner("btn1","年輕有幹勁");
          set_inner("btn2","慈祥的老人");
          break;
        case 2:
          set_inner("btn1","水流湍急");
          set_inner("btn2","水流緩慢");
          break;
      }
    }

    function situ_3d5_2(){
      switch(choice[2]){
        case 1:
          set_inner("btn1","他們和你一樣");
          set_inner("btn2","他們和你不一樣");
          break;
        case 2:
          set_inner("btn1","走圓環");
          set_inner("btn2","走岔路");
          break;
      }
    }

    function situ_4(n){
      switch(choice[1]){
        case 1:
          switch(choice[2]){
            case 1:
              set_inner("scene","「用狗狗的視角看了這個世界，<br>好奇妙啊，咦，你問我想去哪嗎...」");
              create_img("src/img/狗刁貢丸.PNG");
              set_size("img1","40 * var(--vh)","40 * var(--vh)");
              set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
              switch(n){
                case 1:
                  ans[0]=3;
                  break;
                case 2:
                  ans[0]=2;
                  break;
              }
              break;
            case 2:
              set_inner("scene","「第一次看到地底下的世界，<br>謝謝你小老鼠，陪我玩了這麼久，<br>什麼？再帶我去一個地方嗎...」");
              create_img("src/img/勞贖2.PNG");
              set_size("img1","40 * var(--vh)","40 * var(--vh)");
              set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
              switch(n){
                case 1:
                  ans[0]=5;
                  break;
                case 2:
                  ans[0]=2;
                  break;
              }
              break;
          }
          break;
        case 2:
          switch(choice[2]){
            case 1:
              set_inner("scene","「咦，你們到底要去到哪...」");
              create_img("src/img/人群2.PNG");
              set_size("img1","40 * var(--vh)","40 * var(--vh)");
              set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
              switch(n){
                case 1:
                  ans[0]=1;
                  break;
                case 2:
                  ans[0]=4;
                  break;
              }
              break;
            case 2:
              set_inner("scene","「終於來到這了，哇～這是...」");
              create_img("src/img/人群2.PNG");
              set_size("img1","40 * var(--vh)","40 * var(--vh)");
              set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
              switch(n){
                case 1:
                  ans[0]=5;
                  break;
                case 2:
                  ans[0]=4;
                  break;
              }
              break;
          }
          break;
      }
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_4d5(){
      create_btn();
      create_btn();
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_size("btn3","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","47.5 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn3","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("btn1","士林夜市");
      set_inner("btn2","兒童新樂園");
      set_inner("btn3","故宮");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_5(n){
      switch(n){
        case 1:
          set_inner("scene","來到士林夜市，當然要玩夜市遊戲！<br>「選哪個好呢...」");
          create_img("src/img/彈珠台.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[5]=3;
          break;
        case 2:
          set_inner("scene","來到兒童新樂園，當然要玩遊樂設施！<br>「選哪個好呢...」");
          create_img("src/img/旋轉木馬.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[5]=4;
          break;
        case 3:
          set_inner("scene","來到故宮博物院，當然要好好欣賞這些藝術品！<br>「選哪個好呢...」");
          create_img("src/img/故宮.PNG");
          set_size("img1","40 * var(--vh)","40 * var(--vh)");
          set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
          ans[5]=5;
          break;
      }
      del_btn();
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_5d5(){
      create_btn();
      switch(choice[5]){
        case 1:
          set_inner("btn1","打彈珠");
          set_inner("btn2","套圈圈");
          break;
        case 2:
          set_inner("btn1","碰碰車");
          set_inner("btn2","旋轉木馬");
          break;
        case 3:
          set_inner("btn1","跟著導覽人員");
          set_inner("btn2","自己參觀");
          break;
      }
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_6(n){
      set_inner("scene","玩得好累啊，<br>「這是什麼味道，怎麼這麼熟悉...」<br>沿著味道去...<br>「是火鍋！那是...」<br>我第一眼會看到...");
      create_img("src/img/火鍋.PNG");
      set_size("img1","40 * var(--vh)","40 * var(--vh)");
      set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
      switch(choice[5]){
        case 1:
          switch(n){
            case 1:
              ans[3]=3;
              break;
            case 2:
              ans[3]=4;
              break;
          }
          break;
        case 2:
          switch(n){
            case 1:
              ans[3]=5;
              break;
            case 2:
              ans[3]=1;
              break;
          }
          break;
        case 3:
          set_inner("scene","看著這些藝術品...<br>「這是什麼味道，怎麼這麼熟悉...」<br>沿著味道去...<br>「是火鍋！那是...」<br>我第一眼會看到...");
          switch(n){
            case 1:
              ans[3]=2;
              break;
            case 2:
              ans[3]=5;
              break;
          }
          break;
      }
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_6d5(){
      create_btn();
      create_btn();
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_size("btn3","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","47.5 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn3","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("btn1","貢丸");
      set_inner("btn2","米血");
      set_inner("btn3","百頁豆腐");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_7(){
      set_inner("scene","看著鴛鴦鍋裡熟悉的朋友們，<br>回想起那盞溫柔的阿婆小橙燈，<br>我該...");
      create_img("src/img/火鍋.PNG");
      set_size("img1","40 * var(--vh)","40 * var(--vh)");
      set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
      del_btn();
      del_btn();
      set_inner("btn1","▼　CLICK HERE");
      set_size("btn1","25 * var(--vh)","50 * var(--vh)");
      set_posi("btn1","75 * var(--vh)","calc((50 * var(--vw)) - (25 * var(--vh)))");
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_7d5(){
      create_btn();
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_inner("btn1","回到阿嬤的滷味攤");
      set_inner("btn2","繼續冒險");
      set_inner("scene","");
      del_img();
      step-=0.5;
      step=Math.round(step*10)/10;
    }

    function situ_8(n){
      switch(n){
        case 1:
          ans[6]=1;
          break;
        case 2:
          ans[6]=5;
          break;
      }
      del_btn();
      set_inner("btn1","");
      set_size("btn1","8 * var(--vh)","22 * var(--vh)");
      set_posi("btn1","88 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
      result();
      create_3d(0);
      set_size("threed","27 * var(--vh)","27 * var(--vh)");
      set_posi("threed","18.6 * var(--vh)","calc((50 * var(--vw)) - (19 * var(--vh)))");
    }

    function situ_9(n){
      document.body.style.backgroundImage = "url('src/選色.png')";
      if(Number(counter_btn) < 2){
        create_btn();
      }
      if(Number(counter_input) == 0){
        create_form();
        create_input("color");
        create_input("color");
        create_input("color");
      }
      else if(Number(counter_input) == 3){
        del_input();
        create_input("color");
      }
      set_size("btn1","10.5 * var(--vh)","10.5 * var(--vh)");
      set_size("btn2","3.8 * var(--vh)","10.2 * var(--vh)");
      set_size("input1","3.5 * var(--vh)","3.5 * var(--vh)");
      set_size("input2","3.5 * var(--vh)","3.5 * var(--vh)");
      set_size("input3","3.5 * var(--vh)","3.5 * var(--vh)");
      set_size("threed","39.5 * var(--vh)","39.5 * var(--vh)");
      set_posi("btn1","83.1 * var(--vh)","calc((50 * var(--vw)) + (4.1 * var(--vh)))");
      set_posi("btn2","76.5 * var(--vh)","calc((50 * var(--vw)) + (5.3 * var(--vh)))");
      set_posi("input1","17.1 * var(--vh)","calc((50 * var(--vw)) + (11 * var(--vh)))");
      set_posi("input2","26.7 * var(--vh)","calc((50 * var(--vw)) + (11 * var(--vh)))");
      set_posi("input3","36.4 * var(--vh)","calc((50 * var(--vw)) + (11 * var(--vh)))");
      set_posi("threed","45 * var(--vh)","calc((50 * var(--vw)) - (20.2 * var(--vh)))");
      document.getElementById("input1").value=c_head;
      document.getElementById("input2").value=c_body;
      document.getElementById("input3").value=c_leg;
      document.getElementById("input1").style.backgroundColor=c_head;
      document.getElementById("input2").style.backgroundColor=c_body;
      document.getElementById("input3").style.backgroundColor=c_leg;
      switch(n){
        case 1:
          break;
        case 2:
          situ_11(1);
          step=11;
          break;
      }
    }

    function situ_10(n){
      document.body.style.backgroundImage = "url('src/打字.png')";
      del_input();
      create_input("text");
      set_size("btn1","10.5 * var(--vh)","10.5 * var(--vh)");
      set_size("btn2","3.8 * var(--vh)","10.2 * var(--vh)");
      set_size("input1","3.5 * var(--vh)","3.5 * var(--vh)");
      set_size("input2","3.5 * var(--vh)","3.5 * var(--vh)");
      set_size("input3","6.1 * var(--vh)","29.2 * var(--vh)");
      set_size("threed","39.5 * var(--vh)","39.5 * var(--vh)");
      set_posi("btn1","83.1 * var(--vh)","calc((50 * var(--vw)) - (15 * var(--vh)))");
      set_posi("btn2","76.5 * var(--vh)","calc((50 * var(--vw)) + (5.3 * var(--vh)))");
      set_posi("input1","17.5 * var(--vh)","calc((50 * var(--vw)) + (11.3 * var(--vh)))");
      set_posi("input2","25.5 * var(--vh)","calc((50 * var(--vw)) + (11.3 * var(--vh)))");
      set_posi("input3","33.5 * var(--vh)","calc((50 * var(--vw)) - (14.8 * var(--vh)))");
      set_posi("threed","45 * var(--vh)","calc((50 * var(--vw)) - (20.2 * var(--vh)))");
      document.getElementById("input1").value=c_text;
      document.getElementById("input2").value=c_textbg;
      document.getElementById("input3").value=info_text;
      document.getElementById("input1").style.backgroundColor=c_text;
      document.getElementById("input2").style.backgroundColor=c_textbg;
      document.getElementById("input3").style.borderRadius= "5px";
      document.getElementById("input3").style.textAlign= "center";
      document.getElementById("input3").style.overflow= "auto";
      document.getElementById("input3").style.whiteSpace= "pre-wrap";
      switch(n){
        case 1:
          step=8;
          break;
        case 2:
          situ_11(1);
          step=11;
          break;
      }
    }

    function situ_11(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/貢丸QRCODE.png')";
          create_qrcode();
          try{
          del_form();
          del_3d();
          }
          catch(e){}
          if(counter_btn>1){del_btn();}
          set_size("btn1","10.5 * var(--vh)","10.5 * var(--vh)");
          set_posi("btn1","82.9 * var(--vh)","calc((50 * var(--vw)) - (5 * var(--vh)))");
          break;
        case 2:
          step--;
          break;
      }
    }

    function situ_12(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/掃描.png')";
          del_qrcode();
          set_posi("btn1","85.8 * var(--vh)","calc((50 * var(--vw)) - (5 * var(--vh)))");
          step-=2;
          break;
        case 2:
          step--;
          break;
      }
    }

    function result(){
      var a=0;
      var result=[0,0,0,0,0,0,0];
      var result_1=[a==5,		a==2||a==5,	a==2||a==5,	a==3||a==4||a==5,	a==3||a==5,		a==3||a==4,		a==5];
      var result_2=[a==2,		a==5,		a==5,		a==3||a==4,		a==3,			a==3,			a==1];
      var result_3=[a==3||a==2,		a==3,		a==5,		a==2||a==3||a==4,	a==4,			a==3||a==4||a==5,	a==5];
      var result_4=[a==4||a==5,		a==4||a==5,	a==2||a==5,	a==5,			a==3||a==5,		a==4,			a==5];
      var result_5=[a==5,		a==5,		a==5,		a==1||a==3,		a==5,			a==3||a==4,		a==5];
      var result_6=[a==3||a==5,		a==3||a==5,	a==5,		a==2,			a==4||a==5,		a==5,			a==1];
      var result_7=[a==2||a==4||a==5,	a==4||a==5,	a==2||a==5,	a==3||a==4,		a==1||a==3||a==5,	a==3,			a==5];
      var result_s=[result_1,result_2,result_3,result_4,result_5,result_6,result_7];
      var result_n=["導演","場務","場控","舞監","服化","攝影","特技"];
      var result_str=result_n[0];
      var i=0;
      var j=0;
      var i_max=0;
      for(i=0; i<7; i++){
        for(j=0; j<7; j++){
          a=Number(ans[j]);
          result_1=[a==5,		a==2||a==5,	a==2||a==5,	a==3||a==4||a==5,	a==3||a==5,		a==3||a==4,		a==5];
          result_2=[a==2,		a==5,		a==5,		a==3||a==4,		a==3,			a==3,			a==1];
          result_3=[a==3||a==2,		a==3,		a==5,		a==2||a==3||a==4,	a==4,			a==3||a==4||a==5,	a==5];
          result_4=[a==4||a==5,		a==4||a==5,	a==2||a==5,	a==5,			a==3||a==5,		a==4,			a==5];
          result_5=[a==5,		a==5,		a==5,		a==1||a==3,		a==5,			a==3||a==4,		a==5];
          result_6=[a==3||a==5,		a==3||a==5,	a==5,		a==2,			a==4||a==5,		a==5,			a==1];
          result_7=[a==2||a==4||a==5,	a==4||a==5,	a==2||a==5,	a==3||a==4,		a==1||a==3||a==5,	a==3,			a==5];
          result_s=[result_1,result_2,result_3,result_4,result_5,result_6,result_7];
          result_n=["導演","場務","場控","舞監","服化","攝影","特技"];
          if(result_s[i][j]){result[i]++;}
        }
        if(result[i]>result[i_max]){
          result_str=result_n[i];
          QRinfo[16]=i;
          i_max=i;
        }
        else if(i>0 && result[i]==result[i_max] && ans[i]>ans[i_max]){
          result_str=result_n[i];
          QRinfo[16]=i;
          i_max=i;
        }
      }
    document.body.style.backgroundImage = "url('src/"+result_str+".png')";
    //QRinfo[16]=result_str;
    //set_inner("scene",result_str);
    //set_inner("btn_num","result="+result);
    //set_inner("btn","result_s="+result_s);
    }

    function input_input1(){
      document.getElementById("input1").style.backgroundColor=document.getElementById("input1").value;
      switch(step){
        case 10:
          c_head=document.getElementById("input1").value;
          break;
        case 9:
          c_text=document.getElementById("input1").value;
          break;
      }
    }

    function input_input2(){
      document.getElementById("input2").style.backgroundColor=document.getElementById("input2").value;
      switch(step){
        case 10:
          c_body=document.getElementById("input2").value;
          break;
        case 9:
          c_textbg=document.getElementById("input2").value;
          break;
      }
    }

    function input_input3(){
      switch(step){
        case 10:
          document.getElementById("input3").style.backgroundColor=document.getElementById("input3").value;
          c_leg=document.getElementById("input3").value;
          break;
        case 9:
          info_text=document.getElementById("input3").value;
          break;
      }
    }

    function create_btn(){
      counter_btn++;
      var btn=document.createElement("button");
      btn.setAttribute("type","button");
      btn.setAttribute("id","btn"+counter_btn);
      btn.setAttribute("onclick","btn_click("+counter_btn+")");
      document.body.appendChild(btn);
      //set_inner("btn","counter_btn="+counter_btn);
    }

    function del_btn(){
      counter_btn--;
      var btn=document.getElementsByTagName("button");
      document.body.removeChild(btn[counter_btn]);
      //set_inner("btn","counter_btn="+counter_btn);
    }

    function create_form(){
      var form=document.createElement("form");
      form.setAttribute("id","form1");
      form.setAttribute("onsubmit","return form_submit()");
      document.body.appendChild(form);
    }

    function del_form(){
      var form=document.getElementById("form1");
      document.body.removeChild(form);
    }

    function create_qrcode(){
      var div=document.createElement("div");
      div.setAttribute("id","qrcode1");
      document.body.appendChild(div);
      QRinfo[0]=colorcodeToRGB(c_head)[0];
      QRinfo[1]=colorcodeToRGB(c_head)[1];
      QRinfo[2]=colorcodeToRGB(c_head)[2];
      QRinfo[3]=colorcodeToRGB(c_body)[0];
      QRinfo[4]=colorcodeToRGB(c_body)[1];
      QRinfo[5]=colorcodeToRGB(c_body)[2];
      QRinfo[6]=colorcodeToRGB(c_leg)[0];
      QRinfo[7]=colorcodeToRGB(c_leg)[1];
      QRinfo[8]=colorcodeToRGB(c_leg)[2];
      QRinfo[9]=colorcodeToRGB(c_text)[0];
      QRinfo[10]=colorcodeToRGB(c_text)[1];
      QRinfo[11]=colorcodeToRGB(c_text)[2];
      QRinfo[12]=colorcodeToRGB(c_textbg)[0];
      QRinfo[13]=colorcodeToRGB(c_textbg)[1];
      QRinfo[14]=colorcodeToRGB(c_textbg)[2];
      QRinfo[15]=info_text;
      var qrcode=new QRCode(document.getElementById("qrcode1"));
      qrcode.makeCode(QRinfo.toString());
    }

    function del_qrcode(){
      var div=document.getElementById("qrcode1");
      document.body.removeChild(div);
    }

    function create_input(type){
      counter_input++;
      var input=document.createElement("input");
      input.setAttribute("type",type);
      input.setAttribute("class",type);
      input.setAttribute("id","input" + counter_input);
      document.getElementById("form1").appendChild(input);
      input=document.getElementById("input" + counter_input);
      input.setAttribute("oninput","input_input(" + counter_input + ")");
    }

    function del_input(){
      counter_input--;
      var input=document.getElementsByTagName("input");
      document.getElementById("form1").removeChild(input[counter_input]);
    }

    function create_img(src){
      counter_img++;
      var img=document.createElement("img");
      img.setAttribute("src",src);
      img.setAttribute("id","img" + counter_img);
      document.body.appendChild(img);
    }

    function del_img(){
      var img=document.getElementsByTagName("img");
      document.body.removeChild(img[counter_img]);
      counter_img--;
    }

    function set_size(i,h,w){
      document.getElementById(i).style.height="calc("+h+")";
      document.getElementById(i).style.width="calc("+w+")";
    }

    function set_posi(i,t,l){
      document.getElementById(i).style.top="calc("+t+")";
      document.getElementById(i).style.left="calc("+l+")";
    }

    function set_inner(id,i){
      document.getElementById(id).innerHTML=i;
    }

    function colorcodeToRGB(color){
      var sharp=color.indexOf("#");
      var R=color.slice(sharp+1,sharp+3);
          R=parseInt(R, 16)
      var G=color.slice(sharp+3,sharp+5);
          G=parseInt(G, 16)
      var B=color.slice(sharp+5,sharp+7);
          B=parseInt(B, 16)
      var RGB=[R,G,B];
      return RGB;
    }

    function window_load(){
      _vh = window.innerHeight * 0.01;
      _vw = window.innerWidth * 0.01;
      document.body.style.height=_vh*100;
      document.body.style.width=_vw*100;
      document.documentElement.style.setProperty('--vh',_vh+'px');
      document.documentElement.style.setProperty('--vw',_vw+'px');
      create_btn();
      set_inner("btn1","▼　CLICK HERE");
      create_img("src/img/滷味攤.PNG");
      set_size("img1","40 * var(--vh)","40 * var(--vh)");
      set_posi("img1","34 * var(--vh)","calc((50 * var(--vw)) - (20 * var(--vh)))");
    }

    function window_resize(){
      _vh = window.innerHeight * 0.01;
      _vw = window.innerWidth * 0.01;
      document.body.style.height=_vh*100;
      document.body.style.width=_vw*100;
      document.documentElement.style.setProperty('--vh',_vh+'px');
      document.documentElement.style.setProperty('--vw',_vw+'px');
    }

    window.addEventListener('resize',window_resize);
    window.addEventListener('load',window_load);
