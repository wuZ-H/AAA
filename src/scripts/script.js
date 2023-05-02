
    var step=0;
    var counter_btn=0;
    var counter_input=0;
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
        case 0: situ_0();break;
        case 1: situ_1(n);break;
        case 2: situ_2(n);break;
        case 3: situ_3(n);break;
        case 4: situ_4(n);break;
        case 5: situ_5(n);break;
        case 6: situ_6(n);break;
        case 7: situ_7(n);break;
        case 8: situ_8(n);break;
        case 9: situ_9(n);break;
        case 10: situ_10(n);break;
        case 11: situ_11(n);break;
        case 12: situ_12(n);break;
      }
      step = step + 1;
    }

    function situ_0(){
      create_btn();
      document.body.style.backgroundImage = "url('src/1.png')";
      set_size("btn1","10 * var(--vh)","20 * var(--vh)");
      set_size("btn2","10 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","56 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","75 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      //set_inner("scene","貢丸滾出來");
      //set_inner("btn1","滾向小巷");
      //set_inner("btn2","滾向大路");
    }

    function situ_1(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/2-1.png')";
          //set_inner("scene","小巷");
          //set_inner("btn1","被狗叼走");
          //set_inner("btn2","滾進水溝");
          ans[2]=5;
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/2-2.png')";
          //set_inner("scene","大路");
          //set_inner("btn1","跟隨人群");
          //set_inner("btn2","到處冒險");
          ans[2]=2;
          break;
      }
      set_size("btn1","30 * var(--vh)","22 * var(--vh)");
      set_size("btn2","30 * var(--vh)","22 * var(--vh)");
      set_posi("btn1","25 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
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
    }

    function situ_2_1(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/3-1.png')";
          //set_inner("scene","狗是");
          //set_inner("btn1","流浪狗");
          //set_inner("btn2","有主人");
          ans[1]=3;
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/3-2.png')";
          //set_inner("scene","水溝");
          //set_inner("btn1","沿著水流");
          //set_inner("btn2","看著水流");
          ans[1]=5;
          break;
      }
      set_size("btn1","9 * var(--vh)","20 * var(--vh)");
      set_size("btn2","9 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","72 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
    }

    function situ_2_2(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/3-3.png')";
          //set_inner("scene","人群");
          //set_inner("btn1","光鮮亮麗");
          //set_inner("btn2","平穩實際");
          ans[1]=2;
          set_size("btn1","30 * var(--vh)","22 * var(--vh)");
          set_size("btn2","30 * var(--vh)","22 * var(--vh)");
          set_posi("btn1","25 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
          set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/3-4.png')";
          //set_inner("scene","冒險");
          //set_inner("btn1","穿越馬路");
          //set_inner("btn2","等紅燈");
          ans[1]=4;
          set_size("btn1","9 * var(--vh)","20 * var(--vh)");
          set_size("btn2","9 * var(--vh)","20 * var(--vh)");
          set_posi("btn1","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
          set_posi("btn2","72 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
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
    }
    function situ_3_1(n){
      switch(choice[2]){
        case 1:
          //set_inner("scene","狗的主人");
          //set_inner("btn1","年輕");
          //set_inner("btn2","老");
          switch(n){
            case 1:
              document.body.style.backgroundImage = "url('src/4-1.png')";
              ans[4]=4;
              break;
            case 2:
              document.body.style.backgroundImage = "url('src/4-2.png')";
              ans[4]=2;
              break;
          }
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/4-4.png')";
          //set_inner("scene","水流");
          //set_inner("btn1","急");
          //set_inner("btn2","緩");
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
      set_size("btn1","30 * var(--vh)","22 * var(--vh)");
      set_size("btn2","30 * var(--vh)","22 * var(--vh)");
      set_posi("btn1","25 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
    }

    function situ_3_2(n){
      switch(choice[2]){
        case 1:
          //set_inner("scene","他們");
          //set_inner("btn1","和你一樣");
          //set_inner("btn2","不一樣");
          switch(n){
            case 1:
              document.body.style.backgroundImage = "url('src/4-5.png')";
              ans[4]=3;
              break;
            case 2:
              document.body.style.backgroundImage = "url('src/4-6.png')";
              ans[4]=2;
              break;
          }
          set_size("btn1","9 * var(--vh)","20 * var(--vh)");
          set_size("btn2","9 * var(--vh)","20 * var(--vh)");
          set_posi("btn1","58 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
          set_posi("btn2","78 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/4-7.png')";
          //set_inner("scene","走向");
          //set_inner("btn1","圓環");
          //set_inner("btn2","岔路");
          switch(n){
            case 1:
              ans[4]=5;
              break;
            case 2:
              ans[4]=1;
              break;
          }
          set_size("btn1","30 * var(--vh)","22 * var(--vh)");
          set_size("btn2","30 * var(--vh)","22 * var(--vh)");
          set_posi("btn1","25 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
          set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
          break;
      }
    }
    function situ_4(n){
      switch(choice[1]){
        case 1:
          switch(choice[2]){
            case 1:
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
      create_btn();
      set_size("btn1","9 * var(--vh)","20 * var(--vh)");
      set_size("btn2","9 * var(--vh)","20 * var(--vh)");
      set_size("btn3","9 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","35 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","51 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn3","69 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      document.body.style.backgroundImage = "url('src/5-1.png')";
      //set_inner("scene","看到");
      //set_inner("btn1","士林夜市");
      //set_inner("btn2","兒童新樂園");
      //set_inner("btn3","故宮");
    }

    function situ_5(n){
      switch(n){
        case 1:
          document.body.style.backgroundImage = "url('src/6-1.png')";
          //set_inner("scene","士林夜市");
          //set_inner("btn1","打彈珠");
          //set_inner("btn2","套圈圈");
          ans[5]=3;
          break;
        case 2:
          document.body.style.backgroundImage = "url('src/6-2.png')";
          //set_inner("scene","兒童新樂園");
          //set_inner("btn1","碰碰車");
          //set_inner("btn2","旋轉木馬");
          ans[5]=4;
          break;
        case 3:
          document.body.style.backgroundImage = "url('src/6-3.png')";
          //set_inner("scene","故宮");
          //set_inner("btn1","跟著導覽");
          //set_inner("btn2","自己看");
          ans[5]=5;
          break;
      }
      del_btn();
      set_size("btn1","30 * var(--vh)","22 * var(--vh)");
      set_size("btn2","30 * var(--vh)","22 * var(--vh)");
      set_posi("btn1","25 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
      set_posi("btn2","60 * var(--vh)","calc((50 * var(--vw)) - (11 * var(--vh)))");
    }

    function situ_6(n){
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
      create_btn();
      set_size("btn1","10 * var(--vh)","25 * var(--vh)");
      set_size("btn2","10 * var(--vh)","25 * var(--vh)");
      set_size("btn3","10 * var(--vh)","25 * var(--vh)");
      set_posi("btn1","33 * var(--vh)","calc((47 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","54 * var(--vh)","calc((47 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn3","76 * var(--vh)","calc((47 * var(--vw)) - (10 * var(--vh)))");
      document.body.style.backgroundImage = "url('src/7-1.png')";
      //set_inner("scene","火鍋");
      //set_inner("btn1","貢丸");
      //set_inner("btn2","米血");
      //set_inner("btn3","百頁豆腐");
    }

    function situ_7(){
      del_btn();
      set_size("btn1","9 * var(--vh)","20 * var(--vh)");
      set_size("btn2","9 * var(--vh)","20 * var(--vh)");
      set_posi("btn1","60 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      set_posi("btn2","72 * var(--vh)","calc((50 * var(--vw)) - (10 * var(--vh)))");
      document.body.style.backgroundImage = "url('src/8-1.png')";
      //set_inner("scene","想起阿罵的滷味攤");
      //set_inner("btn1","回去");
      //set_inner("btn2","繼續冒險");
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
    create_btn();
    window.addEventListener('load',window_load);